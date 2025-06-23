# SiteKept - Agency Landing Page

A modern, high-performance landing page for a web development agency built with Next.js 15, TypeScript, and Tailwind CSS. Features rapid development focus, clean design, and production-ready architecture.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Performance Optimized**: Fast loading times and smooth animations
- **Contact Form**: Integrated contact form with email notifications via server actions and Resend
- **SEO Ready**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📋 Sections

1. **Hero Section**: Compelling headline with call-to-action
2. **Value Proposition**: Key benefits and differentiators
3. **Services**: Detailed service offerings with pricing
4. **Team**: Team member profiles and credentials
5. **Call-to-Action**: Secondary conversion section
6. **Contact Form**: Lead capture with validation using server actions
7. **Footer**: Company information and links

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sitekept
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your email configuration:

   ```
   RESEND_API_KEY=your-resend-api-key
   FROM_EMAIL=SiteKept <sitekept@gmail.com>
   AGENCY_EMAIL=sitekept@gmail.com
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📧 Email Setup

The contact form uses server actions with Resend to send emails:

1. Sign up for a free account at [Resend](https://resend.com)
2. Create an API key in your Resend dashboard
3. Add your domain and verify it (for production)
4. Use the API key in the `RESEND_API_KEY` environment variable
5. Set your verified sending domain in `FROM_EMAIL`

For development, you can use Resend's test mode without domain verification.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── _components/            # Internal components for root page
│   │   ├── hero.tsx
│   │   ├── value-proposition.tsx
│   │   ├── services.tsx
│   │   ├── team.tsx
│   │   ├── contact.tsx
│   │   └── cta.tsx
│   ├── actions/
│   │   └── contact.ts          # Server action for contact form
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main landing page
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── navigation.tsx          # Main navigation
│   └── footer.tsx              # Footer component
└── lib/
    └── utils.ts                # Utility functions
```

## 🎨 Design System

- **Colors**: Blue primary (#2563eb), Slate grays
- **Typography**: Inter font family
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Animations**: Tailwind CSS transitions

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

1. Build the project:

   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Size**: Optimized with tree-shaking and code splitting

## 🔧 Customization

### Content Updates

- Update company information in components
- Modify services and pricing in `_components/services.tsx`
- Update team members in `_components/team.tsx`
- Change contact information in `_components/contact.tsx` and `components/footer.tsx`

### Styling

- Modify colors in `globals.css`
- Update component styles using Tailwind classes
- Customize shadcn/ui components in `components/ui/`

### Functionality

- Add new sections by creating components in `app/_components/`
- Extend the contact form with additional fields in `_components/contact.tsx` and `actions/contact.ts`
- Add analytics tracking (Google Analytics, etc.)

## 📱 Mobile Optimization

- Responsive navigation with mobile menu
- Touch-friendly buttons and forms
- Optimized images for different screen sizes
- Fast loading on mobile networks

## 🔒 Security

- Form validation with Zod
- Rate limiting on contact form (recommended to add)
- Secure email handling
- Environment variable protection

## 📈 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Fast loading speeds

## 🧪 Testing

Run the development server and test:

- Form submission functionality
- Navigation smooth scrolling
- Mobile responsiveness
- Email delivery (check spam folder)

## 📞 Support

For questions or issues:

- Email: sitekept@gmail.com
- Create an issue in the repository

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
