import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getSiteLocale } from "@/lib/site-messages";

export default async function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getSiteLocale();

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} />
      {children}
      <Footer locale={locale} />
    </main>
  );
}
