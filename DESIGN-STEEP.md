# Aura Labs Design System (Steep-Inspired)
> Editorial authority on a marble dashboard

**Theme:** light editorial workspace

Aura Labs is a daylight analytics interface: an achromatic canvas of white and warm-gray surfaces warmed by a single, restrained medical-blue accent and softened by a serif/sans pairing that reads as editorial rather than corporate. The hero is a soft gradient glow — a calm, monumental headline with floating product cards — then the screen settles into a cool marble dashboard where the research does the talking. Typography carries all display weight (serif headlines at generous sizes establish authority through restraint, not volume), radii are generous (24px cards feel like ceramic tiles, not windows), and the entire palette treats color as punctuation: chrome is monochrome, research data gets the only two chromatic voices (warm accent and cool blue), and one dark filled button does all the asking.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| **Ink** | `#17191c` | `--color-ink` | Primary text, filled CTA buttons, dark surfaces — near-black with warmth that pairs naturally with research accent |
| **Pure White** | `#ffffff` | `--color-pure-white` | Page canvas, card surfaces, text on dark buttons |
| **Fog** | `#f7f7f8` | `--color-fog` | Secondary canvas and section backgrounds, sidebar surfaces |
| **Ash** | `#4c4c4c` | `--color-ash` | Muted body text, secondary strokes |
| **Graphite** | `#777b86` | `--color-graphite` | Tertiary text, icon strokes, inactive link borders |
| **Dove** | `#a3a6af` | `--color-dove` | Hairline borders, placeholder text, low-emphasis dividers |
| **Slate** | `#8b8c8d` | `--color-slate` | Subtle icon and link borders in low-emphasis contexts |
| **Obsidian** | `#000000` | `--color-obsidian` | Sharp borders, hairlines, deep strokes |
| **Medical Blue** | `#2563eb` | `--color-medical-blue` | Signature research accent — data viz, chart strokes, primary CTA, high-emphasis elements |
| **Blue Wash** | `#dbeafe` | `--color-blue-wash` | Soft cool card background for research-focused data widgets |
| **Ice** | `#f0f9ff` | `--color-ice` | Lightest cool tint for hover/subtle emphasis |

---

## Tokens — Typography

### Heading Font: EB Garamond
Display serif for hero and section headlines — the only place the brand 'raises its voice'. Its editorial weight against Inter's utility is the system's most distinctive typographic move.

- **Font:** EB Garamond (serif)
- **Weights:** 400 (regular), 500 (medium)
- **Sizes:** 28px, 36px, 48px, 64px, 84px (clamp for responsive)
- **Line height:** 1.10–1.20
- **Letter spacing:** 0.01–0.02em (positive tracking for open feel)
- **Role:** Display headlines. Light weight at large sizes creates authority through restraint.
- **Token:** `--font-heading`

### Body Font: Inter
Body and UI workhorse — navigation, buttons, body text, specs, captions. Clean and utilitarian.

- **Font:** Inter (sans-serif)
- **Weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px
- **Line height:** 1.25–1.60
- **Letter spacing:** -0.009em (tight for efficiency)
- **Role:** Body text, UI labels, navigation, data labels.
- **Token:** `--font-body`

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Token |
|------|------|--------|-------------|----------------|-------|
| **caption** | 12px | 400 | 1.5 | -0.009em | `--text-caption` |
| **body-sm** | 14px | 400 | 1.5 | -0.009em | `--text-body-sm` |
| **body** | 16px | 400 | 1.5 | -0.009em | `--text-body` |
| **body-lg** | 18px | 400 | 1.4 | -0.009em | `--text-body-lg` |
| **label** | 14px | 500 | 1.4 | -0.009em | `--text-label` |
| **subheading** | 20px | 500 | 1.3 | 0em | `--text-subheading` |
| **heading-sm** | 28px | 400 | 1.2 | 0.01em | `--text-heading-sm` |
| **heading** | 36px | 400 | 1.15 | 0.01em | `--text-heading` |
| **heading-lg** | 48px | 400 | 1.1 | 0.02em | `--text-heading-lg` |
| **display** | 64px | 400 | 1.1 | 0.02em | `--text-display` |
| **display-xl** | 84px | 400 | 1.15 | 0.02em | `--text-display-xl` |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable (spacious, breathing room prioritized)

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| cards | 24px | `--radius-card` |
| images | 12px | `--radius-image` |
| inputs | 16px | `--radius-input` |
| buttons | 9999px (pill) | `--radius-button` |
| avatars | 9999px | `--radius-avatar` |
| containers | 8px | `--radius-container` |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| **subtle** | 0px 0px 0px 1px rgba(23, 25, 28, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.06) | `--shadow-subtle` |
| **card** | 0px 0px 0px 1px rgba(23, 25, 28, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.08) | `--shadow-card` |
| **elevated** | 0px 0px 0px 1px rgba(23, 25, 28, 0.08), 0px 12px 32px rgba(0, 0, 0, 0.10) | `--shadow-elevated` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80–96px (vertical spacing between sections)
- **Card padding:** 20–24px (internal card padding)
- **Element gap:** 8–16px (spacing within components)
- **Sidebar width:** 240px (future product app)

