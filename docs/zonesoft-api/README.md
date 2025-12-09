# Zonesoft API Documentation

Primary hub for Zonesoft API and ZSROI docs (PDFs and converted markdown).

## Index

### Main API (ZSAPI)
- `converted/IntegrationManual.md` — ZSAPI v3 Integration Manual (Jan 2024), all interfaces/actions, auth conventions.
- `converted/StructureOfEntities.md` — ZSAPI v3 entities and fields (Jul 2024).
- `converted/IntegrationManagementPlatformManual.md` — Platform onboarding (user registration, integration setup).

### ZSROI
- `converted/GenericIntegration.md` — ZSROI generic integration guide (menus, orders, status, POS).
- `converted/IntegrationManagementPlatformManual.md` — ZSROI platform onboarding (2024-05-27) — same filename; ZSROI copy lives alongside main copy.

### Postman
- `PostmanCollection/PostmanCollection_ZSAPI_V3/postman_collection.json`
- Environments: `api.zonesoft.org.postman_environment`, `sandbox.zonesoft.org.postman_environment`

### Originals
- PDFs remain alongside conversions under `docs/zonesoft-api/` and `docs/zonesoft-api/ZSROI/`.

## Usage
- For AI agents: load markdown versions for context; refer to Postman for request examples/signing.
- For development: use IntegrationManual + StructureOfEntities for endpoints and data models; GenericIntegration for ZSROI flows.
- For client projects: copy relevant markdown/PDFs or link to this folder.

## Maintenance
- When new PDFs arrive, drop them here and convert via `python scripts/convert_pdfs.py`.
- If filenames clash (e.g., two platform manuals), keep the folder prefix (`ZSROI/`) or add a suffix before conversion.

