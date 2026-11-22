import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template salon-coiffure : en-tête flottant en pilule (carte
 * translucide au-dessus du premier bloc de la page), CTA « Réserver », pied de
 * page blanc à deux colonnes.
 */
export function SalonCoiffureShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { paths } = salonCoiffure;
  const { footer } = copy;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(salonCoiffure, "en")}
      theme={salonCoiffure.theme}
      header="floating"
      className="[&>main]:flex [&>main]:flex-col"
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.prestations, label: copy.nav.prestations },
        { href: paths.stylists, label: copy.nav.stylists },
        { href: paths.lookbook, label: copy.nav.lookbook },
        { href: paths.reservation, label: copy.nav.reservation },
        { href: paths.journal, label: copy.nav.journal },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{ href: paths.reservation, label: copy.cta.book, icon: false }}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="font-tpl-display text-tpl-lg leading-tight font-(weight:--tpl-display-weight)">
                {footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {footer.text}
              </p>
            </div>
            <div className="space-y-2 text-tpl-sm text-tpl-ink-muted sm:text-right">
              <p>{footer.address}</p>
              <p>{footer.email}</p>
              <p>{footer.hours}</p>
            </div>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
