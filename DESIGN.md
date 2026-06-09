---
name: Aura Labs Design System
description: Premium, minimal design system for research-grade pharmaceutical peptides. Emphasizes intellectual honesty, restraint, and institutional authority through sparseness and precision.
version: 1.0.0
tags: [pharmaceutical, research, minimal, luxury, institutional]

colors:
  primary:
    DEFAULT: "#2563eb"    # Medical blue - primary CTAs, key actions
    light: "#6b9eff"      # Hover state
    dark: "#1d4ed8"       # Active state
  
  neutral:
    50: "#fafafa"         # Lightest background
    100: "#f5f5f5"        # Light gray background
    200: "#eeeeee"        # Subtle borders, dividers
    300: "#e0e0e0"        # Disabled states
    500: "#888888"        # Secondary text, specs
    700: "#555555"        # Body text
    900: "#1a1a1a"        # Headings, primary text
  
  surface:
    DEFAULT: "#ffffff"    # Card backgrounds, main surface
    dark: "#ffffff"       # Always white (no dark theme)
  
  on-surface:
    DEFAULT: "#1a1a1a"    # Text on white
  
  semantic:
    success: "#22c55e"    # Positive feedback
    warning: "#f59e0b"    # Cautionary alerts
    error: "#ef4444"      # Error messages
    info: "#3b82f6"       # Informational

typography:
  fontFamily:
    heading: "EB Garamond, serif"     # Serif for premium feel
    body: "Inter, sans-serif"          # Clean sans-serif for readability
    mono: "Courier New, monospace"     # For specs/technical data
  
  fontSize:
    xs: "0.75rem"         # 12px - fine print, specs labels
    sm: "0.875rem"        # 14px - secondary text, small bodies
    base: "1rem"          # 16px - body text
    lg: "1.125rem"        # 18px - large body, intro text
    xl: "1.25rem"         # 20px - subheadings
    "2xl": "1.5rem"       # 24px - section titles
    "3xl": "1.875rem"     # 30px - major headings
    "4xl": "2.25rem"      # 36px - page titles
    "5xl": "3rem"         # 48px - hero statements
    "6xl": "3.75rem"      # 60px - hero main
    "7xl": "4.5rem"       # 72px - hero large (clamp usage)
  
  fontWeight:
    light: 300
    normal: 400
    medium: 500
    semibold: 600
    bold: 700
  
  lineHeight:
    tight: 1.1            # Headings, hero text
    normal: 1.5           # Body text, standard
    relaxed: 1.8          # Long-form reading

spacing:
  unit: "4px"             # Base spacing unit
  scale:
    px: "1px"
    0: "0"
    1: "4px"
    2: "8px"
    3: "12px"
    4: "16px"
    5: "20px"
    6: "24px"
    8: "32px"
    10: "40px"
    12: "48px"
    16: "64px"
    20: "80px"
    24: "96px"
    28: "112px"
    30: "120px"
    32: "128px"
    40: "160px"

borderRadius:
  none: "0px"
  sm: "2px"
  DEFAULT: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"

shadows:
  none: "none"
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)"
  md: "0 4px 6px rgba(0, 0, 0, 0.1)"
  lg: "0 10px 15px rgba(0, 0, 0, 0.15)"
  xl: "0 20px 25px rgba(0, 0, 0, 0.2)"

borders:
  DEFAULT: "1px solid #e0e0e0"
  light: "1px solid #f5f5f5"
  dark: "1px solid #555"
  none: "none"

transitions:
  fast: "0.15s ease"
  normal: "0.3s ease"
  slow: "0.5s ease"
---

# Aura Labs Design System

Premium, minimal design system for research-grade pharmaceutical peptides. Every visual choice communicates intellectual honesty, precision, and institutional authority.

## 1. Design Philosophy

**Core Principle: Restraint is Authority**

Aura Labs' design communicates confidence through silence. We do not explain, justify, or convince. We show what survived the filter. 

