---
name: food-heals
description: Saffron & Fig Lacquer — European culinary supper-club hospitality system for organic restorative meal delivery in Timișoara.
colors:
  lacquer-ground: "#260811"
  lacquer-elevated: "#320b17"
  lacquer-deep: "#19050b"
  chalk-paper: "#f5f1e7"
  chalk-warm: "#ebe4d5"
  chalk-card: "#faf7f1"
  saffron-gold: "#e5a91c"
  saffron-bright: "#f2ba30"
  saffron-ink: "#1a060b"
  botanical-jade: "#22593b"
  botanical-jade-tint: "#e4f0e8"
  ink-on-lacquer: "#f5f1e7"
  ink-on-lacquer-muted: "#d6c3c8"
  ink-on-lacquer-subtle: "#b89ea5"
  ink-on-chalk: "#17070d"
  ink-on-chalk-muted: "#4f383f"
  ink-on-chalk-subtle: "#664d54"
  danger-crimson: "#a8202c"
  danger-tint: "#fae9eb"
typography:
  display:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "clamp(2.35rem, 4.35vw, 4.35rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "clamp(2.15rem, 3.1vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "1.22rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  sharp: "3px"
  control: "5px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.saffron-gold}"
    textColor: "{colors.saffron-ink}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.saffron-bright}"
    textColor: "{colors.saffron-ink}"
  button-secondary-lacquer:
    backgroundColor: "{colors.lacquer-ground}"
    textColor: "{colors.ink-on-lacquer}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-order-jade:
    backgroundColor: "{colors.botanical-jade}"
    textColor: "{colors.ink-on-lacquer}"
    rounded: "{rounded.sharp}"
    padding: "8px 14px"
  card-specimen:
    backgroundColor: "{colors.chalk-card}"
    textColor: "{colors.ink-on-chalk}"
    rounded: "{rounded.sharp}"
    padding: "16px"
  input-concierge:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-on-chalk}"
    rounded: "{rounded.sharp}"
    padding: "10px 14px"
---

# Design System: food-heals

## Overview

**Creative North Star: "Saffron & Fig Lacquer Supper-Club Monograph"**

food-heals treats daily organic meal delivery across Timișoara, Giroc, Dumbrăvița, Moșnița, and Ghiroda with the architectural poise of a European lacquer tasting menu and botanical monograph. Rather than competing with discount delivery apps or sterile beige diet boxes, the interface alternates deep velvet fig-oxblood lacquer surfaces with calm mineral-chalk paper bands so mouth-watering culinary photography triggers appetite first while hairline-ruled tabular nutrition data provides instant transparency beside it.

Every interaction honors co-equal English and Romanian bilingual clarity (`EN | RO`), full Romanian diacritic rendering (`ă, â, î, ș, ț`), and calm spatial restraint. Decorative chrome, corner photo stickers, eyebrow kickers, and generic SaaS cards are refused in favor of crisp hairlines, disciplined typography, and direct utility.

**Key Characteristics:**
- Deep velvet fig-oxblood lacquer ground alternating with warm mineral-chalk reading planes.
- Embossed saffron-gold reserved strictly for primary actions, active zone selection, and the kinetic progression hairline.
- Botanical jade reserved exclusively for organic provenance and add-to-bag confirmations.
- Unencumbered dish photography paired with hairline-ruled tabular monospace nutritional ledgers.
- Self-hosted variable fonts (`STIX Two Text`, `Onest`, `JetBrains Mono`) with zero external font dependencies.

## Colors

The palette balances dramatic supper-club saturation with crisp editorial daylight so photography and tabular macros stay legible at >=4.5:1 contrast across every band.

### Primary
- **Deep Fig-Oxblood Lacquer** (`lacquer-ground`): Full-bleed ground for the hero supper-club pass, sticky kitchen rail, 20-minute ritual showcase, subscription ledger, and footer.
- **Embossed Saffron Gold** (`saffron-gold`): Primary CTA fill, active delivery-zone bar, active ritual spine, active language toggle pill, and the signature kinetic elbow hairline. Paired exclusively with charred plum ink (`saffron-ink`) for high readability.

### Secondary
- **Botanical Jade** (`botanical-jade`): Organic provenance stamps, selected delivery-zone status, and menu add-to-bag primary buttons on chalk cards.

