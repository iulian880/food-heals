# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: React + Vite + TypeScript + Tailwind CSS + GSAP (static production build deployable to GitHub Pages at `iulian880.github.io/food-heals` and Vercel)

## Users

Busy professionals, health-conscious diners, and families across the Timișoara metropolitan area (**Timișoara, Giroc, Dumbrăvița, Moșnița, and Ghiroda**) — both Romanian locals and English-speaking expats/professionals — who refuse to choose between convenience, genuine culinary craft, and restorative whole-food nutrition.

## Product Purpose

**food-heals** is a bilingual (English / Romanian) premium organic meal-delivery and daily nutrition subscription platform rebuilt from the ground up from the legacy `Food-Heals` repository. Visitors understand the culinary-healing premise immediately, explore a chef-curated seasonal menu with dietary and restorative-benefit filtering, inspect ingredients and macro balance, assemble an interactive order bag or configure a monthly meal plan, browse active culinary kitchens across cities, and complete a guided tasting order or inquiry.

## Positioning

Chef-crafted, 100% organic restorative meals delivered in under 20 minutes — uniting gastronomic craft and clinical ingredient transparency (local farms, zero added hormones or antibiotics, clear macro and functional-ingredient profiles) instead of joyless diet meal-prep boxes or greasy fast-food delivery.

## Operating Context

Desktop and mobile web showcase and interactive ordering storefront with instant, zero-reload English (`EN`) and Romanian (`RO`) bilingual switching, category and restorative-goal menu filtering, dish inspection drawer/modal, persistent interactive meal bag, subscription plan comparison and configurator, interactive kitchen-city showcase, and validated contact/onboarding flow. Ships as a static bundle suitable for GitHub Pages.

## Capabilities and Constraints

- Full bilingual parity (`EN` / `RO`) across navigation, editorial headlines, menu items, ingredients, nutritional data, subscription plans, cities, interactive bag, form errors, and accessibility labels.
- Brand and repository explicitly renamed from `Food-Heals` / `FoodHeals!` to **`food-heals`** (`iulian880/food-heals`).
- Complete ground-up rebuild replacing the legacy 2020 static HTML/CSS/jQuery implementation.
- Client-side interactive state (menu filters, dish detail inspector, cart/bag quantities, subscription cadence toggle, city selector, bilingual toggle, form validation); no live payment processor or courier backend is connected, so checkout and contact submissions present transparent preview confirmations rather than fake live charges.
- Active delivery coverage focuses on the Timișoara metropolitan area (**Timișoara, Giroc, Dumbrăvița, Moșnița, Ghiroda**) with 3 subscription tiers and a 20-minute kitchen-to-door promise; figures are illustrative product showcase data without fabricated media awards, clinical certifications, or fake live order counters.

## Brand Commitments

- Name: **food-heals**
- Languages: English and Romanian (`EN` / `RO`)
- Voice: Confident, appetizing, grounded culinary hospitality — sensory and transparent, never diet-culture guilt or loud discount fast-food hype.
- Ownership: Petcu Iulian (`iulian880/food-heals`).

## Evidence on Hand

- Original repository (`iulian880/Food-Heals`) establishing the core service domain (organic healthy meal delivery, 365-day subscriptions, 20-minute delivery, 4 international kitchens, 3 plans, 8 initial dish concepts).
- Legacy stock photos in `resources/img/` are low-resolution 2020 tutorial assets and will be replaced with bespoke, art-directed high-resolution photography generated for `food-heals`.
- No verified customer press quotes, clinical trials, or third-party ratings are supplied; editorial testimonials and showcase menu entries are authored as clearly illustrative product showcase content.

## Product Principles

1. **Gastronomy first, nutrition effortless**: Food must trigger genuine appetite before explaining macros or restorative benefits.
2. **Tactile, immediate ordering clarity**: Moving from discovering a dish to filtering by dietary need, inspecting ingredients, and adding to a bag or plan takes seconds without visual clutter.
3. **Co-equal bilingual craft**: Every headline, culinary term, and micro-interaction reads natively in both English and Romanian.
4. **Editorial restraint over delivery-app noise**: No coupon popups, no fake scarcity timers, no cluttered promo badges.

## Accessibility & Inclusion

- WCAG 2.1 AA minimum contrast (`>= 4.5:1` for body text, `>= 3:1` for large headings and interactive boundaries).
- Full keyboard navigation, visible focus states, semantic landmarks, proper ARIA roles/labels for language switcher, menu filters, drawers, and modals.
- Full `prefers-reduced-motion` compliance across all choreographed animations.
