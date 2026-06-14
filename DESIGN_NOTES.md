# Aura Labs — Design Notes v3

**Redesign Date:** June 2026  
**Direction:** Nature Journal + Apple restraint + Mayo Clinic credibility  
**Previous:** Dark luxury biotech theater (v1/v2 — EB Garamond, void black, gold accents)

---

## Design Philosophy

The previous design operated on theatrical credibility — dark backgrounds, serif drama, luxury signaling. This redesign operates on *institutional credibility* — the kind earned by journals, clinics, and research organizations that don't need to impress, because they simply *are* authoritative.

The key insight: **legitimate research institutions don't look like luxury brands.** They look like databases. They look like archives. They look clean, precise, and quietly confident.

---

## Aesthetic References

### Nature Journal
- Clean white backgrounds with editorial restraint
- Information presented in structured tables and data displays
- Typography that is functional, not decorative
- Authority derived from content density and precision, not visual drama

### Apple (Product/Research Contexts)
- Generous white space that communicates control
- Subtle borders rather than heavy shadows or glows
- Sans-serif type hierarchy with clear weight differentiation
- Interaction design that whispers rather than shouts

### Mayo Clinic / Academic Medical Centers
- Credibility through transparency (documentation, methodology)
- Neutral, trustworthy color palette
- Institutional headers that state facts, not promises
- Legal/compliance language treated as first-class content

---

## Color System

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#f9f8f6` | Page background (warm white, not stark) |
| `--bg-white` | `#ffffff` | Cards, modals, table backgrounds |
| `--border` | `#e2e0db` | Primary borders (warm, not clinical grey) |
| `--border-light` | `#eeece8` | Row separators, subtle divisions |
| `--text-primary` | `#18181b` | Headlines, compound names, key values |
| `--text-secondary` | `#6b7280` | Body copy, descriptions |
| `--text-muted` | `#9ca3af` | Labels, metadata, secondary text |
| `--accent` | `#2563eb` | Links, badges, mechanism blocks only |
| `--accent-light` | `#eff6ff` | Accent backgrounds, hover states |
| `--green` | `#059669` | "In Stock" availability badge only |

**Rules:**
- Blue is an accent, not a primary UI color. No blue buttons.
- Gold is gone. It signals luxury, not research.
- Dark mode is gone. Legitimate research archives are light.
- Warm whites (`#f9f8f6`) preferred over cold whites to reduce clinical harshness.

---

## Typography

**Font:** Inter (system fallback: -apple-system, Segoe UI)

Previous design used EB Garamond — a beautiful font, but inappropriate here. Serif drama reads as *artistic intent*, not scientific rigor. Inter communicates precision, neutrality, and readability at data-table scale.

| Use | Size | Weight | Notes |
|-----|------|--------|-------|
| Nav logo | 14px | 600 | Minimal; not a billboard |
| Eyebrows | 10–11px | 600 | ALL CAPS, 0.08–0.1em tracking |
| Page title | 36px | 300/600 mix | Light weight with selective bold |
| Section titles | 12px | 600 | Uppercase table headers |
| Compound names | 14px | 500 | Primary data cell |
| Body copy | 13–14px | 400 | Line height 1.65–1.7 |
| Mechanism | 12px | monospace | Code-like precision signaling |
| Price | 14px | 500 | Tabular numerals |

---

## Layout Architecture

### Navigation
Fixed, minimal. 56px height. Logo + links + one low-key CTA button. 
No mega-menus, no cart icon, no search. Research archives don't need that.

### Masthead
Not a hero — a masthead. Editorial opening, like a journal issue header.
- Eyebrow: what this is
- Headline: what they do (split weight: light + bold)
- Body: institutional voice, no superlatives
- Meta strip: factual stats (archive date, compound count, purity standard)
- Notice banner: research-only disclaimer treated as *important information*, not fine print

### Archive Table
The central design decision. **Not a product grid. A research table.**

Columns:
1. **Compound** — name + chemical class subtitle
2. **Research Area** — categorical
3. **Format** — lyophilized powder standard
4. **Reference Price** — with market comparison (transparency, not FOMO)
5. **Availability** — green "In Stock" badge (factual status)
6. **View Details** — minimal link-style button

Row behaviors:
- Hover: subtle background shift (no shadows, no lift)
- Click anywhere on row opens detail modal
- Filter bar above table (pill buttons, not tabs)

### Detail Modal
Replaces individual product pages. Slides over with compound intelligence:
- 2-column stat grid (price + format with purity note)
- Description paragraph
- Mechanism block (monospace, blue accent — signals precision)
- Research applications (tags)
- Co-administration notes (card list)
- Contraindications (amber warning cards)
- Research notes
- Safety considerations (amber background — visible but not alarming)

Footer: "Request Documentation" CTA that pre-populates email subject line.

### Institutional Pillars
3-column grid. Icon + title + paragraph. No animations, no counters.
Addresses the three credibility questions: purity, documentation, pricing transparency.

### Inquiry Section
Full-width callout block. Not a "Buy Now" panel — a researcher's contact point.
Two options: "Request Documentation" (primary) and "General Inquiry" (secondary).

---

## Language Principles

| Old language | New language |
|---|---|
| "Acquire" | "Request Documentation" |
| "Add to Cart" | "View Details" |
| "Premium compounds" | "Research compounds" |
| "Elevate your protocol" | (deleted) |
| "Pharmaceutical-grade luxury" | "Pharmaceutical-grade research" |
| Fine print disclaimer | First-class institutional notice |

**Voice:** Direct, precise, institutional. Not cold — confident.  
No superlatives. No urgency language. No emotional appeals.  
The compounds speak through their data.

---

## What Was Removed

- Dark/void background (the entire dark theme)
- EB Garamond and decorative serif typography
- Gold accents and luxury signaling
- "Acquire" and cart UI
- Theatrical product card grid
- Particle animations and visual drama
- Glow effects, blur halos, dramatic shadows
- Any language implying the customer is entering an exclusive realm

---

## What Was Preserved

- All compound data (from products-data.js)
- Full pricing transparency including market comparisons
- Detailed mechanism, stack, and safety information
- The archive structure (all 14 compounds)
- Research-oriented framing

---

## Future Considerations

1. **Individual compound pages** — deep-link URLs for sharing specific compounds with researchers
2. **Documentation request form** — simple form with qualification questions to replace mailto link
3. **CoA document viewer** — PDF embeds for certificates of analysis
4. **Search/filter** — text search within compound archive as count grows
5. **Category pages** — dedicated pages per research area as compound count scales

---

*Design principle: If it makes the site look more like a storefront and less like a research archive, don't do it.*
