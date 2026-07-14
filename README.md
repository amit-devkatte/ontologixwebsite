# Ontologix Software Website

Production-ready corporate website for **ONTLOGIX SOFTWARE PRIVATE LIMITED**.

## Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS v4, shadcn-style UI primitives, Lucide icons
- Framer Motion, GSAP, Recharts
- React Hook Form and Zod
- Static export-ready configuration for GitHub Pages or Vercel

## Structure

- `app/` route tree, metadata routes, layout, pages, and dynamic static params
- `components/` reusable UI, layout, forms, motion, visual, chart, and section components
- `data/` JSON-backed content for services, solutions, case studies, insights, careers, and company story
- `lib/` content access, SEO helpers, schema helpers, and utilities
- `config/` site configuration and design-system documentation data
- `hooks/` reusable client hooks
- `types/` shared TypeScript content models
- `public/` local brand and visual assets
- `styles/` styling notes and future expansion point

## Development

```bash
pnpm install
pnpm dev
```

## Quality

```bash
pnpm lint
pnpm typecheck
pnpm build
```

`next.config.ts` uses `output: "export"` and `images.unoptimized` so `pnpm build` emits a static `out/` directory suitable for GitHub Pages.
