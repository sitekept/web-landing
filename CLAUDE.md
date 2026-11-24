# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
- `pnpm check:routes` - Check that every demo route folder (FR and EN) has a registry entry and the reverse (no build; otherwise the demo would be served without `noindex`)
- `pnpm clean` - Remove .next and node_modules
- `pnpm reinstall` - Clean and reinstall dependencies

## Project Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API for contact form
- **Package Manager**: pnpm

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── _components/        # Page-specific components
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── template-kit/      # Shared kit of the demo templates (tpl-* tokens)
│   ├── navigation.tsx     # Main navigation
│   └── footer.tsx         # Footer component
├── content/
│   └── templates/         # Template definitions (theme, paths, FR + EN copy)
├── features/              # Feature-based modules
│   └── contact-form/      # Contact form functionality
└── lib/                   # Utilities and configuration
    ├── env.ts             # Environment variables validation
    └── utils.ts           # Utility functions
```

## Key Architecture Patterns

### Contact Form Architecture

- **Form Component**: `src/features/contact-form/contact-form.tsx`
- **Server Action**: `src/features/contact-form/contact-form.action.ts`
- **Validation**: Zod schema for form data validation
- **Email Service**: Resend API with fallback to console logging in development

### Environment Configuration

- Environment variables validated through `src/lib/env.ts` using Zod
- Development mode automatically detected when `RESEND_API_KEY` is missing
- Email configuration: `FROM_EMAIL`, `AGENCY_EMAIL`, `RESEND_API_KEY`

### Component Organization

- Page-specific components in `app/_components/`
- Reusable components in `components/`
- Feature-based modules in `features/`
- shadcn/ui components in `components/ui/`

## Development Notes

### Adding New Components

- Use shadcn/ui components from `components/ui/`
- Follow the existing pattern with TypeScript and Tailwind
- Page-specific components go in `app/_components/`
- Reusable components go in `components/`

### Email Configuration

- Development: Form submissions logged to console
- Production: Requires `RESEND_API_KEY` environment variable
- Email templates use inline CSS for compatibility

### Styling

- Tailwind CSS v4 with CSS variables
- Custom colors defined in `globals.css`
- Responsive design with mobile-first approach
- shadcn/ui components use CSS variables for theming

## Important Files

- `src/app/layout.tsx` - Root layout with comprehensive SEO metadata
- `src/features/contact-form/contact-form.action.ts` - Server action for form handling
- `src/lib/env.ts` - Environment variable validation
- `components.json` - shadcn/ui configuration
- `package.json` - Dependencies and scripts

## Language & Localization

- Primary language: French (fr); the marketing site is served in French at the root
- The English site lives under `/en` (route group `src/app/(site-en)/en/`)
- Demo templates are bilingual: French at `/<slug>`, English at `/en/<slug>` (route group `src/app/(demos-en)/`)
- SEO metadata configured for the French market, with hreflang FR/EN between the two versions of a demo

## Recent Updates (Feature: Website Redesign and Enhancement)

### Portfolio Components
- **Portfolio Section**: Dynamic portfolio gallery with optimized images
- **Portfolio Data**: Static configuration in TypeScript interfaces
- **Asset Management**: Images in `/public/realization/` with Next.js optimization
- **Featured Projects**: flowcycleaccounting.com (Noa), mathintegral.com (Matthias)

### Footer Enhancements
- **Animation Support**: Majin Vegeta animation with motion preference detection
- **Social Links**: LinkedIn company page integration
- **Responsive Layout**: Flexbox-based footer with proper element positioning
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Template System
- **Kit**: `src/components/template-kit/` (shell, section, card, link, `templateHref`, re-exported from `src/lib/template-href.ts`), styled only with `tpl-*` tokens; theme applied through `themeStyle()` (`src/lib/template-theme.ts`). `TemplateMedia` and `TemplateDemoForm` are not in the barrel `index.ts` and are imported per module (`@/components/template-kit/media`, `@/components/template-kit/demo-form`) to keep the page JS small; client components of the kit use `clsx`, not `cn`
- **Registry**: `src/content/templates/registry.ts` is the single source of truth (status, admin name/sector/notes, gallery copy FR + EN, `locales`). `DEMO_SLUGS`, the gallery, the admin page and the typed `demoSlug` of `metier-pages.ts` derive from it. Pure data, no React and no template copy (`next.config.ts` loads it through `src/lib/public-template-routes.ts`). Three entry shapes: `sitekept-public` (served here, in the gallery), `lab` with `routed: true` (served here at `/<slug>` and `/en/<slug>`, `noindex` through `routedTemplates` -> `DEMO_SLUGS`, shown in the admin as "Lab on sitekept.com", but absent from the gallery, the trade pages and `PATH_MAP`; always `["fr", "en"]`, no `gallery` block; this is how a new template is born, promoted to `sitekept-public` only after Joseph validates it) and the others (hosted on Vercel, not routed here, `routed` forbidden). Every template served here (public or routed `lab`) is `["fr", "en"]`, no exception; `registry-checks.ts` (type-only) requires the routed templates and the definitions to match exactly
- **Definitions**: `src/content/templates/<slug>.ts` holds the theme, the FR paths and the copy per locale (`fr` as const, `en` typed from it with `WidenLiterals`); shared types in `src/content/templates/types.ts`. `getTemplateCopy` and `buildTemplatePageMetadata` only accept locales the definition declares (no silent FR fallback). List items with an icon carry an `icon` key in the copy (same key in FR and EN), resolved by a `Record<IconKey, LucideIcon>` table in the views
- **Views**: `src/templates/<slug>/` (one view per page plus `shell.tsx`, `locale` prop, no hard-coded text), outside the FR route group; FR and EN routes are thin wrappers around them. The shell shows the FR/EN switch only when the definition has an `en` copy
- **English versions**: `/en/<slug>` under `src/app/(demos-en)/en/<slug>/`, with its own root layout (`lang="en"`, `DemoBanner locale="en"`)
- **Demo links**: derived from the registry (`src/content/templates/registry.ts`), never from a hand-written slug list. `PATH_MAP` (`src/lib/localized-routes.ts`) maps `/<slug>` to `/en/<slug>` for every public template; the gallery and the trade pages (`src/views/metier.tsx`) run demo links through `linkLocalizer`. The admin page shows FR and EN links from `adminTemplateCatalog` (`registry.ts`)
- **SEO**: demos are `noindex, follow` (`X-Robots-Tag` set by `headers()` in `next.config.ts` from `DEMO_SLUGS` through `demoNoindexHeaders` in `src/lib/public-template-routes.ts`; there is no middleware since phase 7; `pnpm check:routes` fails when a demo route folder has no registry entry), metadata (title, description, `openGraph`, `twitter`, hreflang) from `buildTemplatePageMetadata`, kept out of the sitemap. Open Graph images are the routes `src/app/opengraph-image/route.tsx` and `src/app/(site-en)/en/opengraph-image/route.tsx` (not metadata files: avoids the `metadataBase` build warning)
- **Status**: the thirteen public demos are on the kit and bilingual (`pattiserie` became `patisserie`, the old URL redirects and stays `noindex`; `agence-immobiliere` absorbed `agent-immobilier`, `plombier-chauffagiste` absorbed `plombier-serrurier`); ten templates were born bilingual on the kit as routed `lab` (noindex, out of the gallery, awaiting Joseph's validation): `electricien`, `osteopathe`, `reparation-mobile`, `spa-massage`, `coffee-shop`, `createur-culinaire`, `garage-auto`, `photographe`, `expert-comptable`, `e-commerce` (fictional shop with a browser-side cart and product pages, plus a back office/CRM: dashboard, orders, inventory, customers; two shells through the `(boutique)` route group and `crm/`, see `docs/templates.md` section 10). Phase 6: seven public demos were redesigned (`restaurant-bistrot`, `salon-coiffure`, `menage-nettoyage`, `cabinet-avocat`, `dentiste`, `architecte-interieur`, `ordinateur`: new homepage and subpages, photos, FR + EN copy, gallery captures and texts refreshed), the copy of `fleuriste`, `patisserie`, `boulangerie` and `avocate` was reviewed, and the kit gained a keyboard-safe mobile menu, a container-aware inline-nav breakpoint, `sizes`/`position` props on the media components, `imageSizes` 512 and an English Open Graph image (see `docs/templates.md` section 9). Phase 7 (done): `noindex` through `next.config.ts` and `pnpm check:routes`, `images.imageSizes` 192, 320, 448 and 512 with `sizes` measured on the 22 served templates (factor = useful width / served width, served width = the `w` of `currentSrc`, never `naturalWidth`; range 0.77 to 1.3), kit debt (focus rings, 24 px targets, tagline never ellipsed, mandatory `sizes` on `TemplateHeroMedia`, `HoverExpandGallery` images), copy review, views under 200 lines, gallery captures in WebP (1600 px, under 150 KB), brand spelling "Sitekept", `package-lock.json` removed (pnpm only)
- **Vendor**: 21st.dev elements live in `src/components/template-kit/vendor/<name>/` (each with a `SOURCE.md` and a `LICENSE`), outside the barrel `index.ts` and imported per module, styled only with `tpl-*` tokens; the intake is described in `docs/templates.md` section 6
- **Harness**: `scripts/template-harness/` (route snapshots, `X-Robots-Tag` check; `pnpm harness:snapshot`, `pnpm harness:headers`, `pnpm check:routes`), run against an isolated build, never in the repo
- **Guide**: see `docs/templates.md` for the skeleton, the kit, the "add a FR + EN template" checklist, "migrate an existing template", content rules and the 21st.dev intake protocol
