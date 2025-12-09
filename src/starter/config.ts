import dotenv from 'dotenv';

dotenv.config();

export type StarterConfig = {
  server: string;
  instance?: string;
  port: number;
  database: string;
  user: string;
  password: string;
  trustServerCertificate: boolean;
  allowedTables: string[];
  apiBase?: string;
  apiKey?: string;
};

function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export function loadConfig(): StarterConfig {
  const allowedTables = (process.env.ALLOWED_TABLES ?? '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  return {
    server: required('DB_SERVER', process.env.DB_SERVER),
    instance: process.env.DB_INSTANCE || undefined,
    port: Number(process.env.DB_PORT || 1433),
    database: required('DB_NAME', process.env.DB_NAME),
    user: required('DB_USER', process.env.DB_USER),
    password: required('DB_PASSWORD', process.env.DB_PASSWORD),
    trustServerCertificate: String(process.env.DB_TRUST_SERVER_CERT ?? 'true').toLowerCase() === 'true',
    allowedTables,
    apiBase: process.env.ZS_API_BASE,
    apiKey: process.env.ZS_API_KEY,
  };
}