### Neutral
- **Mineral Chalk Paper** (`chalk-paper` / `chalk-card` / `chalk-warm`): Daylight reading surface for `Today's Harvest Menu`, the 5-zone metropolitan explorer, diner notes, concierge form, and slide-over bag drawer.
- **Charred Plum Ink** (`ink-on-chalk`, `ink-on-chalk-muted`, `ink-on-chalk-subtle`): Warm oxblood-tinted dark ink hierarchy on mineral chalk — never cool blue-gray.
- **Chalk-Tinted Lacquer Ink** (`ink-on-lacquer`, `ink-on-lacquer-muted`, `ink-on-lacquer-subtle`): High-contrast light ink hierarchy over deep oxblood surfaces.

### Named Rules
**The Saffron Signal Rule.** Embossed saffron gold (`#e5a91c`) signals the single active state or primary conversion path on dark lacquer surfaces; never use it for low-contrast small text or decorative icons on mineral chalk.

**The Warm-Tinted Neutral Rule.** Every secondary text color and hairline divider is tinted toward oxblood or chalk rather than pure neutral gray, keeping surfaces cohesive across light and dark bands.

## Typography

**Display Font:** STIX Two Text (self-hosted variable serif, Georgia fallback)
**Body Font:** Onest (self-hosted variable grotesque sans, system sans fallback)
**Label/Mono Font:** JetBrains Mono (self-hosted variable monospace with `tabular-nums`)

**Character:** Classical European editorial authority from `STIX Two Text` paired with contemporary European clarity in `Onest` and razor-sharp nutritional telemetry in `JetBrains Mono`, all carrying native Romanian `latin-ext` diacritics.

### Hierarchy
- **Display** (600, `clamp(2.35rem, 4.35vw, 4.35rem)`, line-height `1.02`, tracking `-0.022em`): Monumental hero headline only.
- **Headline** (600, `clamp(2.15rem, 3.1vw, 3.1rem)`, line-height `1.06`, tracking `-0.02em`): Section titles on both lacquer and mineral-chalk bands.
- **Title** (600, `1.22rem`–`1.75rem`, line-height `1.2`): Dish card titles, ritual step titles, delivery zone names, and subscription tier names.
- **Body** (300–400, `1rem`, line-height `1.55`–`1.68`, measure `54–68ch`): Culinary descriptions, ritual narratives, and diner table notes.
- **Label** (400–600, `0.6875rem`–`0.8125rem`, `tabular-nums`): Macro ledgers (`Protein | kcal | min`), prices (`€` / `lei`), delivery zone tabs, and kitchen-pass coordinates.

### Named Rules
**The Heading-First Rule.** Headings never carry a tracked-uppercase eyebrow or kicker above them. Every card, step, zone plate, and drawer section opens directly on its heading; supporting metadata sits cleanly underneath or inside a hairline footer.

## Layout

The page opens with a full-bleed asymmetric `46fr / 54fr` desktop vertical split (`lg:h-[75vh]`, bounded `600px–710px`) pairing an edge-to-edge dark-stoneware culinary portrait on the left with the deep oxblood supper-club pass on the right so `Today's Harvest Menu` rises cleanly inside the bottom quarter of a `1440×900` first viewport.

Below the fold, sections alternate strictly between mineral chalk and deep fig-oxblood inside a `1440px` maximum container with horizontal gutters stepping from `20px` (mobile) to `32px` (tablet) to `40px–48px` (desktop). Vertical section rhythm uses generous `80px–112px` section padding (`py-20 sm:py-28`). The seasonal menu organizes 8 dishes into two balanced 4-column desktop rows (2 columns on tablet, 1 column on mobile) with zero orphan cards. A persistent sticky lacquer kitchen rail slides cleanly into view once the visitor scrolls past the hero.

## Elevation & Depth

Surfaces are architecturally flat by default and communicate hierarchy through deliberate material alternation (lacquer vs. mineral chalk) and `1px` hairline borders (`rgba(245, 241, 231, 0.16)` on lacquer; `rgba(23, 7, 13, 0.14)` on chalk). Ambient shadows appear strictly on floating overlays (hero signature dish pill, primary CTA soft saffron glow, dish specimen modal, and slide-over bag drawer).

### Shadow Vocabulary
- **Hero Signature Pill** (`box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45)`): Separates the bottom-left translucent lacquer badge over dark stoneware photography.
- **Primary Saffron Action** (`box-shadow: 0 6px 22px rgba(229, 169, 28, 0.22)`): Subtle warm lift on the primary hero CTA over deep lacquer.
- **Modal & Drawer Surface** (`box-shadow: 0 24px 64px rgba(12, 2, 6, 0.55)`): Grounds focused overlays above the dimmed backdrop.

