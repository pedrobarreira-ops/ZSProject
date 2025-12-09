---
stepsCompleted: [1, 2, 4]
inputDocuments: []
session_topic: "AI-driven foundation (BMAD) for Zonesoft integrations: web ordering tied to Zonesoft POS + local DB tools for product editing/menu image ingestion"
session_goals: "Client-ready documentation and reusable rules/tech preferences so new client projects can git pull and build quickly"
selected_approach: "ai-recommended"
techniques_used:
- Constraint Mapping
- Solution Matrix
- Failure Analysis
ideas_generated: []
context_file: ""
---

# Brainstorming Session Results

**Facilitator:** Pedro
**Date:** 2025-12-09

## Session Overview

**Topic:** AI-driven foundation (BMAD) for Zonesoft integrations: web ordering tied to Zonesoft POS + local DB tools for product editing/menu image ingestion
**Goals:** Client-ready documentation and reusable rules/tech preferences so new client projects can git pull and build quickly

### Context Guidance
No additional context provided; using default focus areas (problems, feature ideas, UX, tech approaches, value, differentiation, risks, success metrics).

### Session Setup
Aligned on creating a reusable integration backbone for both web (ordering → POS) and local DB tools (product editing/menu ingestion), with client-ready documentation and rules to enable rapid spin-up for new customers.

## Technique Selection

**Approach:** AI-Recommended Techniques  
**Analysis Context:** AI-driven Zonesoft integration backbone for any client project (not limited to ordering/product editing); goal is client-ready docs, reusable rules/tech prefs, and rapid spin-up via git pull.

**Recommended Techniques:**

- **Constraint Mapping (deep):** Surface Zonesoft-wide invariants (auth/tenant, API vs DB access modes, POS connectivity patterns, data freshness/latency, deployment contexts like cloud/edge/on-prem, compliance/security). Outcome: canonical guardrails for all Zonesoft builds.
- **Solution Matrix (structured):** Map a starter-kit catalog across delivery surfaces (web, mobile, desktop, services), integration modes (API, DB, hybrid), sync patterns (polling/webhooks/files), offline/queuing, observability, rollout. Outcome: standard playbook + module matrix reusable across client types.
- **Failure Analysis (deep):** Pre-mortem for Zonesoft scenarios (POS outages/rate limits, schema drift, connectivity issues, ACL/roles misconfig, bad data/ETL, OCR/import errors, deployment drift). Outcome: hardened defaults and checks baked into templates and agent prompts.

**AI Rationale:** This sequence first establishes non-negotiable guardrails, then designs a reusable module/playbook matrix, and finally stress-tests it against realistic Zonesoft failure modes so the starter kits and agent prompts ship with resilience baked in.

## Technique Execution — Constraint Mapping (in progress)

- User model: single user (you), one repo per client; treat each project as single-tenant (no in-app tenant selector).
- Identity: just you; use per-project admin token/creds; no multi-user roles for now.
- Tenant isolation: handled implicitly by separate repos/projects; no in-app isolation needed.
- Integration mode preference: default to direct DB to avoid Zonesoft API fees; use API only when building online/externally hosted tools that need official endpoints (e.g., restaurant websites).
- Config/secrets: keep per-project env for DB host/creds and any API tokens; avoid hardcoding.
- Direct DB baseline: connect to local SQL Server from Zonesoft POS; prompt for server/instance, database, user/password; store in .env (not code). Include “test connection” and instance discovery helper. Use a dedicated DB user with minimal rights. Before bulk writes, require a recent backup or export affected tables. Wrap writes in transactions; log changes locally; restrict writes to known tables; no schema changes.
- Data freshness/offline: offline-friendly (works without internet); requires local DB reachable. Reads always live from DB (no cache). Writes fail fast if DB unreachable (no queued writes). Pre-checks: DB reachable, creds valid, last backup time if available. Optional cache can be added later.
- Observability/safety: local log per project with DB actions, touched tables, row counts, timestamps, errors. For writes, record before/after or keys+fields changed. Provide dry-run/simulate for bulk writes. Include a health-check command to verify DB reachability and allowed table access.

## Technique Execution — Solution Matrix (defaults)