The design system prioritizes:
- **Intellectual honesty** — No marketing language, no unnecessary embellishment
- **Sparseness** — Whitespace is a tool, not a filler
- **Precision** — Every element earned its place
- **Institutional authority** — Calm, considered, certain
- **Research-grade quality** — Clean, accurate, trustworthy

Inspiration: Apple, Rolex, MIT, Mayo Clinic—institutions where the restraint is the statement.

### What This Means Visually
- No gradients, unless essential
- No unnecessary animations
- No decorative elements
- No apologies or explanations
- Generous use of white space
- Minimal color palette
- Typography-first hierarchy

## 2. Colors

Our palette is minimal and purposeful. Every color choice communicates hierarchy or semantic meaning.

### Primary Color
`#2563eb` (Medical Blue) is used exclusively for:
- Primary call-to-action buttons
- Key navigation links
- Interactive elements that deserve attention
- Links and selected states

**Hover states:** Lighter shade `#6b9eff`  
**Active states:** Darker shade `#1d4ed8`

Do not use primary color for decorative elements or backgrounds.

### Neutral Scale
The `neutral` scale provides a range of grays for everything except primary actions.

- `neutral-900` (`#1a1a1a`) — Headings, main text, high contrast
- `neutral-700` (`#555555`) — Body text, readable
- `neutral-500` (`#888888`) — Secondary text, specifications, less important info
- `neutral-200` (`#eeeeee`) — Subtle borders, dividers
- `neutral-100` (`#f5f5f5`) — Light backgrounds (if needed)
- `neutral-50` (`#fafafa`) — Lightest backgrounds

### Surface Color
Always `#ffffff` (pure white). No off-whites, no warm whites, no dark modes. White communicates clarity and openness.

### Semantic Colors
- `success` (`#22c55e`) — Confirmations, positive feedback only
- `error` (`#ef4444`) — Error messages, warnings about critical issues
- `warning` (`#f59e0b`) — Cautionary alerts, non-critical warnings
- `info` (`#3b82f6`) — Informational messages, additional context

Use semantic colors sparingly. They should feel intentional, not decorative.

### Color Contrast
All text must meet WCAG AA standards (4.5:1 minimum for body text). Check:
- Dark text on light backgrounds: ✓
- Light text on dark backgrounds: Not used in this system

## 3. Typography

Typography is the primary design tool. Everything else supports it.

### Font Families

**Headings:** EB Garamond (serif)  
Brings premium, institutional feel. Used for all headings, hero text, product names, section titles.

**Body:** Inter (sans-serif)  
Clean, readable, modern. Used for all explanatory text, descriptions, specifications.

**Mono:** Courier New (monospace)  
Used only for technical data, specifications, code blocks, molecular weights, purity percentages.

### Font Sizes

| Size | Pixels | Usage |
|------|--------|-------|
| xs | 12px | Fine print, spec labels, small metadata |
| sm | 14px | Secondary text, captions |
| base | 16px | Body text (default) |
| lg | 18px | Large body text, intro paragraphs |
| xl | 20px | Subheadings, secondary headings |
| 2xl | 24px | Section titles |
| 3xl | 30px | Major section headings |
| 4xl | 36px | Page titles |
| 5xl | 48px | Hero statements |
| 6xl | 60px | Hero main heading (or use clamp) |
| 7xl | 72px | Large hero heading (use clamp) |

### Font Weights

Limited to five weights:
- `light` (300) — Rarely used, only for very subtle text
- `normal` (400) — Default for body text
- `medium` (500) — Labels, secondary headings, emphasis
- `semibold` (600) — Product names, section titles, important labels
- `bold` (700) — Main headings, hero text, critical emphasis

**Rule:** Do not use more than two font weights on a single screen. Usually: normal + medium, or normal + semibold.

### Line Height

- `tight` (1.1) — Hero text, headings, short copy
- `normal` (1.5) — Body text, standard
- `relaxed` (1.8) — Long-form reading, accessibility

### Typography Examples

**Hero Statement:**  
EB Garamond, 6xl (clamp 48–72px), font-weight 400, line-height 1.1, color neutral-900

