# Aura Labs Pricing Engine

Single source of truth for all pricing documents, website data, and catalogs.

## Architecture

```
pricing/
├── MasterPricing.xlsx          ← SINGLE SOURCE OF TRUTH — edit here only
├── MasterPricing_builder.py    ← Run once to bootstrap the workbook
├── generate-all.py             ← Run everything at once
├── generate-price-list.py      ← Generator #1: Internal Price List PDF
├── generate-customer-catalog.py ← Generator #2: Customer Catalog PDF
├── generate-distributor-pricing.py ← Generator #3: Distributor PDF
├── generate-website-json.py    ← Generator #4: Website pricing.json
├── templates/                  ← HTML templates (auto-generated)
└── output/                     ← All generated files go here
    ├── Aura-Labs-Price-List.pdf
    ├── Aura-Labs-Customer-Catalog.pdf
    ├── Aura-Labs-Distributor-Pricing.pdf
    ├── pricing.json
    └── pricing-flat.json
```

## Usage

### Generate everything at once
```bash
cd pricing/
python generate-all.py
```

### Generate individual outputs
```bash
python generate-price-list.py         # Internal price list
python generate-customer-catalog.py   # Customer-facing catalog
python generate-distributor-pricing.py # Distributor pricing (private)
python generate-website-json.py       # Website JSON
```

### Bootstrap (first time only)
```bash
python MasterPricing_builder.py
```

## Workflow

1. **Open `MasterPricing.xlsx`** — edit prices, add SKUs, update status
2. **Run `python generate-all.py`** — generates all 4 outputs automatically
3. **Commit to GitHub** — outputs are tracked in git

## MasterPricing.xlsx Columns

| Column | Description |
|--------|-------------|
| Category | One of 8 official categories |
| Tier | A (Value Driver), B (Core Portfolio), C (Premium Research) |
| Compound | Full compound name |
| Strength | e.g. "10mg" or "5mg + 5mg" |
| Format | Lyophilized Powder / Injectable Solution / Sterile Solution |
| SKU | Internal SKU code |
| Supplier | SPL, TBD, etc. |
| Supplier Cost | Cost per vial (internal only) |
| Swiss Chems ... Peptide Sciences | Benchmark competitor prices |
| Competitor Average | Average of 5 benchmarks |
| Aura Retail Price | **The official retail price** |
| Gross Margin | Retail - Cost |
| Margin % | Gross Margin / Retail |
| Status | Active / Coming Soon / Discontinued |
| Website Visible | Yes / No |
| Featured | Yes / No (shown in hero/homepage) |
| Coming Soon | Yes / No |
| Notes | Internal notes |
| Last Updated | Date last changed |

## Pricing Tiers

- **Tier A (Value Drivers):** ~15% below benchmark average
  - Semaglutide, Tirzepatide, Retatrutide, BPC-157, TB-500
- **Tier B (Core Portfolio):** ~10% below benchmark average
  - NAD+, GHK-Cu, KPV, Semax, Selank, MOTS-C, etc.
- **Tier C (Premium Research):** Market average to 5% below
  - Rare compounds, bioregulators

## Psychological Pricing Scale
$29 · $39 · $49 · $59 · $69 · $79 · $89 · $99 · $109 · $119 · $129 · $149 · $169 · $199 · $229 · $249 · $299 · $329 · $349 · $389 · $399

## Benchmark Companies
1. Swiss Chems
2. Biotech Peptides
3. Limitless Life Nootropics
4. Core Peptides
5. Peptide Sciences

## Quarterly Review
- Update benchmark competitor prices in MasterPricing.xlsx
- Update Supplier Cost column from new SPL invoice
- Recalculate Competitor Average
- Adjust Aura Retail Price if needed
- Run `python generate-all.py`
- Commit and push

## Dependencies
- Python 3.8+
- `openpyxl` (Excel read/write)
- `wkhtmltopdf` (PDF generation)

Install: `pip install openpyxl`
