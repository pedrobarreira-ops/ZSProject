import sql from 'mssql';
import { loadConfig } from './config';

let pool: sql.ConnectionPool | null = null;

export function buildSqlConfig() {
  const cfg = loadConfig();
  const server = cfg.instance ? `${cfg.server}\\${cfg.instance}` : cfg.server;
  return {
    user: cfg.user,
    password: cfg.password,
    server,
    port: cfg.port,
    database: cfg.database,
    options: {
      encrypt: true,
      trustServerCertificate: cfg.trustServerCertificate,
    },
  } satisfies sql.config;
}

export async function getPool(): Promise<sql.ConnectionPool> {
  if (pool) return pool;
  pool = await sql.connect(buildSqlConfig());
  return pool;
}

function ensureAllowed(table: string) {
  const { allowedTables } = loadConfig();
  if (!allowedTables.length) return;
  if (!allowedTables.includes(table)) {
    throw new Error(`Writes to table "${table}" are not allowed. Allowed: ${allowedTables.join(', ')}`);
  }
}

export async function testConnection() {
  const p = await getPool();
  const result = await p.request().query('SELECT 1 AS ok');
  return result.recordset?.[0]?.ok === 1;
}

export async function read(query: string, params?: Record<string, string | number | boolean>) {
  const p = await getPool();
  const req = p.request();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      req.input(key, value as any);
    });
  }
  const result = await req.query(query);
  return result.recordset;
}

export async function write<T>(table: string, run: (tx: sql.Transaction) => Promise<T>): Promise<T> {
  ensureAllowed(table);
  const p = await getPool();
  const tx = new sql.Transaction(p);
  await tx.begin();
  try {
    const result = await run(tx);
    await tx.commit();
    return result;
  } catch (err) {
    await tx.rollback();
    throw err;
  }
}

export async function listExistingTables(names: string[]) {
  if (!names.length) return [];
  const placeholders = names.map((_, idx) => `@n${idx}`).join(',');
  const p = await getPool();
  const req = p.request();
  names.forEach((name, idx) => req.input(`n${idx}`, name));
  const result = await req.query(
    `SELECT name FROM sys.tables WHERE name IN (${placeholders})`
  );
  return result.recordset.map((r) => r.name as string);
}

