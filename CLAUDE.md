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
│   ├── navigation.tsx     # Main navigation
│   └── footer.tsx         # Footer component
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

- Primary language: French (fr)
- Content is in French throughout the application
- SEO metadata configured for French market
