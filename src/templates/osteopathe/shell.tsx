import { CalendarDays, Leaf, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template ostéopathe : marque, navigation, CTA téléphone, barre
 * d'accès rapide sur mobile et pied de page. Tous les textes viennent de la
 * copie. Le sélecteur FR / EN est déduit de la définition.
 *
 * Instrument Serif n'existe qu'en graisse normale : la graisse des titres est
 * le token `fontDisplayWeight: 400` de la définition, pas un sélecteur ici.
 */

export function OsteopatheShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(osteopathe, locale);
  const { paths } = osteopathe;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(osteopathe, "en")}
      theme={osteopathe.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl-pill bg-tpl-inverse text-tpl-inverse-ink"
          >
            <Leaf className="size-5" />
          </div>
        ),
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.consultations, label: copy.nav.consultations },
        { href: paths.approche, label: copy.nav.approche },
        { href: paths.rendezVous, label: copy.nav.rendezVous },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-xl leading-tpl-display">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
              <p className="mt-5 border-l-2 border-tpl-accent pl-4 text-tpl-xs text-tpl-ink-muted">
                {copy.common.medicalNotice}
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
                    className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li>{copy.common.email}</li>
                <li className="text-tpl-ink-muted">{copy.common.address}</li>
              </ul>
            </div>
          </div>
        </footer>
      }
      mobileActionsLabel={copy.footer.barLabel}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            shape="pill"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.callShort}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.rendezVous)}
            variant="outline"
            shape="pill"
            icon={<CalendarDays aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.bookShort}
          </TemplateLink>
        </>
      }
    >
      {children}
    </TemplateShell>
  );
}