**Product Name:**  
EB Garamond, 2xl (24px), font-weight 600, line-height 1.1, color neutral-900

**Body Text:**  
Inter, base (16px), font-weight 400, line-height 1.5, color neutral-700

**Specification Label:**  
Inter, xs (12px), font-weight 500, line-height 1.6, color neutral-500

## 4. Spacing

Consistent spacing creates calm and clarity. All spacing follows the scale.

### Base Unit
Our spacing is based on `4px` units. All margins, padding, and gaps should be multiples of 4px.

### Common Spacing Values

| Value | Pixels | Common Usage |
|-------|--------|--------------|
| spacing-1 | 4px | Tiny gaps, inline spacing |
| spacing-2 | 8px | Small gaps between elements |
| spacing-3 | 12px | Icon-to-text spacing |
| spacing-4 | 16px | Standard padding, margins |
| spacing-6 | 24px | Medium spacing between sections |
| spacing-8 | 32px | Section padding |
| spacing-12 | 48px | Large section padding |
| spacing-16 | 64px | Hero padding, major separations |
| spacing-20 | 80px | Very large spacing |
| spacing-30 | 120px | Hero section padding |

### Spacing Rules

- **Hero Section:** Top/bottom padding: 120px (or 30 spacing units); sides: 40px
- **Section Padding:** 64–96px top/bottom; 40px sides
- **Card Padding:** 24–48px (depends on card size)
- **Component Gaps:** Use spacing-4 (16px) as default gap
- **Text Margins:** Never collapse margins; use padding or explicit gaps

**Rule:** Whitespace is your primary visual tool. Use generous spacing to communicate importance and to reduce cognitive load.

## 5. Components

### Buttons

**Primary Button (CTA)**
- Background: primary color `#2563eb`
- Text: white `#ffffff`
- Padding: 12px 24px (spacing-3 vertical, spacing-6 horizontal)
- Border radius: md (8px)
- Font: Inter, base (16px), font-weight 500
- Hover: Background becomes `#1d4ed8` (darker primary)
- Active: Background becomes `#0040cb` (even darker)
- No shadows unless explicitly needed for elevation

**Text Button (Link)**
- Background: transparent
- Text: primary color `#2563eb`
- No padding
- Font: Inter, base (16px), font-weight 500
- Hover: Text becomes darker `#1d4ed8`, optionally underline
- No border, no shadow

**Disabled Button**
- Background: neutral-200 `#eeeeee`
- Text: neutral-300 `#e0e0e0`
- Cursor: not-allowed
- No hover or active state

### Cards

**Standard Card**
- Background: white `#ffffff`
- Border: none (or light border `#f5f5f5` if needed for definition)
- Padding: 24px–48px (spacing-6 to spacing-12)
- Border radius: md (8px)
- Shadow: none (unless elevation is critical, use shadow-sm)
- Text hierarchy: Heading (2xl), body (base), optional specs (sm)

**Product Card**
- Product name: EB Garamond, 2xl, semibold, color neutral-900
- Specs: Inter, xs, regular, color neutral-500
- No decorative borders, no product image unless essential
- Minimal visual noise

### Navigation

**Top Navigation**
- Background: white `#ffffff`
- Border bottom: light `1px solid #f5f5f5`
- Padding: spacing-4 (16px) vertical, spacing-6 (24px) horizontal
- Logo: EB Garamond, xl (20px), font-weight 400, color neutral-900
- Links: Inter, base (16px), color neutral-700, hover becomes primary blue

**Navigation Link (Active)**
- Text color: primary blue `#2563eb`
- Underline or border-bottom: 2px primary blue
- No background color change

### Hero Section

**Hero Container**
- Background: white `#ffffff`
- Padding: 120px vertical, 40px horizontal
- Min height: 85vh (or allow content to define)
- Text alignment: center
- Max width: 900px (for readability)

**Hero Title**
- Font: EB Garamond
- Size: clamp(48px, 6vw, 72px)
- Weight: 400 (normal)
- Color: neutral-900 `#1a1a1a`
- Line height: tight (1.1)
- Margin bottom: spacing-6 (24px)

