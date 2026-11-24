import { CalendarDays, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template dentiste : marque, navigation, CTA téléphone, bandeau
 * d'horaires, barre d'actions mobile (appeler, rendez-vous) et pied de page.
 * Tous les textes viennent de la copie.
 *
 * Le rendez-vous reste à portée sans rien poser par-dessus le contenu : lien
 * « Rendez-vous » de la navigation, bouton de chaque page, et barre d'actions
 * collée en bas sous `xl`. Le sélecteur FR / EN est déduit de la définition :
 * il s'affiche dès qu'elle a une copie anglaise, donc jamais de lien vers une
 * 404.
 */
export function DentisteShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(dentiste, locale);
  const { paths } = dentiste;
  const nav = [
    { href: paths.home, label: copy.nav.home },
    { href: paths.soins, label: copy.nav.soins },
    { href: paths.technologies, label: copy.nav.technologies },
    { href: paths.equipe, label: copy.nav.equipe },
    { href: paths.premiereVisite, label: copy.nav.premiereVisite },
    { href: paths.rendezVous, label: copy.nav.rendezVous },
    { href: paths.contact, label: copy.nav.contact },
  ];
  const eyebrow =
    "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(dentiste, "en")}
      theme={dentiste.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl bg-tpl-inverse text-tpl-sm font-semibold text-tpl-inverse-ink"
          >
            {copy.brand.initials}
          </div>
        ),
      }}
      nav={nav}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      topBar={
        <>
          <span className="tabular-nums">{copy.topBar.hours}</span>
          <span>{copy.topBar.promise}</span>
        </>
      }
      topBarTone="tint"
      mobileActionsLabel={copy.a11y.quickActions}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.rendezVous)}
            icon={<CalendarDays aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.bookShort}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="space-y-2 text-tpl-sm text-tpl-ink-muted">
              <p className={eyebrow}>{copy.footer.contactTitle}</p>
              <p>
                <a
                  href={copy.phone.href}
                  className="inline-flex min-h-11 items-center font-semibold text-tpl-ink tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {copy.phone.label}
                </a>
              </p>
              <p>{copy.info.email}</p>
              <p>{copy.info.address}</p>
            </div>
            <div className="text-tpl-sm text-tpl-ink-muted">
              <p className={eyebrow}>{copy.footer.hoursTitle}</p>
              <dl className="mt-2 divide-y divide-tpl-line">
                {copy.info.hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between gap-4 py-2"
                  >
                    <dt>{row.day}</dt>
                    <dd className="font-semibold text-tpl-ink tabular-nums">
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <nav aria-label={copy.footer.siteTitle} className="text-tpl-sm">
              <p className={eyebrow}>{copy.footer.siteTitle}</p>
              <ul className="mt-2 sm:columns-2 lg:columns-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <TemplateLink
                      href={templateHref(locale, item.href)}
                      variant="ghost"
                      icon={false}
                      className="-ml-5 text-tpl-ink-muted"
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
