import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template cabinet-avocat : bandeau de réponse et d'horaires non
 * collant, en-tête en barre, barre d'actions mobile (appeler, rendez-vous) et
 * pied de page sobre. Angles droits, filets fins. Tous les textes viennent de
 * la copie.
 */
export function CabinetAvocatShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { paths } = cabinetAvocat;
  const { contact } = copy;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(cabinetAvocat, "en")}
      theme={cabinetAvocat.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.expertises, label: copy.nav.expertises },
        { href: paths.casTypes, label: copy.nav.casTypes },
        { href: paths.methode, label: copy.nav.methode },
        { href: paths.publications, label: copy.nav.publications },
        { href: paths.consultation, label: copy.nav.consultation },
      ]}
      cta={{
        href: paths.consultation,
        label: copy.cta.consultation,
        icon: false,
      }}
      topBarTone="tint"
      topBar={
        <>
          <span className="font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
            {copy.topBar.left}
          </span>
          <span className="font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
            {copy.topBar.right}
          </span>
        </>
      }
      mobileActionsLabel={copy.a11y.quickActions}
      mobileActions={
        <>
          <TemplateLink
            href={contact.phone.href}
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1 tabular-nums"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.consultation)}
            icon={false}
            className="flex-1"
          >
            {copy.cta.appointmentShort}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 text-tpl-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-12 lg:gap-12">
            <div className="max-w-2xl lg:col-span-7">
              <p className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-pretty text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="space-y-1 text-tpl-sm text-tpl-ink-muted lg:col-span-5 lg:text-right">
              <p>{contact.address}</p>
              <p>{contact.email}</p>
              <p>{contact.hours}</p>
              <p>
                <a
                  href={contact.phone.href}
                  className="inline-flex min-h-11 items-center tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {contact.phone.label}
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
