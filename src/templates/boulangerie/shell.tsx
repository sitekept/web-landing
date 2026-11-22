import { Wheat } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/**
 * Shell du template boulangerie : bandeau d'annonce sombre, en-tête en barre
 * avec pastille épi, navigation par ancres et pied de page à trois colonnes.
 * Tous les textes viennent de la copie. Le sélecteur FR / EN est déduit de la
 * définition.
 *
 * Instrument Serif n'existe qu'en graisse normale : la graisse des titres est
 * le token `fontDisplayWeight: 400` de la définition.
 */

const FOOTER_LINK =
  "inline-flex min-h-9 items-center hover:text-tpl-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function BoulangerieShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(boulangerie, locale);
  const home = boulangerie.paths.home;
  const anchor = (id: string) => `${home}#${id}`;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(boulangerie, "en")}
      theme={boulangerie.theme}
      brand={{
        href: home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl-pill bg-tpl-accent/10 text-tpl-accent"
          >
            <Wheat className="size-6" />
          </div>
        ),
      }}
      nav={[
        { href: anchor(ANCHORS.home), label: copy.nav.home },
        { href: anchor(ANCHORS.showcase), label: copy.nav.showcase },
        { href: anchor(ANCHORS.services), label: copy.nav.services },
        { href: anchor(ANCHORS.contact), label: copy.nav.contact },
      ]}
      topBarTone="inverse"
      topBar={
        <>
          <p>{copy.topBar.left}</p>
          <div className="flex flex-wrap gap-x-4">
            <span>{copy.topBar.weekdays}</span>
            <span>{copy.topBar.sunday}</span>
          </div>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 text-tpl-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <Wheat aria-hidden="true" className="size-6 text-tpl-accent" />
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
                  [ANCHORS.showcase, copy.nav.showcase],
                  [ANCHORS.services, copy.nav.services],
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
              <p className="font-semibold">{copy.footer.shopLabel}</p>
              <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
                {copy.common.street}
                <br />
                {copy.common.city}
                <br />
                <a
                  href={copy.phone.href}
                  className="inline-flex min-h-9 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {copy.phone.label}
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
