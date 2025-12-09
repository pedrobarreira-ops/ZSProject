import { loadConfig } from './config';
import { read, write } from './db';

type CliArgs = {
  dryRun: boolean;
  table?: string;
  sql?: string;
  backupChecked: boolean;
};

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const parsed: CliArgs = { dryRun: false, backupChecked: false };
  args.forEach((arg) => {
    if (arg === '--dry-run') parsed.dryRun = true;
    if (arg === '--backup-ok') parsed.backupChecked = true;
    if (arg.startsWith('--table=')) parsed.table = arg.split('=')[1];
    if (arg.startsWith('--sql=')) parsed.sql = arg.slice('--sql='.length);
  });
  return parsed;
}

async function main() {
  const args = parseArgs();
  const cfg = loadConfig();

  if (!args.sql) {
    console.log('Usage: npm run starter:cli -- --sql="SELECT TOP 1 * FROM Products" [--table=Products] [--dry-run] [--backup-ok]');
    console.log('- Use --dry-run for preview writes (skips commit).');
    console.log('- Use --backup-ok to confirm you have a recent backup before writes.');
    return;
  }

  const isWrite = /^(\s*insert|\s*update|\s*delete)/i.test(args.sql);

  if (isWrite) {
    if (!args.table) {
      console.error('For writes, specify --table=TableName to enforce whitelist.');
      process.exit(1);
    }
    if (!args.backupChecked) {
      console.error('Confirm a recent backup with --backup-ok before running writes.');
      process.exit(1);
    }
    if (args.dryRun) {
      console.log('Dry-run enabled: showing planned write, no commit will occur.');
      console.log(args.sql);
      return;
    }
    await write(args.table, async (tx) => {
      const req = tx.request();
      await req.query(args.sql!);
    });
    console.log('✅ Write executed inside transaction for table:', args.table);
  } else {
    const rows = await read(args.sql);
    console.log(`✅ Read succeeded. Rows: ${rows.length}`);
    console.log(JSON.stringify(rows.slice(0, 5), null, 2));
    if (rows.length > 5) {
      console.log('...truncated');
    }
  }
}

void main();

