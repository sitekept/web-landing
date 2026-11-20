# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
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
- **Kit**: `src/components/template-kit/` (shell, section, card, link, `templateHref`), styled only with `tpl-*` tokens; theme applied through `themeStyle()` (`src/lib/template-theme.ts`). `TemplateMedia` and `TemplateDemoForm` are not in the barrel `index.ts` and are imported per module (`@/components/template-kit/media`, `@/components/template-kit/demo-form`) to keep the page JS small; client components of the kit use `clsx`, not `cn`
- **Registry**: `src/content/templates/registry.ts` is the single source of truth (status, admin name/sector/notes, gallery copy FR + EN, `locales`). `DEMO_SLUGS`, the gallery, the admin page and the typed `demoSlug` of `metier-pages.ts` derive from it. Pure data, no React and no template copy (the middleware pulls it). A template served here must be `["fr", "en"]`, or `["fr"]` with the transitional `englishPending: "phase-5"` marker; `registry-checks.ts` (type-only) ties the registry to the definitions
- **Definitions**: `src/content/templates/<slug>.ts` holds the theme, the FR paths and the copy per locale (`fr` as const, `en` typed from it with `WidenLiterals`); shared types in `src/content/templates/types.ts`. `getTemplateCopy` and `buildTemplatePageMetadata` only accept locales the definition declares (no silent FR fallback). List items with an icon carry an `icon` key in the copy (same key in FR and EN), resolved by a `Record<IconKey, LucideIcon>` table in the views
- **Views**: `src/templates/<slug>/` (one view per page plus `shell.tsx`, `locale` prop, no hard-coded text), outside the FR route group; FR and EN routes are thin wrappers around them. The shell shows the FR/EN switch only when the definition has an `en` copy
- **English versions**: `/en/<slug>` under `src/app/(demos-en)/en/<slug>/`, with its own root layout (`lang="en"`, `DemoBanner locale="en"`)
- **Demo links**: derived from the registry (`src/content/templates/registry.ts`), never from a hand-written slug list. `PATH_MAP` (`src/lib/localized-routes.ts`) maps `/<slug>` to `/en/<slug>` for every public template whose `locales` contains `"en"`; the gallery and the trade pages (`src/views/metier.tsx`) run demo links through `linkLocalizer`, and the English trade pages only add "(in French)" for templates without an English version. The admin page shows FR and EN links (or "EN : phase 5") from `toAdminCatalogEntry`
- **SEO**: demos are `noindex, follow` (`isDemoPathname` in `src/lib/public-template-routes.ts`, derived from the registry and applied by `src/middleware.ts`), metadata from `buildTemplatePageMetadata`, kept out of the sitemap
- **Status**: `dentiste` is migrated (FR + EN); the other demos are still hand-written and move onto the kit one batch at a time
- **Harness**: `scripts/template-harness/` (route snapshots, `X-Robots-Tag` check; `pnpm harness:snapshot`, `pnpm harness:headers`), run against an isolated build, never in the repo
- **Guide**: see `docs/templates.md` for the skeleton, the kit, the "add a FR + EN template" checklist, "migrate an existing template", content rules and the 21st.dev intake protocol
