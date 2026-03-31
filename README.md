# Winstore E-commerce Assessment

Next.js App Router storefront built for the front-end assessment using:

- Next.js 16
- React Server Components
- Server Actions for every API interaction
- TypeScript
- Tailwind CSS

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Copy the environment file:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Deliverable Links

- GitHub repository: `REPLACE_WITH_GITHUB_REPOSITORY_LINK`
- Live Vercel URL: `REPLACE_WITH_VERCEL_LIVE_LINK`

## Architecture

### 1. App Router pages

- `src/app/page.tsx`
  - Home page composed from server-rendered sections.
- `src/app/products/[id]/page.tsx`
  - Product details page backed by the single-product endpoint.
- `src/app/loading.tsx`, `src/app/error.tsx`, `src/app/not-found.tsx`
  - Loading, error, and missing-state handling.

### 2. Server Actions

- `src/actions/catalog-actions.ts`
  - All API requests live here.
  - Uses `fetch()` on the server only.
  - Includes runtime response-shape validation.
  - Exposes:
    - all products
    - categories
    - products by category
    - single product
    - aggregated home page data

### 3. Reusable UI

- `src/components/home/*`
  - Header, hero, promo rail, product sections, footer.
- `src/components/ui/product-card.tsx`
  - Shared product card used on both home and detail pages.

### 4. Shared utilities

- `src/lib/catalog.ts`
  - Types, validators, and UI formatting helpers.
- `src/lib/home-demo-data.ts`
  - Static demo content for the hero and promo strip.

## Assessment-specific implementation notes

- No API fetching happens in client components.
- Client components are used only where local UI state is needed.
  - Example: category tab switching in `CategoryDeals`.
- Homepage "New Arrivals" is limited to 10 products from the all-products API.
- Product-by-category content is preloaded server-side, then switched client-side without any extra fetch.
- The hero and category showcase are intentionally composed from static demo content, as hinted in the provided mockup notes.

## Assumptions

- The API base URL is configurable through `ASSESSMENT_API_BASE_URL`.
- Pricing uses the raw API USD values.
- A small product detail page was added to make practical use of the single-product endpoint.
- Some visual elements in the mockup appear decorative or based on unavailable assets, so the implementation recreates them with CSS, layout composition, and API product imagery.

## Verification

The project was verified with:

```bash
npm run lint
```
