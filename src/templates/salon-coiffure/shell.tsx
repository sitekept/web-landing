import { CalendarCheck, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template salon-coiffure : en-tête flottant en pilule (carte
 * translucide au-dessus de la première section), CTA « Réserver », barre
 * d’actions mobile (appeler, réserver) et pied de page prune à quatre colonnes
 * (le salon, horaires, coordonnées, plan du site).
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
  const { common, footer } = copy;
  const nav = [
    { href: paths.home, label: copy.nav.home },
    { href: paths.prestations, label: copy.nav.prestations },
    { href: paths.stylists, label: copy.nav.stylists },
    { href: paths.lookbook, label: copy.nav.lookbook },
    { href: paths.reservation, label: copy.nav.reservation },
    { href: paths.journal, label: copy.nav.journal },
    { href: paths.contact, label: copy.nav.contact },
  ];
  const label =
    "text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase text-tpl-eyebrow";

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
      nav={nav}
      cta={{ href: paths.reservation, label: copy.cta.book, icon: false }}
      mobileActionsLabel={copy.a11y.quickActions}
      mobileActions={
        <>
          <TemplateLink
            href={common.phone.href}
            variant="outline"
            shape="pill"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.reservation)}
            shape="pill"
            icon={<CalendarCheck aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.book}
          </TemplateLink>
        </>
      }
      footer={
        <footer
          data-tone="inverse"
          className="bg-tpl-inverse px-4 text-tpl-inverse-ink sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {footer.text}
              </p>
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className={label}>{common.hoursLabel}</p>
              {common.hours.map((row) => (
                <p key={row.day}>
                  <span className="block text-tpl-ink-muted">{row.day}</span>
                  <span className="tabular-nums">{row.time}</span>
                </p>
              ))}
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className={label}>{footer.contactTitle}</p>
              <p>
                {common.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={common.phone.href}
                  className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-inverse-ink"
                >
                  {common.phone.label}
                </a>
              </p>
              <p className="break-words">{common.email}</p>
            </div>
            <nav aria-label={footer.siteTitle} className="text-tpl-sm">
              <p className={label}>{footer.siteTitle}</p>
              <ul className="mt-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <TemplateLink
                      href={templateHref(locale, item.href)}
                      variant="ghost"
                      icon={false}
                      className="-ml-5 text-tpl-inverse-ink hover:bg-tpl-inverse-ink/10"
                    >
                      {item.label}
                    </TemplateLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="mx-auto max-w-7xl border-t border-tpl-line py-6 text-tpl-xs text-tpl-ink-muted">
            {footer.note}
          </p>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