---

## Components

### Primary Filled CTA Button
**Role:** The main call-to-action on the page. One per screen maximum.

```
Background: Medical Blue (#2563eb)
Text: Pure White (#ffffff)
Padding: 12px 24px
Border radius: 9999px (full pill)
Font: Inter 14px weight 500
Letter spacing: -0.009em
Transition: background 0.2s ease
Hover: darker blue (#1d4ed8)
```

### Secondary Text Link Button
**Role:** Secondary action, paired horizontally with primary CTA.

```
Background: transparent
Text: Medical Blue (#2563eb)
Border: none
Font: Inter 14px weight 500
Cursor: pointer
Hover: underline
```

### Ghost Button (Light Hover)
**Role:** Tertiary actions, navigation alternatives.

```
Background: transparent
Border: 1px Dove (#a3a6af)
Text: Ink (#17191c)
Padding: 8px 16px
Border radius: 8px
Font: Inter 14px weight 400
Hover: background: Fog (#f7f7f8)
```

### Card (Content Container)
**Role:** Data widget, compound info, research snapshot.

```
Background: Pure White (#ffffff)
Border radius: 24px
Padding: 20–24px
Shadow: --shadow-card
Border: 1px Dove (#a3a6af) optional for definition
```

### Hero Section
**Role:** Page opener with soft glow, centered headline, and floating product cards.

```
Background: Pure White (#ffffff) with optional soft radial gradient tint (Medical Blue at 2–5% opacity, centered)
Min height: 80–100vh
Padding: 80–120px horizontal, 120–160px vertical
Content: centered, max-width 900px
Headline: EB Garamond 64–84px, Ink (#17191c), centered
Subheadline: Inter 18px, Ash (#4c4c4c), centered, max-width 600px
CTA group: primary + secondary buttons, centered below copy
Floating cards: positioned around headline (optional for future product showcase)
```

### Section Header
**Role:** Major section introduction.

```
Headline: EB Garamond 36–48px, Ink (#17191c)
Letter spacing: 0.01em
Margin bottom: 40–56px
Optional subtitle: Inter 18px, Ash (#4c4c4c)
```

### Data Grid / Product Grid
**Role:** Multi-column layout for compounds, research data, or product listing.

```
Layout: CSS Grid, 2–3 columns (responsive)
Gap: 20–24px
Card padding: 20–24px
Text hierarchy: heading (20px weight 500), subtext (14px weight 400, Graphite #777b86)
```

### Top Navigation Bar
**Role:** Global navigation (future).

```
Background: Pure White (#ffffff)
Height: 64–72px
Border bottom: 1px Dove (#a3a6af) optional
Text: Inter 14px weight 400
Logo: 24px EB Garamond or custom mark
Links: Ink (#17191c), hover: Medical Blue (#2563eb)
CTA: primary button at right
```

### Footer
**Role:** Compliance, links, minimal closing.

```
Background: Fog (#f7f7f8)
Text: Graphite (#777b86) at 12–14px
Links: Ink (#17191c), hover: Medical Blue (#2563eb)
Padding: 40–64px horizontal, 32–48px vertical
Max width: 1200px centered
```

---

