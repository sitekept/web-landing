import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { OrganizationJsonLd } from "@/components/structured-data";
import { RootDocument } from "@/components/root-document";
import type { SiteLocale } from "@/content/site-content";
import { PATH_MAP } from "@/lib/localized-routes";

/**
 * Coquille des pages commerciales, partagée par le layout français
 * (src/app/(marketing)/layout.tsx) et le layout anglais (src/app/en/layout.tsx).
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: SiteLocale;
  children: ReactNode;
}) {
  return (
    <RootDocument locale={locale}>
      <main className="min-h-screen">
        <OrganizationJsonLd locale={locale} />
        <Navigation locale={locale} pathMap={PATH_MAP} />
        {children}
        <Footer locale={locale} />
      </main>
    </RootDocument>
  );
}
