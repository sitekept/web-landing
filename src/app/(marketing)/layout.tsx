import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getSiteLocale } from "@/lib/site-messages";
import { OrganizationJsonLd } from "@/components/structured-data";

export default async function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getSiteLocale();

  return (
    <main className="min-h-screen">
      <OrganizationJsonLd />
      <Navigation locale={locale} />
      {children}
      <Footer locale={locale} />
    </main>
  );
}
