import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { BrandMark } from "./parts";

/**
 * Shell du template plombier-chauffagiste : marque (goutte + flamme), navigation, CTA
 * téléphone, barre d'actions mobile par le slot du shell (appel et devis) et
 * pied de page teal. Tous les textes viennent de la copie.
 */
export function PlombierChauffagisteShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(plombierChauffagiste, locale);
  const { paths } = plombierChauffagiste;
  const footer = copy.footer;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(plombierChauffagiste, "en")}
      theme={plombierChauffagiste.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: <BrandMark />,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.depannages, label: copy.nav.depannages },
        { href: paths.tarifs, label: copy.nav.tarifs },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      mobileActionsLabel={copy.mobile.label}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="min-h-12 flex-1 tabular-nums"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.contact)}
            variant="outline"
            icon={false}
            className="min-h-12 flex-1 bg-tpl-raised"
          >
            {copy.cta.quote}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="bg-tpl-inverse font-tpl-text text-tpl-inverse-ink">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
              <div className="max-w-md">
                <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                  {copy.brand.name}
                </p>
                <p className="mt-3 text-tpl-sm opacity-85">{footer.text}</p>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-75">
                  {footer.contactTitle}
                </p>
                <p>
                  <a
                    href={copy.phone.href}
                    className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline"
                  >
                    {copy.phone.label}
                  </a>
                </p>
                <p>{footer.email}</p>
                <p>{footer.address}</p>
                <p>{footer.qualification}</p>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-75">
                  {footer.hoursTitle}
                </p>
                <p className="tabular-nums">{footer.hours}</p>
                <p>{footer.onCall}</p>
                <p>{footer.zone}</p>
              </div>
            </div>
          </div>
          <p className="border-t border-tpl-inverse-ink/20 px-4 py-4 text-center text-tpl-xs opacity-80">
            {footer.note}
          </p>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