### Named Rules
**The Hairline-First Rule.** Separate cards, macro columns, zone rows, and subscription tiers with `1px` architectural hairlines rather than drop shadows or nested boxes.

## Shapes

Sharp architectural radii reinforce the printed-monograph feel: crisp `3px` corners (`rounded.sharp`) on dish specimen cards, form fields, modal frames, and organic badges; slightly softened `5px` corners (`rounded.control`) on buttons and segmented controls; and full pills (`9999px`) reserved strictly for the bilingual `EN | RO` toggle, hero signature dish pill, and sequence step circles.

## Components

### Buttons
- **Shape:** Subtle architectural bevel (`5px` radius on main CTAs, `3px` on compact inline dish actions).
- **Primary:** Embossed saffron fill (`saffron-gold`) with charred plum ink (`saffron-ink`), `14px 24px` padding, shifting to `saffron-bright` on hover.
- **Secondary (on Lacquer):** Transparent ground with `1px` strong lacquer hairline border and chalk text, illuminating border and ink to saffron on hover.
- **Secondary (on Chalk):** Deep lacquer fill (`lacquer-ground`) with chalk ink, lifting to elevated oxblood on hover; inline dish add buttons use botanical jade (`botanical-jade`) transitioning to deep lacquer with saffron text once in the bag.

### Navigation & Persistent Kitchen Rail
- Integrated single-row top bar inside the hero right lacquer panel (`food-heals` serif wordmark, four links, `EN | RO` pill, live `Bag` button), backed by a fixed sticky lacquer kitchen rail that glides down smoothly after scrolling past `540px` so the active delivery zone, language toggle, and live bag remain one click away everywhere.

### Cards / Dish Specimens
- **Corner Style:** Crisp `3px` corners with `1px` chalk hairline border.
- **Media:** Unencumbered `16:11` studio food photography with smooth `0.65s` exponential zoom on hover — zero corner sticker badges over the photograph.
- **Structure:** Heading + price row first, concise culinary subtitle, organic benefit + code line, 3-column hairline-ruled tabular macro ledger (`Protein | kcal | prep`), and bottom `Details` + `+ Order` rail.

### Inputs / Fields
- Crisp `3px` white fields on mineral-chalk card surfaces with `1px` strong chalk border, lacquer focus border + visible `2px` saffron `:focus-visible` outline (`3px` offset), inline field errors paired with a focusable crimson error summary alert when validation fails.

### Signature Component: Illuminated 5-Zone Bar & Kinetic Saffron Elbow
- A hairline-ruled architectural selector covering **Timișoara, Giroc, Dumbrăvița, Moșnița, and Ghiroda** (5 equal columns on desktop, compact wrapped 5-pill bar on 390px mobile so all 5 zones stay simultaneously visible). Selecting any zone illuminates its saffron indicator, recalculates live arrival time across the adjacent tabular macro bar, and synchronizes the Zones explorer, Concierge form, and Bag drawer. Directly beneath the macro bar, a `1.5px` saffron elbow pathline descends into the primary `Order Today's Menu` action.

## Do's and Don'ts

### Do:
- **Do** keep all dish photography clean and free of overlaid corner pills, sale ribbons, or circular icon stickers.
- **Do** start every card, ritual step, zone detail, and drawer section directly on its heading without eyebrows or kickers above it.
- **Do** format every price, macro gram, calorie figure, and delivery minute in `JetBrains Mono` with `font-variant-numeric: tabular-nums`.
- **Do** maintain full English and Romanian (`EN | RO`) parity across visible text, currency (`€` / `lei`), and accessible `aria-label` strings.
- **Do** honor `prefers-reduced-motion` across all GSAP entrance reveals and elbow transitions.

### Don't:
- **Don't** place bright saffron gold icons or small saffron text directly on mineral-chalk surfaces where contrast drops below `3:1`.
- **Don't** substitute external Google Fonts CDN links or emoji icons for the self-hosted `STIX Two Text` / `Onest` / `JetBrains Mono` bundle and Phosphor vector icons.
- **Don't** introduce nested cards, decorative glassmorphism blur panels, gradient text, or generic SaaS checkmark pricing tables.
- **Don't** fabricate unverified street numbers, third-party certifications, press awards, or live payment guarantees.
