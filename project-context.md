# Project Context (Zonesoft AI Helper)

BMAD agents: load and follow this file before any workflow. Treat this as the source of truth.

## Core Principles
- Single user (Pedro); each client = its own repo/project (single-tenant per project).
- Default to direct DB access (local SQL Server from Zonesoft POS) to avoid API fees; use API only for hosted/online tools that need it.
- Keep secrets in `.env` per project; never hardcode creds.

## Safety & Guardrails
- Use a dedicated DB user with minimal rights; whitelist writeable tables.
- Health check before work: verify DB reachability, creds, and allowed tables.
- Writes: prefer dry-run first; wrap in transactions; require recent backup/export before bulk writes.
- Log changes locally (table, row counts, keys/fields changed).

## Starter Kit Usage
- Copy `starter/env.example` to `.env` and fill per client.
- Health check: `npm run starter:health-check`.
- CLI: `npm run starter:cli -- --sql="..." [--table=Name --backup-ok --dry-run]`.

## Zonesoft Notes (running list)
- If API is required (hosted web), use API mode; no direct DB over internet.
- For local tools, prioritize offline-friendly workflows (live reads, fail-fast writes if DB down).

## To Refine
- Add any client-specific quirks, schema notes, or tested table allowlist as discovered.

