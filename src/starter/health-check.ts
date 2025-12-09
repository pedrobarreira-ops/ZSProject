import { loadConfig } from './config';
import { listExistingTables, testConnection } from './db';

async function main() {
  try {
    const cfg = loadConfig();
    console.log('Running health check with database:', cfg.database);

    const ok = await testConnection();
    if (!ok) {
      console.error('❌ Connection test failed.');
      process.exitCode = 1;
      return;
    }
    console.log('✅ Connection successful.');

    if (cfg.allowedTables.length) {
      const existing = await listExistingTables(cfg.allowedTables);
      const missing = cfg.allowedTables.filter((t) => !existing.includes(t));
      console.log(`Allowed tables (writes): ${cfg.allowedTables.join(', ')}`);
      if (missing.length) {
        console.warn(`⚠️ Missing expected tables: ${missing.join(', ')}`);
        process.exitCode = 1;
      } else {
        console.log('✅ Allowed tables exist.');
      }
    } else {
      console.warn('⚠️ No ALLOWED_TABLES set. Writes will be blocked unless you add them.');
    }
  } catch (err) {
    console.error('❌ Health check error:', err);
    process.exitCode = 1;
  }
}

void main();