- Local Desktop/Tool (default): Direct DB; live reads/writes; offline yes; observability via local log + health check; rollout via local installer and .env for DB creds.
- Hosted Web App (when online tool needed): API mode; API calls only; offline no; observability via basic logs/metrics; rollout via hosted deploy with env API keys.
- Background Job/CLI (imports/exports/bulk ops): Direct DB on-site or API remote; batch with dry-run; offline yes if on-site, no if remote API; observability via logs + dry-run + backup check; rollout as packaged CLI with env creds.

## Technique Execution — Failure Analysis (pre-mortem)

- POS/API unreachable: Show clear error; retry with backoff; for hosted/API, surface status; for local, prompt to check service.
- Schema drift (direct DB): Detect expected schema on start; fail fast if mismatch; document supported versions.
- Bad data/ETL issues: Validate inputs; dry-run with row counts; backup/export before bulk writes; log diffs.
- Permissions/ACL: Use dedicated DB user; pre-check required rights; fail with guidance if missing.
- Connectivity (local): Detect DB reachability before actions; no queued writes; offline friendly when DB local.
- OCR/import errors (menu/image): Validate parsed rows; flag anomalies; allow manual review before commit.
- Deployment drift: Keep per-project .env; no hardcoded creds; health check command; simple version note in logs.

## Technique Execution Results

**Constraint Mapping:**
- Single-user; one repo per client; single-tenant per project.
- Direct DB default; API only for hosted/online tools needing official endpoints.
- .env per project; dedicated DB user with minimal rights; backup/export before bulk writes; transactions + change logs; allowed-table whitelist; no schema changes.
- Offline-friendly local tools; live reads; writes fail fast if DB down; pre-checks for reachability/creds/backup.
- Observability: local logs, before/after (or keys+fields) for writes, dry-run for bulk ops, health check.

**Solution Matrix:**
- Local Desktop/Tool: Direct DB; live; offline yes; local log + health check; local installer + .env.
- Hosted Web App: API only; offline no; basic logs/metrics; hosted deploy with env API keys.
- Background Job/CLI: Direct DB on-site or API remote; batch with dry-run; offline yes on-site; logs + backup check; packaged CLI with env creds.

**Failure Analysis:**
- POS/API unreachable → clear error + retry/backoff.
- Schema drift → detect on start; fail fast; document supported versions.
- Bad data/ETL → validate; dry-run; backup/export pre bulk writes; log diffs.
- Permissions → dedicated user; pre-check rights; helpful failure.
- Connectivity → check DB reachability; no queued writes.
- OCR/import → validate parsed rows; flag anomalies; manual review.
- Deployment drift → per-project .env; health check; version note in logs.

## Idea Organization & Action Plan

- Starter template: Create a Zonesoft starter repo template with `.env` sample (DB server/instance, DB name, user/pass, optional API token), health check command (DB reachability + permission check), direct DB helpers (instance discovery, test connection, read/write wrappers with transactions and allowed tables), and logging (local log with before/after or keys+fields for writes; dry-run mode).
- Local tool baseline: Live reads/writes; backup/export check before bulk writes; offline-friendly.
- Hosted web baseline (optional): API-only mode; env for API keys; basic logs/metrics.
- CLI/batch baseline: Packaged CLI with dry-run, backup check, env creds; supports on-site direct DB or remote API.
- Failure mitigations baked in: Schema check on start; retry/backoff on POS/API; input validation; anomaly flagging for OCR/imports.

## Next Actions (Starter Repo Task List)

- Scaffold starter repo: init template, add `.env.example`.
- Health check: command/script to verify DB reachability + permissions.
- Direct DB helpers: instance discovery script; test connection; read/write wrappers (transactions, allowed-table whitelist); local logging with before/after or keys+fields; dry-run option.
- Backup/guardrails: optional pre-bulk backup/export check; refuse bulk writes without recent backup confirmation.
- CLI/batch harness: packaged CLI skeleton with dry-run and backup check; env-based creds.
- Hosted web (optional): API-only mode skeleton with env API keys + basic logging/metrics.
- Update docs: quickstart for local tool, CLI, and hosted web variants; note schema/version expectations; remind to keep creds in `.env`.

