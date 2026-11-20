import { CalendarDays, Moon, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template spa-massage : marque, navigation, CTA téléphone, barre
 * d'accès rapide sur mobile et pied de page. Tous les textes viennent de la
 * copie. Le sélecteur FR / EN est déduit de la définition.
 *
 * Instrument Serif n'existe qu'en graisse normale : les titres du template
 * sont remis à `font-normal` ici pour éviter un gras synthétique. Le texte
 * courant est en Inter léger (`font-light`).
 */
const SERIF_WEIGHT =
  "font-light [&_h1]:font-normal [&_h2]:font-normal [&_h3]:font-normal [&_h4]:font-normal [&_header_div.min-w-0>a]:font-normal";

export function SpaMassageShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(spaMassage, locale);
  const { paths } = spaMassage;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(spaMassage, "en")}
      theme={spaMassage.theme}
      className={SERIF_WEIGHT}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl-pill border border-tpl-accent/70 text-tpl-accent"
          >
            <Moon className="size-5" strokeWidth={1.5} />
          </div>
        ),
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.soins, label: copy.nav.soins },
        { href: paths.espace, label: copy.nav.espace },
        { href: paths.reservation, label: copy.nav.reservation },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      footer={
        <>
          <div
            role="group"
            aria-label={copy.footer.barLabel}
            className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-tpl-line bg-tpl-surface/95 px-4 py-3 backdrop-blur xl:hidden"
          >
            <TemplateLink
              href={copy.phone.href}
              variant="outline"
              shape="pill"
              icon={<Phone aria-hidden="true" className="size-4" />}
              className="flex-1"
            >
              {copy.cta.callShort}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, paths.reservation)}
              shape="pill"
              icon={<CalendarDays aria-hidden="true" className="size-4" />}
              className="flex-1"
            >
              {copy.cta.bookShort}
            </TemplateLink>
          </div>

          <footer className="border-t border-tpl-line bg-tpl-raised pb-20 xl:pb-0">
            <div className="px-4 py-12 sm:px-6 lg:px-8">
              <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
                <div className="max-w-md">
                  <p className="font-tpl-display text-tpl-xl leading-tpl-display">
                    {copy.footer.title}
                  </p>
                  <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                    {copy.footer.text}
                  </p>
                  <p className="mt-5 border-l-2 border-tpl-accent pl-4 text-tpl-xs text-tpl-ink-muted">
                    {copy.common.wellnessNotice}
                  </p>
                </div>
                <div>
                  <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                    {copy.common.hoursLabel}
                  </p>
                  <dl className="mt-4 space-y-2 text-tpl-sm">
                    {copy.common.hours.map((row) => (
                      <div key={row.day} className="flex flex-col">
                        <dt className="text-tpl-ink-muted">{row.day}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                    {copy.footer.contactLabel}
                  </p>
                  <ul className="mt-4 space-y-2 text-tpl-sm">
                    <li>
                      <a
                        href={copy.phone.href}
                        className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                      >
                        {copy.phone.label}
                      </a>
                    </li>
                    <li>{copy.common.email}</li>
                    <li className="text-tpl-ink-muted">
                      {copy.common.address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </>
      }
    >
      {children}
    </TemplateShell>
  );
}
