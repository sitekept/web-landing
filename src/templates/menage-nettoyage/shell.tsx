import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template ménage-nettoyage : en-tête `bar`, bande d'étapes
 * « 1. Besoin … 4. Proposition » en tête du contenu de chaque page (non
 * collante), pied de page à deux colonnes. Tous les textes viennent de la copie.
 */
export function MenageNettoyageShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const { paths } = menageNettoyage;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(menageNettoyage, "en")}
      theme={menageNettoyage.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.formules, label: copy.nav.formules },
        { href: paths.zones, label: copy.nav.zones },
        { href: paths.entreprises, label: copy.nav.entreprises },
        { href: paths.faq, label: copy.nav.faq },
      ]}
      cta={{
        href: `${paths.home}#devis`,
        label: copy.cta.quote,
        icon: false,
      }}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-tpl-lg font-semibold">{copy.footer.title}</p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="space-y-2 text-tpl-sm text-tpl-ink-muted sm:text-right">
              <p>{copy.common.area}</p>
              <p>{copy.common.email}</p>
              <p>{copy.common.hours}</p>
            </div>
          </div>
        </footer>
      }
    >
      <div className="border-t border-tpl-line bg-tpl-raised px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase lg:grid-cols-4">
          {copy.steps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
      {children}
    </TemplateShell>
  );
}
