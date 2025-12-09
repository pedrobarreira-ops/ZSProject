# Zonesoft AI Helper

An AI-powered development assistant specialized for Zonesoft API integration. This tool helps developers quickly build applications (like restaurant websites, ordering systems, etc.) that connect to Zonesoft's API.

## What This Project Does

This project provides:
- **AI-powered code generation** for Zonesoft API integrations
- **Templates and examples** for common use cases (online ordering, menu management, etc.)
- **API documentation** and helper utilities
- **Best practices** for Zonesoft API development

## Starter assets for Zonesoft integrations
- Full docs and converted PDFs: `docs/zonesoft-api/` (see `docs/zonesoft-api/README.md`)
- Quick reference: `docs/zonesoft-api/cheatsheet.md`
- Postman collection/envs: `docs/zonesoft-api/postman/ZSAPI_V3/`
- PDF originals: `docs/zonesoft-api/originals/` (including ZSROI under `originals/ZSROI/`)

## Project context for BMAD agents
- Always load and follow `project-context.md` before running any BMAD workflow. It is the source of truth for local rules and safety defaults.

## Starter kit (per-client template)
- Copy `starter/env.example` to `.env` and fill DB info (server/instance, name, user/password, allowed tables). Keep `.env` out of git.
- Health check: `npm run starter:health-check` (verifies DB reachability and allowed tables exist).
- CLI skeleton: `npm run starter:cli -- --sql="SELECT TOP 1 * FROM Products"`; for writes add `--table=Products --backup-ok` and optionally `--dry-run`.
- Direct DB helpers live in `src/starter/`; default mode is direct DB. Use API mode only for hosted web cases.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Building

```bash
npm run build
```

## Project Structure

```
zonesoft-ai-helper/
├── src/              # Source code
│   ├── api/         # Zonesoft API client and utilities
│   ├── examples/    # Example implementations
│   └── ai/          # AI helper components
├── docs/            # Documentation
├── examples/        # Complete example projects
└── tests/           # Test files
```

## Example Use Cases

- Building a restaurant website with online ordering
- Creating a delivery management system
- Integrating menu management systems
- Building reporting dashboards

## Contributing

This is a specialized tool for Zonesoft API development. Contributions welcome!

## License

MIT






