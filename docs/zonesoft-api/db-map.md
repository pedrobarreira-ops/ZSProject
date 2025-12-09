# Zonesoft DB → ZSAPI/ZSROI Mapping (Summary)

This summarizes the key tables/columns from `zsrest_2024_0` that align to ZSAPI/ZSROI entities. No data is included—only schema notes for mapping and reference.

## Customers
- `clientes`: customer master (name, tax ID `contribuinte`, contacts, credit/discount, status).
- `clientes_moradas`: customer addresses (`cliente`, `morada`, `codpostal4/3`, `tipo`).
- `clientes_opcoes`: customer options (`opcao`, `valor`).
- `clientes_reserva_produtos`: customer-specific product reservations (per weekday, date range).
- `clientesview`: view of customers (light subset).

## Documents / Payments / Numbering
- `documentos`: document headers (customer, totals, status flags, hash, delivery fields, exemptions, series `serie`, numbering `numero`, dates).
- `docpag`: document payments (value, type, card, movement).
- `docprint`: print settings (copies, printer, format).
- `numdoc`, `numdocseries`, `seriesdoc`: numbering/series control per doc type.
- `VASPDocumentos`: external doc linkage (VASP).

## Products / Catalog
- `produtos`: product master (family/subfamily/category, tax, prices, stock flags, barcodes, images, multiple PVP tiers, half-doses, restrictions, image_url, tax/exemption fields).
- Options & properties: `produtos_opcoes`, `produtos_suplementos`, `produtos_packs`, `produtos_propriedades`.
- Characteristics/variants: `produtos_caracteristicas`, `produtos_caracteristicas_val` (price, barcode, state).
- Availability: `produtos_disponibilidade` (qty, default, type, last change).
- Tax mappings: `produtos_taxas`, `produtos_taxas_br` (NCM/CFOP/ICMS/PIS/COFINS, etc.).
- Placement/routing: `produtoscentrosprod`, `produtosfamilias`, `produtosimpressoras`, `produtos_seccao`, `separadores_produtos`.
- History/editions: `produtos_edicoes`, `produtos_historico`.

## Families / Menus
- Families/Categories: `familias`, `subfamilias`, `subcategorias`.
- Menus: `menu`, `menufind`, `menus`, `menuschedule`, `menutemp` (pricing, availability, temp/pendings).
- Levels: `niveismenu`, `niveismenuext` (required items, defaults, pricing, complements).

## Taxes / Fees
- `iva`, `ivacaixa`, `ivatemp`: tax definitions and session tax totals.
- `taxas_entrega`: delivery fees by distance.
- `taxascombustiveis`: fuel surcharges.

## Payments
- `tipospagamento`, `tblOpPagamento`: payment types/options (days, deposit/bill flags, commission).
- `pagamentos_caixa`, `pagamentos_dia`: cash and daily payment records.

## Numbering / Series
- `numdoc`: doc type counters (VD, TK, FA, RC, GR, NC, AD, GT, VS, RQ, QB, CI, EC, CM) plus `serie`.
- `numdocseries`: (`sync`, `serie`, `doc`, `numero`, `lastHash`) — per-series counters (e.g., `1A2501/FS/1`, `DIA/CX/1`).
- `seriesdoc`: (`doc`, `N1`, `N2`, `N3`, `sync`) — series-level controls per doc type.

## Notes and Mapping Tips
- Use `codigo`/`id` as primary identifiers; link products to families via `familia/subfam/categoria`.
- Menu availability/pricing: `menuschedule`, `menu/menus/menufind`, `niveismenu*`.
- Taxes: `iva` + product-level tax fields; delivery/fuel surcharges via `taxas_entrega`/`taxascombustiveis`.
- Numbering/series: `numdoc`, `numdocseries`, `seriesdoc` for document codes and sequencing.
- Payments: align `tipospagamento` with ZSAPI payment types; `docpag` for applied payments.
- Exemptions: product/doc fields (`isencao`, `motivo_isencao`, `CashVATScheme`) map to ZSAPI exemptions.

## Optional Next Steps
- If needed, capture a few anonymized sample rows (produtos, familias/subfamilias, menu/menuschedule, documentos, tipospagamento, iva, taxas_entrega) to validate payload shapes. Omit PII.***

