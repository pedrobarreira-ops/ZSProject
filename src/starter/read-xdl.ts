import fs from 'fs';
import path from 'path';

type Parsed = {
  server?: string;
  database?: string;
  user?: string;
  password?: string;
};

function parseConnectionString(raw: string): Parsed {
  const parts = raw
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean);

  const parsed: Parsed = {};
  for (const part of parts) {
    const [k, ...rest] = part.split('=');
    const key = k.trim().toLowerCase();
    const value = rest.join('=').trim();
    if (!value) continue;
    if (key === 'data source' || key === 'server') parsed.server = value;
    if (key === 'initial catalog' || key === 'database') parsed.database = value;
    if (key === 'user id' || key === 'uid' || key === 'user') parsed.user = value;
    if (key === 'password' || key === 'pwd') parsed.password = value;
  }
  return parsed;
}

function parseXdlContent(raw: string): Parsed {
  // Try connection-string style first
  const csRegex = /(?:data source|server)\s*=\s*[^;]+;[^"]+/i;
  const csMatch = raw.match(csRegex);
  if (csMatch) return parseConnectionString(csMatch[0]);

  // Try XML-ish attributes (best-effort)
  const p: Parsed = {};
  const get = (label: string) => {
    const m = raw.match(new RegExp(`${label}\\s*=\\s*([^\\r\\n"<]+)`, 'i'));
    return m?.[1]?.trim();
  };
  p.server = get('Server') ?? p.server;
  p.database = get('Database') ?? p.database;
  p.user = get('User') ?? p.user;
  p.password = get('Password') ?? p.password;
  return p;
}

function readFileSmart(targetPath: string): string {
  const encodings: BufferEncoding[] = ['utf8', 'utf16le', 'latin1'];
  for (const enc of encodings) {
    try {
      return fs.readFileSync(targetPath, { encoding: enc });
    } catch (err) {
      // try next
    }
  }
  throw new Error(`Could not read file with tried encodings: ${encodings.join(', ')}`);
}

function main() {
  const arg = process.argv.find((a) => a.startsWith('--path='));
  const xdlPath = arg ? arg.replace('--path=', '') : 'C:\\\\Zone Soft\\\\ZSRest\\\\ZSRest.xdl';

  const resolved = path.resolve(xdlPath);
  console.log(`Reading XDL: ${resolved}`);

  const raw = readFileSmart(resolved);
  const parsed = parseXdlContent(raw);

  console.log('Parsed (do not auto-write secrets; copy manually to .env):');
  if (parsed.server) console.log(`  DB_SERVER=${parsed.server}`);
  if (parsed.database) console.log(`  DB_NAME=${parsed.database}`);
  if (parsed.user) console.log(`  DB_USER=${parsed.user}`);
  if (parsed.password) console.log(`  (password found; enter manually into DB_PASSWORD)`);

  if (!parsed.server && !parsed.database && !parsed.user) {
    console.warn('⚠️ Could not extract values. Please open the XDL file and share a sample format.');
    process.exitCode = 1;
  }
}

main();