## Do's and Don'ts

### ✅ Do

- Use EB Garamond exclusively for all headlines 20px and above; never use Inter for display
- Reserve Medical Blue (#2563eb) exclusively for primary CTAs, high-emphasis data labels, and chart accents
- Apply 24px border radius to all content cards; 8px for smaller containers
- Set card padding to 20–24px consistently; this is the system's "grid unit" for internal spacing
- Use generous vertical spacing (80–96px) between major sections to create calm, editorial flow
- Apply negative letter-spacing (-0.009em) to all Inter text for tight, professional feel
- Use Ink (#17191c) for all primary body text on white; Ash (#4c4c4c) for secondary text
- Establish clear hierarchy: EB Garamond for headlines, Inter weight 500 for emphasis, weight 400 for body
- Use soft shadows (--shadow-card) for elevation; never harsh or overdone
- Keep accent color (Medical Blue) usage strict; it should feel rare and intentional

### ❌ Don't

- Don't use Inter for any headline, section opener, or display text
- Don't use bold (weight 700) Inter; use weight 600 instead for emphasis
- Don't apply Medical Blue to decorative elements, backgrounds, or text outside of CTAs and data emphasis
- Don't use sharp corners (0px radius) except for obsidian border lines (hairlines only)
- Don't exceed one filled CTA button per screen
- Don't use colors outside the defined palette (no custom greens, purples, or accent colors)
- Don't apply shadows heavier than --shadow-elevated; sparseness is the signal
- Don't use drop shadows or blur for elevation; rely on color contrast and border definition
- Don't center-align body text; use left-align for readability
- Don't exceed 3 font weights in a single component (use weight 400, 500, 600 only)

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Page background, hero backdrop |
| 1 | Surface | `#ffffff` | Primary content surfaces, cards |
| 2 | Elevation | `#f7f7f8` | Section backgrounds, sidebar, alternate bands |
| 3 | Tint | `#dbeafe` | Research-focused data card backgrounds (optional) |
| 4 | Dark | `#17191c` | CTA button background, high-contrast fills |

---

## Elevation

Elevation is achieved through light and color, not heavy shadow. Interactive elements brighten or adopt the Medical Blue accent on hover or focus, appearing to 'light up'. Layered surfaces are differentiated by subtle shifts in the neutral gray palette. Cards use a thin 1px border (Dove #a3a6af) + soft shadow (--shadow-card) to define without heaviness.

---

## Imagery

The visual language is bifurcated. It opens with a full-bleed, soft gradient hero (optional radial glow in Medical Blue at low opacity, establishing a mood of calm focus). The headline sits centered over this with optional floating product cards (research data snapshots, compound specs, or data visualizations) rendered as white surfaces. Beyond the hero, the site is starkly text-dominant, with no additional photography or decorative illustration. This contrast positions the brand's 'vibe' (editorial, focused) first, then transitions to a purely functional, information-driven experience where the research speaks for itself.

**Icon language:** Outline-style at 16–20px, monochrome Ink (#17191c) or Graphite (#777b86), with 1.5–2px stroke weight that matches the hairline border language.

---

## Layout

The layout uses a full-bleed hero that occupies 80–100vh, featuring a centered EB Garamond headline (64–84px) and centered copy with primary + secondary CTA buttons. Below the hero, the page transitions to a max-width (1200px) centered layout on a white/Fog background. Content is organized in simple, single-column stacks with generous vertical spacing (80–96px between sections), creating a calm, linear reading flow. Optional: 2-column content blocks (text + research snapshot grid) for product pages. Overall structure is spacious and uncluttered, prioritizing breathing room and editorial flow.

---

## Agent Prompt Guide

### Quick Color Reference

- **Background:** Pure White (#ffffff)
- **Secondary background:** Fog (#f7f7f8)
- **Primary text:** Ink (#17191c)
- **Secondary text:** Ash (#4c4c4c)
- **Tertiary text:** Graphite (#777b86)
- **Primary accent:** Medical Blue (#2563eb)
- **Borders:** Dove (#a3a6af)

### Example Component Prompts

1. **Hero section:** Full-bleed white canvas. Center a 64–84px EB Garamond headline in Ink (#17191c). Below, add an 18px Inter subheadline in Ash (#4c4c4c), max-width 600px, centered. Below that, add a centered group: primary pill button (Medical Blue background, white text, 12px 24px padding) followed by a secondary text link. Optional: soft radial gradient glow (Medical Blue at 2% opacity) behind headline.

2. **Product card grid:** White background, CSS Grid 2–3 columns, 20px gap. Each card: Pure White surface, 24px radius, 20px padding, --shadow-card. Inside: 20px EB Garamond heading in Ink, then 14px Inter body text in Graphite, then optional Medical Blue data label (14px weight 500).

3. **Section header with cards:** 48px EB Garamond heading in Ink, letter-spacing 0.01em, margin-bottom 48px. Below: 3-column grid of white cards (24px radius, 20px padding). Each card contains: 16px Inter subheading (weight 500) in Ink, then 14px body text in Ash, then optional accent data (Medical Blue, weight 500).

4. **Floating research snapshot card:** White surface, 24px radius, 20px padding, --shadow-elevated. Contains: large Medical Blue data number (36px weight 600), label below (14px weight 400 Graphite), and small descriptor text (12px Dove). Positioned absolutely in hero or floating above fold.

5. **Compliance footer:** Fog (#f7f7f8) background, 48px vertical padding. Single-column layout, centered max-width 900px. Text in Graphite (12px weight 400), links in Ink with hover underline. Minimal, text-only aesthetic.

---

## Typographic Voice

The EB Garamond/Inter pairing is the brand's most identifiable decision. EB Garamond is the editorial voice — used only when the page is making a statement (hero headline, section openers, research summaries). Inter is the working voice for everything else, from body text to navigation to data labels. The weight range within Inter (300–600) creates granular hierarchy: 400 for body, 500 for emphasis, 600 for strong labels. Never use bold (700); rely on weight 600 or EB Garamond size instead. Never set EB Garamond below 20px — it loses its editorial authority and becomes awkward.

---

## Similar Brands / Inspiration

- **Linear** — Same editorial restraint: single dark CTA pill, generous 24px+ card radii, achromatic canvas with single restrained accent, dual-typeface system
- **Vercel** — Floating-product-cards-around-headline hero pattern, monochrome chrome with soft gradient glow, marble dashboard product UI
- **Stripe** — Editorial typography pairing (serif display + sans body), generous spacing, soft pastel tints as card backgrounds
- **Raycast** — Pill-button + monochrome chrome + generous radii language
- **Height** — Achromatic productivity-tool palette with single warm accent, large radii, editorial-light feel

---

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink: #17191c;
  --color-pure-white: #ffffff;
  --color-fog: #f7f7f8;
  --color-ash: #4c4c4c;
  --color-graphite: #777b86;
  --color-dove: #a3a6af;
  --color-slate: #8b8c8d;
  --color-obsidian: #000000;
  --color-medical-blue: #2563eb;
  --color-blue-wash: #dbeafe;
  --color-ice: #f0f9ff;

  /* Typography */
  --font-heading: 'EB Garamond', serif;
  --font-body: 'Inter', sans-serif;

  /* Type Scale */
  --text-caption: 12px;
  --text-body-sm: 14px;
  --text-body: 16px;
  --text-body-lg: 18px;
  --text-label: 14px;
  --text-subheading: 20px;
  --text-heading-sm: 28px;
  --text-heading: 36px;
  --text-heading-lg: 48px;
  --text-display: 64px;
  --text-display-xl: 84px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-card: 24px;
  --radius-image: 12px;
  --radius-input: 16px;
  --radius-button: 9999px;
  --radius-avatar: 9999px;
  --radius-container: 8px;

  /* Shadows */
  --shadow-subtle: 0px 0px 0px 1px rgba(23, 25, 28, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-card: 0px 0px 0px 1px rgba(23, 25, 28, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-elevated: 0px 0px 0px 1px rgba(23, 25, 28, 0.08), 0px 12px 32px rgba(0, 0, 0, 0.10);

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 20px;
  --element-gap: 16px;
}
```

---

**This is your north star. Every element — color, type, space, shadow — serves clarity and authority through restraint.**
