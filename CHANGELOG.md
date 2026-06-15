# Changelog

## [2.1.0] — 2026-06-14 — Photography Mockups

- Replace hero image with monochromatic clinical vial photography (15° angle, white bg, soft-lit)
- Add archive section lab bench background image (cool tones, empty workspace, natural light)
- Add compound macro detail image inside product modal (side-lit, high contrast, textured)
- Style modal image: 200px full-width strip with HPLC caption, no layout changes
- New image assets: `hero-vial.jpg`, `lab-bench.jpg`, `compound-macro.jpg`

---

## [2.0.0] — 2026-06-14

### Complete rebuild — locked strategy implementation

**Visual system**
- Off-white background (#faf9f7), warm gray text (#8b8b8b), deep bronze accent (#5a4a40)
- Typography: Cormorant Garamond (serif, editorial) + DM Sans (geometric sans)
- Asymmetrical two-column hero with full-bleed photograph right, logotype bottom-left
- Matte surface quality throughout — no gloss, no shadows, no decorative elements

**Architecture**
- Single `index.html`, zero external JS dependencies
- Fonts via Google Fonts (only external dependency)
- All compound data embedded inline as JS array (10 compounds)
- No build step required

**Sections**
- `nav` — Fixed, transparent on hero, frosted glass on scroll
- `hero` — 100vh split grid, parallax on scroll, semaglutide vial photograph
- `archive` — Compound table with category filters (All / Weight Management / Healing & Recovery / HGH Secretagogues / Cognitive / Specialty)
- `inquiry` — Two-column researcher inquiry form, minimal underline inputs
- `footer` — Three-column: brand / contact / legal

**Detail modals**
- Right-side panel slide-in on row click
- Per-compound: mechanism (italic serif), applications (tag pills), sourcing & purity, research notes, safety (bronze-accented callout), pricing vs market range
- Close: button, backdrop click, Escape key

**Motion**
- Fade in on load (1.2s ease)
- Parallax on scroll (hero image translateY)
- Modal: smooth slide from right (cubic-bezier, no bounce)
- Nav: opacity transition on scroll threshold

**Data**
- 10 compounds across 5 categories
- Each: name, area, format, availability, mechanism, applications, sourcing, research notes, safety, pricing + market range

**Screenshots**
- `screenshots/01_hero.png` — 1440×900 hero state
- `screenshots/02_table.png` — 1440×750 archive table with filters
- `screenshots/03_modal.png` — 1440×900 modal panel (BPC-157 2mg)
