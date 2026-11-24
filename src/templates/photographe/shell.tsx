import { Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template photographe : marque en texte seul (pas de pastille),
 * navigation, CTA, barre d'accès rapide mobile et pied de page à filets fins.
 * Tous les textes viennent de la copie. Le sélecteur FR / EN est déduit de la
 * définition.
 */

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function PhotographeShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(photographe, locale);
  const { paths } = photographe;
  const pages = [
    { href: paths.portfolio, label: copy.nav.portfolio },
    { href: paths.forfaits, label: copy.nav.forfaits },
    { href: paths.contact, label: copy.nav.contact },
  ];

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(photographe, "en")}
      theme={photographe.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[{ href: paths.home, label: copy.nav.home }, ...pages]}
      cta={{ href: paths.contact, label: copy.cta.request, icon: false }}
      footer={
        <footer className="border-t border-tpl-line px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.6fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {copy.footer.contactLabel}
              </p>
              <ul className="mt-4 space-y-2 text-tpl-sm">
                <li>
                  <a
                    href={copy.phone.href}
                    className={`underline underline-offset-4 ${FOCUS}`}
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li>{copy.common.email}</li>
                <li className="text-tpl-ink-muted">{copy.common.address}</li>
              </ul>
            </div>
            <nav aria-label={copy.footer.navLabel}>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {copy.footer.navLabel}
              </p>
              <ul className="mt-4 space-y-2 text-tpl-sm">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={templateHref(locale, page.href)}
                      className={`underline-offset-4 hover:underline ${FOCUS}`}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="mx-auto max-w-7xl border-t border-tpl-line py-5 text-tpl-xs text-tpl-ink-muted">
            {copy.footer.note}
          </p>
        </footer>
      }
      mobileActionsLabel={copy.footer.barLabel}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            shape="square"
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.callShort}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.contact)}
            shape="square"
            icon={false}
            className="flex-1"
          >
            {copy.cta.requestShort}
          </TemplateLink>
        </>
      }
    >
      {children}
    </TemplateShell>
  );
}
