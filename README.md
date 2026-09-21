# Dharti Enterprise — Ceramic Industry Hardware Website

Premium B2B site for a ceramic-industry hardware/machinery-components supplier.
React + TypeScript + Vite + Tailwind CSS v4 + React Router + Leaflet.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Pages

- `/` — the main landing page (hero, categories, applications, map, catalogue, contact).
- `/products` — full product catalogue: search, category filters, grouped grid, product
  detail modal with a WhatsApp enquiry button. Category cards on the landing page deep-link
  here (e.g. `/products?category=Bearings%20%26%20Bearing%20Components`).

This is a client-side-routed single-page app. If you deploy to a static host, make sure
unknown paths fall back to `index.html` so a direct visit or refresh on `/products` works:
- Netlify: already configured via `public/_redirects`.
- Vercel: already configured via `vercel.json`.
- Other hosts (Apache/Nginx/S3): add an equivalent SPA fallback rule.

## Edit content (no code changes needed)

- `src/config/siteConfig.ts` — company name, phone, email, address, WhatsApp number, catalogue URL.
- `src/data/products.ts` — product categories + full product list (used by both the landing
  page and `/products`). Add `image` (path under `public/images/products/...`) and
  `productCode` per product as they become available — both are optional; products without
  an image automatically show a neutral technical placeholder instead of a broken image.
- `src/data/locations.ts` — branches (name, address, lat/lng, phone, WhatsApp, hours).
- `src/data/applications.ts` — production-process stages and application tags.

## Adding product images

Drop files into the matching folder under `public/images/products/` (bearings, polishing,
grinding, chamfering, pneumatic, electrical, mechanical, machinery) and reference the path
in `products.ts`, e.g. `image: "/images/products/bearings/tapered-roller-bearing.jpg"`.
No code changes needed — the grid and detail modal pick it up automatically.

## Placeholders to replace before launch

- Company name, phone, email, address, WhatsApp number in `siteConfig.ts`.
- Branch details and real coordinates in `locations.ts`.
- `catalogueUrl` in `siteConfig.ts`.
- Product images (see above) — none are included yet, only graceful placeholders.

No prices, no e-commerce, no invented stats — every enquiry path routes to WhatsApp.
