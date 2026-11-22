import { ChefHat } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/**
 * Shell du template patisserie : en-tête en barre sombre, navigation par
 * ancres et pied de page à trois colonnes. Tous les textes viennent de la
 * copie. Le sélecteur FR / EN est déduit de la définition.
 *
 * Instrument Serif n'existe qu'en graisse normale : la graisse des titres est
 * le token `fontDisplayWeight: 400` de la définition.
 */

const FOOTER_LINK =
  "inline-flex min-h-9 items-center hover:text-tpl-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function PatisserieShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(patisserie, locale);
  const home = patisserie.paths.home;
  const anchor = (id: string) => `${home}#${id}`;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(patisserie, "en")}
      theme={patisserie.theme}
      brand={{
        href: home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: <ChefHat aria-hidden="true" className="size-5 text-tpl-accent" />,
      }}
      nav={[
        { href: anchor(ANCHORS.home), label: copy.nav.home },
        { href: anchor(ANCHORS.collections), label: copy.nav.collections },
        { href: anchor(ANCHORS.signature), label: copy.nav.signature },
        { href: anchor(ANCHORS.contact), label: copy.nav.contact },
      ]}
      cta={{ href: anchor(ANCHORS.contact), label: copy.nav.order, icon: false }}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-surface px-4 text-tpl-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <ChefHat aria-hidden="true" className="size-5 text-tpl-accent" />
                <span className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                  {copy.brand.name}
                </span>
              </div>
              <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <nav aria-label={copy.footer.navLabel}>
              <p className="font-semibold">{copy.footer.navLabel}</p>
              <ul className="mt-4 space-y-1 text-tpl-sm text-tpl-ink-muted">
                {[
                  [ANCHORS.collections, copy.nav.collections],
                  [ANCHORS.signature, copy.nav.signature],
                  [ANCHORS.contact, copy.nav.contact],
                ].map(([id, label]) => (
                  <li key={id}>
                    <Link
                      href={templateHref(locale, anchor(id as string))}
                      className={FOOTER_LINK}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-semibold">{copy.footer.positionLabel}</p>
              <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.positionText}
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
