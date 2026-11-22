import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template cabinet-avocat : bandeau « dossier » non collant, en-tête
 * en barre, pied de page sobre. Allure documentaire : angles droits, filets
 * fins, sur-titres espacés (`--tpl-tracking-eyebrow` posé sur la racine).
 * Tous les textes viennent de la copie.
 */
export function CabinetAvocatShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { paths } = cabinetAvocat;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(cabinetAvocat, "en")}
      theme={cabinetAvocat.theme}
      className="[--tpl-tracking-eyebrow:0.3em]"
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.expertises, label: copy.nav.expertises },
        { href: paths.casTypes, label: copy.nav.casTypes },
        { href: paths.methode, label: copy.nav.methode },
        { href: paths.publications, label: copy.nav.publications },
        { href: paths.consultation, label: copy.nav.consultation },
      ]}
      cta={{
        href: paths.consultation,
        label: copy.cta.consultation,
        icon: false,
      }}
      topBarTone="tint"
      topBar={
        <>
          <span className="font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
            {copy.topBar.left}
          </span>
          <span className="font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
            {copy.topBar.right}
          </span>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 text-tpl-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="space-y-1 text-tpl-sm text-tpl-ink-muted sm:text-right">
              <p>{copy.footer.address}</p>
              <p>{copy.footer.email}</p>
              <p>
                <a
                  href={copy.footer.phone.href}
                  className="inline-flex min-h-11 items-center tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {copy.footer.phone.label}
                </a>
              </p>
            </div>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
