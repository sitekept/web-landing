import { CalendarDays, KeyRound, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template agent immobilier : marque, navigation, CTA téléphone, barre
 * d'accès rapide sur mobile (slot `mobileActions` du kit) et pied de page. Tous
 * les textes viennent de la copie. Le sélecteur FR / EN est déduit de la
 * définition.
 */

const FOOTER_LABEL =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase";

const LINK_FOCUS =
  "underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function AgentImmobilierShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const { paths } = agentImmobilier;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(agentImmobilier, "en")}
      theme={agentImmobilier.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-none border-b-2 border-tpl-accent bg-tpl-inverse text-tpl-inverse-ink"
          >
            <KeyRound className="size-5" />
          </div>
        ),
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.biens, label: copy.nav.biens },
        { href: paths.estimation, label: copy.nav.estimation },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
            <div className="max-w-md sm:col-span-2 lg:col-span-1">
              <p className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
              <p className="mt-5 border-l-2 border-tpl-accent pl-4 text-tpl-xs text-tpl-ink-muted">
                {copy.footer.proCard}
              </p>
            </div>
            <div>
              <p className={FOOTER_LABEL}>{copy.footer.contactLabel}</p>
              <ul className="mt-4 space-y-2 text-tpl-sm">
                <li>
                  <a href={copy.phone.href} className={LINK_FOCUS}>
                    {copy.phone.label}
                  </a>
                </li>
                <li>{copy.common.email}</li>
                <li className="text-tpl-ink-muted">{copy.common.address}</li>
              </ul>
            </div>
            <div>
              <p className={FOOTER_LABEL}>{copy.common.hoursLabel}</p>
              <dl className="mt-4 space-y-2 text-tpl-sm">
                {copy.common.hours.map((row) => (
                  <div key={row.day} className="flex flex-col">
                    <dt className="text-tpl-ink-muted">{row.day}</dt>
                    <dd>{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="border-t border-tpl-line px-4 py-4 text-center text-tpl-xs text-tpl-ink-muted">
            {copy.footer.demoNotice}
          </p>
        </footer>
      }
      mobileActionsLabel={copy.footer.barLabel}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.callShort}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.estimation)}
            variant="outline"
            icon={<CalendarDays aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.estimateShort}
          </TemplateLink>
        </>
      }
    >
      {children}
    </TemplateShell>
  );
}
