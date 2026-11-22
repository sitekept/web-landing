import { Phone, Sigma } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template expert-comptable : marque à filet, navigation, CTA devis,
 * barre d'actions mobile (appel, devis) par le slot du shell, pied de page
 * à colonnes. Tous les textes viennent de la copie.
 */
export function ExpertComptableShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(expertComptable, locale);
  const { paths } = expertComptable;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(expertComptable, "en")}
      theme={expertComptable.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-tpl bg-tpl-accent text-tpl-accent-ink"
          >
            <Sigma className="size-5" />
          </div>
        ),
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.missions, label: copy.nav.missions },
        { href: paths.honoraires, label: copy.nav.honoraires },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{ href: paths.contact, label: copy.cta.quote }}
      mobileActionsLabel={copy.mobile.label}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            className="flex-1"
            icon={<Phone aria-hidden="true" className="size-4" />}
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.contact)}
            className="flex-1"
            icon={false}
          >
            {copy.cta.quote}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="border-t-4 border-double border-tpl-ink bg-tpl-inverse px-4 text-tpl-inverse-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 text-tpl-sm opacity-80">{copy.footer.text}</p>
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-70">
                {copy.footer.contactTitle}
              </p>
              <p>
                <a
                  href={copy.phone.href}
                  className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-inverse-ink"
                >
                  {copy.phone.label}
                </a>
              </p>
              <p>{copy.common.email}</p>
              <p>{copy.common.address}</p>
            </div>
            <div className="space-y-2 text-tpl-sm">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-70">
                {copy.footer.hoursTitle}
              </p>
              <ul className="max-w-xs space-y-1 tabular-nums">
                {copy.common.hours.map((row) => (
                  <li key={row.day} className="flex justify-between gap-4">
                    <span>{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-3 text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-70">
                {copy.footer.legalTitle}
              </p>
              <p>{copy.common.registration}</p>
              <p className="opacity-80">{copy.footer.demo}</p>
            </div>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
