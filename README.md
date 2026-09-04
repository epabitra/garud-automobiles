# Garud Automobiles — Website

Marketing/lead-generation website for Garud Automobiles, the authorised Skyy Rider
Electric dealer in Bijipur, Berhampur (Brahmapur), Odisha.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, React Router and Framer Motion.

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
npm run lint      # oxlint
```

## Project structure

```
src/
  components/
    layout/     Header, Footer, FloatingActions, Layout
    sections/   Homepage & inner-page sections (Hero, VehicleShowcase, etc.)
    ui/         Reusable UI primitives (CtaButton, SmartImage, Lightbox, ...)
    forms/      ContactForm
  data/         Single source of truth for business facts, vehicles, services,
                gallery images and FAQ content
  pages/        Route-level pages
  hooks/        useSeo, useScrollToTop
public/images/  Curated, categorised photos (storefront, vehicles, gallery, ...)
```

## Content notes

All business facts in `src/data/business.ts` are sourced from verified material
(the supplied Google Business Profile research and the business's own storefront
signage visible in its photos). Anything not independently confirmed (exact opening
hours, WhatsApp number, pricing, financing/test-drive availability, etc.) is
deliberately **not** claimed on the site — see the final implementation report for
the full list of items still needing owner confirmation before publishing further
claims.

## Deployment

This is a static single-page app (Vite build output in `dist/`) and can be deployed
to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.). Before
going live:

- Replace the placeholder `https://garudautomobiles.example` domain in
  `index.html`, `public/robots.txt` and `public/sitemap.xml` with the real domain.
- Connect the contact form in `src/components/forms/ContactForm.tsx` to a real
  backend or email service (see the comment in `handleSubmit`).
