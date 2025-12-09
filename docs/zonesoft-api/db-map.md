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
- Observed fields:
  - `menus`: (id, codigo, prod, fixo, pendente)
  - `menu`: (sessao, nivel, codigo, preco)
  - `menufind`: (sessao, codigo, fixo, id, nivel, preco)
  - `menuschedule`: (dia, activo, inicio, fim, seguinte)
  - `niveismenu`: (menu, nivel, descricao, obrigatorio, ordem)
  - `niveismenuext`: (menu, nivel, codigo, fixo, preco, valcomplementos, produtodefault, opcaopvp)

## Taxes / Fees
- `iva`, `ivacaixa`, `ivatemp`: tax definitions and session tax totals.
- `taxas_entrega`: delivery fees by distance.
- `taxascombustiveis`: fuel surcharges.
- Sample `iva`: Isento (0%), Reduzida (6%), Intermédia (13%), Normal (23%).
- `taxas_entrega`: currently empty in sample.
- Sample `taxascombustiveis`: codes with `descricao` and `taxa` (e.g., 8%, 6%), `sync=0`.

## Payments
- `tipospagamento`, `tblOpPagamento`: payment types/options (days, deposit/bill flags, commission).
- `pagamentos_caixa`, `pagamentos_dia`: cash and daily payment records.
- Sample `tipospagamento`: includes cash (`Dinheiro`), card (debit/credit), vouchers (iFood, Uber Eats, Glovo, etc.), wallet, MBWay, giftcard, internal consumption, adjustments, and many delivery/app-specific methods. Flags: `bill`, `sale`; `depositar/editavel/finaceiro/comissao` mostly null/zero in sample.
- Sample `tblOpPagamento`: Pronto Pagamento (0 days), Payment in 8/15/25/30/60/90/120 days (`dias`), all `sync=0`.

## Numbering / Series
- `numdoc`: doc type counters (VD, TK, FA, RC, GR, NC, AD, GT, VS, RQ, QB, CI, EC, CM) plus `serie`.
- `numdocseries`: (`sync`, `serie`, `doc`, `numero`, `lastHash`) — per-series counters (e.g., `1A2501/FS/1`, `DIA/CX/1`).
- `seriesdoc`: (`doc`, `N1`, `N2`, `N3`, `sync`) — series-level controls per doc type.

## Notes and Mapping Tips
- Use `codigo`/`id` as primary identifiers; link products to families via `familia/subfam/categoria`.
- Sample `produtos`: shows family/subfamily/tax/price and flags; `vendersemstock=1` on several items; IVA codes align to IVA table; categories/subcategories mostly 0 in sample.
- Sample `familias`: includes food/drink groups (e.g., COUVERT, ENTRADAS, SOPAS, VINHOS, CARNE, PEIXE, Comidas, Bebidas) with UI positions/colors; `tipo` varies (0/1).
- Sample `subfamilias`: beverage/food sub-groups (e.g., SUMOS/REFRIGERANTES, ÁGUAS, CAFÉS/CHÁS, VINHOS A COPO/TINTOS/BRANCOS/ROSÉS/VERDES) tied to `familia` codes like 5002/5003; UI colors/positions set.
- Menu availability/pricing: `menuschedule`, `menu/menus/menufind`, `niveismenu*`.
- Taxes: `iva` + product-level tax fields; delivery/fuel surcharges via `taxas_entrega`/`taxascombustiveis`.
- Numbering/series: `numdoc`, `numdocseries`, `seriesdoc` for document codes and sequencing.
- Payments: align `tipospagamento` with ZSAPI payment types; `docpag` for applied payments.
- Exemptions: product/doc fields (`isencao`, `motivo_isencao`, `CashVATScheme`) map to ZSAPI exemptions.
- `docpag`: payment records (fields observed: `numero`, `doc`, `tipo`, `valor`, `cartao`, `adiantamento`, `serie`, `movimento`).
- Sample `subcategorias`: additional grouping by `categoria` with `descricao` (e.g., Azul/Branco/vermelho for cat 1; sizes/conditions for other cats), `sync=0`.

## Routing / Availability
- `produtosimpressoras`: product → printer routing (e.g., `codigo`, `impressora`).
- `produtoscentrosprod`: product → production center mapping (`codigo`, `centro`, `informativo`).
- `produtos_disponibilidade`: product availability (`codigo`, `tipo`, `qtd_default`, `qtd`, `data_alteracao`, `empregado`).
- `centrosprod`: production centers with `descricao` (e.g., Grelha, Cozinha, gerente, Bar baixo).
- `impressoras`: printer definitions with center linkage (e.g., codigo=1, descricao=cozinha, centro=5001, sync=0).

## Optional Next Steps
- If needed, capture a few anonymized sample rows (produtos, familias/subfamilias, menu/menuschedule, documentos, tipospagamento, iva, taxas_entrega) to validate payload shapes. Omit PII.***