**Hero Subtitle**
- Font: Inter
- Size: 18–22px (responsive)
- Weight: 300 (light)
- Color: neutral-700 `#555555`
- Line height: normal (1.5)
- Margin bottom: spacing-8 (32px)

**Hero CTA**
- Style: Text button (see above)
- Margin top: spacing-8 (32px)

### Product Grid

**Grid Layout**
- Desktop: 2–3 columns (use auto-fit, minmax)
- Tablet: 2 columns
- Mobile: 1 column
- Gap: spacing-12 (48px) or larger

**Product Card (Grid Item)**
- Border: none
- Padding: 0 (spacing handled by grid gap)
- Product name: largest, most visual weight
- Specs: smaller, less visual weight
- No hover effects unless linking to detail page

### Section Spacing

- Between major sections: 80–120px
- Between related subsections: 48–64px
- Between cards: spacing-12 (48px)

## 6. Do's and Don'ts

### Do's

✓ **Do** use whitespace generously. Empty space is a design element.  
✓ **Do** prioritize typography over decoration.  
✓ **Do** ensure all text meets contrast standards (WCAG AA minimum).  
✓ **Do** follow the spacing scale strictly. No arbitrary numbers.  
✓ **Do** use only EB Garamond for headings, Inter for body.  
✓ **Do** keep interactions subtle. Hover states should be gentle.  
✓ **Do** test designs at 10 feet away. If elements blur together, hierarchy is weak.  
✓ **Do** favor sparseness over completeness. Remove before adding.

### Don'ts

✗ **Don't** use more than two font weights on a single screen.  
✗ **Don't** use shadows heavier than `shadow-md`.  
✗ **Don't** hardcode colors or spacing values. Always reference tokens.  
✗ **Don't** use decorative gradients, glows, or blur effects.  
✗ **Don't** use full uppercase except for acronyms.  
✗ **Don't** add padding/margin that isn't a multiple of 4px.  
✗ **Don't** use the primary color for anything other than high-priority actions.  
✗ **Don't** nest multiple elevated components (avoid card-in-card).  
✗ **Don't** add animations that serve no purpose. Every motion should aid usability.  
✗ **Don't** compromise on readability for style. Clarity wins always.

## 7. Accessibility

This design system is built for accessibility.

### Color Contrast
- All text on backgrounds meets WCAG AA (4.5:1 minimum)
- Semantic colors are never used alone to convey meaning (icons or text labels support them)
- No color-blind users are excluded

### Typography
- Body text is minimum 16px
- Line height is never below 1.5 for body text
- Font weights support readability (no excessively light text on light backgrounds)

### Responsive Design
- All components work at 320px (mobile) and up
- Typography uses `clamp()` for fluid scaling
- Touch targets are minimum 44×44px

### Focus States
- All interactive elements have clear focus states
- Focus indicators use primary color with sufficient contrast
- Keyboard navigation is fully supported

## 8. Implementation Notes

### For AI Agents (Cursor, Claude Code, v0, etc.)

When building with this system:

1. **Always reference tokens**, never hardcode values
2. **Prioritize spacing** — use the scale religiously
3. **Minimize CSS** — this system works with simple, clean code
4. **Test hierarchy** — if you can't read it from 10 feet away, reduce visual noise
5. **Ask before adding** — additions should improve clarity, not compete with it

### For Developers

- Use CSS custom properties (variables) for all token values
- Implement clamp() for responsive typography
- Keep specificity low (single class selectors preferred)
- Avoid framework defaults; use this system instead

### For Designers

- This is the source of truth. Deviation requires justification.
- All new components should follow existing patterns.
- Whitespace is not wasted. It's intentional.
- If it feels busy, remove something.

## 9. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | June 2026 | Initial system. Institutional, minimal, premium. |

---

**Last Updated:** June 9, 2026  
**System Owner:** Aura Labs Design  
**For Questions:** Refer to the philosophy section. The answer is usually "remove something."
