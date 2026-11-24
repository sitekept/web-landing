import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template avocate : bandeau haut inverse (ville et domaines),
 * en-tête en barre, pied de page sobre. Tous les textes viennent de la copie.
 *
 * Instrument Serif n'existe qu'en graisse normale : la graisse des titres est
 * le token `fontDisplayWeight: 400` de la définition.
 */
export function AvocateShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(avocate, locale);
  const { paths } = avocate;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(avocate, "en")}
      theme={avocate.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.expertises, label: copy.nav.expertises },
        { href: paths.blog, label: copy.nav.blog },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{ href: paths.contact, label: copy.cta.contact, icon: false }}
      topBarTone="inverse"
      topBar={
        <>
          <span className="font-medium">{copy.topBar.left}</span>
          <span className="font-medium">{copy.topBar.right}</span>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-surface px-4 text-tpl-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <ul className="space-y-2 text-tpl-sm text-tpl-ink-muted sm:text-right">
              <li>{copy.footer.city}</li>
              <li>{copy.footer.email}</li>
              <li>
                <a
                  href={copy.phone.href}
                  className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {copy.phone.label}
                </a>
              </li>
              <li>{copy.footer.hours}</li>
            </ul>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
