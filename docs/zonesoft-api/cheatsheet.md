# Zonesoft API & ZSROI – Quick Cheatsheet

## Auth & Headers

### ZSAPI (v3)
- Base: `https://api.zonesoft.org/v3/` (or sandbox host per env).
- Required headers: `Content-Type: application/json`, `X-ZS-APP-KEY`, `X-ZS-CLIENT-ID`, `X-ZS-SIGNATURE`.
- Signature: `X-ZS-SIGNATURE = HMAC-SHA256(raw_body, app_secret)`.
- Body must be signed exactly as sent (pre-request script in Postman does this).

### ZSROI
- Register integration at `https://developer.zonesoft.org`.
- App provides endpoints to ZSROI: `endpoint_login`, `endpoint_menu`, `endpoint_order_status`, `endpoint_pos_status`.
- ZSROI calls your endpoints; you sign requests back when pushing orders.
- Headers often include `Authorization: APP-KEY` and `X-Integration-Signature` (per examples).

## Key Flows

### ZSAPI pattern
- Interfaces: e.g., `cards`, `categories`, `clients`, `products`, `documents`, etc.
- Common actions: `getInstances`, `getInstance`, `saveInstances`, `deleteInstances`, `getInstancesToSync`, `setFullSync`.
- POST to: `{{host}}{{version}}{{interface}}/{action}` with JSON body containing the entity.
- Check IntegrationManual.md for the full interface/action list; StructureOfEntities.md for fields.

### ZSROI flows (GenericIntegration)
- Menu sync: ZSROI will POST menu to `endpoint_menu` you expose (families, subfamilies, products, attributes, availability).
- Orders: You POST orders to ZSROI order endpoint (includes products + attributes + customer + delivery).
- Order status callbacks: ZSROI POSTs to your `endpoint_order_status` (states: accept, decline, ready, delivered, remind).
- POS status: `endpoint_pos_status` (get status, set online/offline).
- Table reservations: supported; see GenericIntegration.md and ZSROI examples.

## Where to look
- Endpoints/actions: `converted/IntegrationManual.md`
- Entity fields: `converted/StructureOfEntities.md`
- ZSROI flows: `converted/GenericIntegration.md`
- Platform onboarding: `converted/IntegrationManagementPlatformManual.md`
- Postman examples: `PostmanCollection/PostmanCollection_ZSAPI_V3/`

## Tips
- Always sign the exact raw body for `X-ZS-SIGNATURE`.
- Keep `app_key`, `client_id`, `app_secret` per environment (prod vs sandbox).
- For new integrations, ensure ZS Rest license + ZSAPIFood module are active (per platform manual).

## Postman Quick Start (ZSAPI v3)
1) Import collection: `PostmanCollection/postman_collection.json`
2) Import env: `api.zonesoft.org.postman_environment` (or `sandbox...`)
3) Set env vars: `app_key`, `client_id`, `app_secret`, optionally `store`
4) The pre-request script signs `raw` body: `X-ZS-SIGNATURE = HMAC-SHA256(body, app_secret)`
5) Send requests (POST) to `{{host}}{{version}}{{interface}}/{action}`

