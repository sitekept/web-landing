import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { LABEL_CLASS } from "./parts";

/**
 * Shell du template ménage-nettoyage : en-tête `bar`, barre d'actions mobile
 * (appeler, devis) et pied de page à trois colonnes. Tous les textes viennent
 * de la copie.
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
  const nav = [
    { href: paths.home, label: copy.nav.home },
    { href: paths.formules, label: copy.nav.formules },
    { href: paths.zones, label: copy.nav.zones },
    { href: paths.entreprises, label: copy.nav.entreprises },
    { href: paths.faq, label: copy.nav.faq },
  ];

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
      nav={nav}
      cta={{
        href: `${paths.home}#devis`,
        label: copy.cta.quote,
        icon: false,
      }}
      mobileActionsLabel={copy.a11y.quickActions}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1 tabular-nums"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={`${templateHref(locale, paths.home)}#devis`}
            icon={false}
            className="flex-1"
          >
            {copy.cta.quote}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className={LABEL_CLASS}>{copy.footer.contactTitle}</p>
              <p>
                <a
                  href={copy.phone.href}
                  className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {copy.phone.label}
                </a>
              </p>
              <p className="break-words">{copy.common.email}</p>
              <p>{copy.common.address}</p>
              <p>{copy.common.hours}</p>
            </div>
            <nav aria-label={copy.footer.siteTitle} className="text-tpl-sm">
              <p className={LABEL_CLASS}>{copy.footer.siteTitle}</p>
              <ul className="mt-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <TemplateLink
                      href={templateHref(locale, item.href)}
                      variant="ghost"
                      icon={false}
                      className="-ml-5"
                    >
                      {item.label}
                    </TemplateLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
