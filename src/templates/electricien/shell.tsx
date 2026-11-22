import { Phone, Zap } from "lucide-react";
import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { HazardStripe } from "./parts";

/**
 * Shell du template électricien : marque, navigation, CTA téléphone, barre
 * d'appel collée en bas sur mobile et pied de page. Tous les textes viennent de la copie.
 *
 * Titres très gras et resserrés : posés ici par sélecteur descendant, pour que
 * les composants du kit gardent leur interface.
 */
export function ElectricienShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(electricien, locale);
  const { paths } = electricien;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(electricien, "en")}
      theme={electricien.theme}
      className="[&_h1]:font-extrabold [&_h1]:tracking-tighter [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h3]:font-bold"
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl bg-tpl-accent text-tpl-accent-ink"
          >
            <Zap className="size-6" />
          </div>
        ),
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.prestations, label: copy.nav.prestations },
        { href: paths.realisations, label: copy.nav.realisations },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      mobileActionsTone="accent"
      mobileActions={
        <a
          href={copy.phone.href}
          className="flex min-h-14 items-center justify-center gap-2 px-4 text-tpl-base font-extrabold text-tpl-accent-ink tabular-nums focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-tpl-ink"
        >
          <Phone aria-hidden="true" className="size-5" />
          {copy.cta.call} {copy.phone.label}
        </a>
      }
      footer={
        <>
          <HazardStripe />
          <footer className="bg-tpl-inverse text-tpl-inverse-ink">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
              <div className="max-w-md">
                <p className="font-tpl-display text-tpl-lg font-extrabold">
                  {copy.brand.name}
                </p>
                <p className="mt-3 text-tpl-sm opacity-80">
                  {copy.footer.text}
                </p>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-70">
                  {copy.footer.contactTitle}
                </p>
                <p>
                  <a
                    href={copy.phone.href}
                    className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline"
                  >
                    {copy.phone.label}
                  </a>
                </p>
                <p>{copy.footer.email}</p>
                <p>{copy.footer.address}</p>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-70">
                  {copy.footer.hoursTitle}
                </p>
                <p className="tabular-nums">{copy.footer.hours}</p>
                <p>{copy.footer.zone}</p>
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
