import { Monitor } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/**
 * Shell du template ordinateur : en-tête en barre (pictogramme moniteur),
 * navigation par ancres et pied de page à trois colonnes. Tous les textes
 * viennent de la copie. Le sélecteur FR / EN est déduit de la définition.
 */

const FOOTER_LINK =
  "inline-flex min-h-9 items-center hover:text-tpl-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function OrdinateurShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(ordinateur, locale);
  const home = ordinateur.paths.home;
  const anchor = (id: string) => `${home}#${id}`;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(ordinateur, "en")}
      theme={ordinateur.theme}
      brand={{
        href: home,
        name: copy.brand.name,
        mark: (
          <Monitor aria-hidden="true" className="size-8 text-tpl-accent" />
        ),
      }}
      nav={[
        { href: anchor(ANCHORS.home), label: copy.nav.home },
        { href: anchor(ANCHORS.services), label: copy.nav.services },
        { href: anchor(ANCHORS.about), label: copy.nav.about },
        { href: anchor(ANCHORS.gallery), label: copy.nav.gallery },
        { href: anchor(ANCHORS.contact), label: copy.nav.contact },
      ]}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 text-tpl-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Monitor
                  aria-hidden="true"
                  className="size-8 text-tpl-accent"
                />
                <span className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {copy.brand.name}
                </span>
              </div>
              <p className="mt-4 text-tpl-ink-muted">{copy.footer.text}</p>
            </div>
            <nav aria-label={copy.footer.linksTitle}>
              <p className="font-semibold">{copy.footer.linksTitle}</p>
              <ul className="mt-4 space-y-1 text-tpl-ink-muted">
                {[
                  [ANCHORS.services, copy.hero.seeServices],
                  [ANCHORS.about, copy.nav.about],
                  [ANCHORS.gallery, copy.nav.gallery],
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
              <p className="font-semibold">{copy.footer.certTitle}</p>
              <p className="mt-4 text-tpl-ink-muted">{copy.footer.certText}</p>
              <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.copyright}
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
