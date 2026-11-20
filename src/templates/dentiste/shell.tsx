import { CalendarDays, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplatePanel,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template dentiste : marque, navigation, CTA téléphone, rail de
 * réservation fixe et pied de page. Tous les textes viennent de la copie.
 *
 * Le sélecteur FR / EN est déduit de la définition : il s'affiche dès qu'elle
 * a une copie anglaise (`en` dans `copy`), donc jamais de lien vers une 404.
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
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.soins, label: copy.nav.soins },
        { href: paths.technologies, label: copy.nav.technologies },
        { href: paths.equipe, label: copy.nav.equipe },
        { href: paths.premiereVisite, label: copy.nav.premiereVisite },
        { href: paths.rendezVous, label: copy.nav.rendezVous },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      footer={
        <>
          <aside className="pointer-events-none fixed top-28 right-5 z-30 hidden w-64 xl:block">
            <TemplatePanel className="pointer-events-auto p-4 shadow-tpl-lg">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {copy.rail.eyebrow}
              </p>
              <p className="mt-3 text-tpl-lg leading-tpl-display font-semibold">
                {copy.rail.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.rail.text}
              </p>
              <TemplateLink
                href={templateHref(locale, paths.rendezVous)}
                icon={<CalendarDays aria-hidden="true" className="size-4" />}
                className="mt-4 w-full"
              >
                {copy.cta.book}
              </TemplateLink>
            </TemplatePanel>
          </aside>

          <footer className="border-t border-tpl-line bg-tpl-raised">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
              <div className="max-w-2xl">
                <p className="text-tpl-lg font-semibold">{copy.footer.title}</p>
                <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                  {copy.footer.text}
                </p>
              </div>
              <div className="space-y-2 text-tpl-sm text-tpl-ink-muted sm:text-right">
                <p>{copy.footer.address}</p>
                <p>{copy.footer.hours}</p>
                <p>{copy.footer.email}</p>
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
