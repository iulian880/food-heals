# food-heals

Bilingual (**English / Romanian**) flagship storefront and interactive ordering experience for **food-heals** — 100% organic, chef-crafted restorative meals plated to order and delivered hot in 20 minutes across **Timișoara, Giroc, Dumbrăvița, Moșnița, and Ghiroda**.

Rebuilt completely from the ground up from the legacy 2020 `Food-Heals` static prototype into a modern editorial culinary platform.

## Highlights

- **Bilingual Native Parity (`EN` / `RO`)**: Instant zero-reload switching between English and Romanian with automatic currency formatting (`EUR` / `lei`) and full Romanian diacritics (`ă, â, î, ș, ț`).
- **Saffron & Fig Lacquer Visual System**: Deep fig-oxblood lacquer (`#260811`) paired with mineral alabaster (`#F3F2EF`), embossed saffron gold (`#E5A91C`), and botanical jade (`#22593B`), anchored by self-hosted `STIX Two Text`, `Onest`, and `JetBrains Mono` variable fonts.
- **Interactive Seasonal Harvest Menu**: 8 chef-curated organic dishes with dietary goal filters (`Anti-Inflammatory`, `High Protein`, `Gut Reset`, `Plant-Based`), sorting, hairline-ruled tabular macro ledgers, and a full Culinary Specimen Modal with Banat farm provenance and allergen details.
- **5-Zone Metropolitan Sync**: Live interactive coverage board for **Timișoara, Giroc, Dumbrăvița, Moșnița, and Ghiroda** synchronized across the hero bar, zone explorer, concierge form, and slide-over kitchen bag.
- **Subscriptions & Kitchen Bag**: Monthly/Weekly subscription ledger, persistent interactive order bag with automatic free-delivery calculation, accessible form validation with linked error summary, and choreographed GSAP motion with full `prefers-reduced-motion` support.

## Stack

- **React 19** + **TypeScript 5.8** + **Vite 6**
- **Tailwind CSS v4**
- **GSAP + ScrollTrigger**
- **Phosphor Icons** (`@phosphor-icons/react`)
- **Self-hosted Variable Fonts** (zero external font CDN requests)

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Live Deployment

Automatically built and deployed to GitHub Pages via `.github/workflows/deploy.yml` at:
**https://iulian880.github.io/food-heals/**
