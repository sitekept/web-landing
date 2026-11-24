import { CalendarCheck, Gauge, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template garage : marque (carré d'encre et jauge rouge), navigation,
 * CTA devis, barre d'actions mobile (appeler, rendez-vous) posée par le slot du
 * shell, et pied de page de fiche technique sous un filet rouge. Tous les
 * textes viennent de la copie.
 */
export function GarageAutoShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(garageAuto, locale);
  const { paths } = garageAuto;
  const nav = [
    { href: paths.home, label: copy.nav.home },
    { href: paths.prestations, label: copy.nav.prestations },
    { href: paths.devis, label: copy.nav.devis },
    { href: paths.rendezVous, label: copy.nav.rendezVous },
  ];
  const eyebrow =
    "text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-70";

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(garageAuto, "en")}
      theme={garageAuto.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl bg-tpl-ink text-tpl-accent"
          >
            <Gauge className="size-6" />
          </div>
        ),
      }}
      nav={nav}
      cta={{
        href: paths.devis,
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
            href={templateHref(locale, paths.rendezVous)}
            icon={<CalendarCheck aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.appointmentShort}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="border-t-4 border-tpl-accent bg-tpl-inverse px-4 text-tpl-inverse-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 text-tpl-sm opacity-80">{copy.footer.text}</p>
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className={eyebrow}>{copy.footer.contactTitle}</p>
              <p>
                <a
                  href={copy.phone.href}
                  className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-inverse-ink"
                >
                  {copy.phone.label}
                </a>
              </p>
              <p>{copy.footer.email}</p>
              <p>{copy.footer.address}</p>
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className={eyebrow}>{copy.footer.hoursTitle}</p>
              <p className="tabular-nums">{copy.footer.hours}</p>
              <p>{copy.footer.closed}</p>
            </div>
            <nav aria-label={copy.footer.siteTitle} className="text-tpl-sm">
              <p className={eyebrow}>{copy.footer.siteTitle}</p>
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
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
