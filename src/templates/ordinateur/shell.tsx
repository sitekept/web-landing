import { CalendarCheck, Cpu, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/**
 * Shell du template ordinateur : en-tête en barre (puce graphite), navigation
 * par ancres, CTA « Déposer ma machine », barre d’actions mobile (appeler,
 * déposer) et pied de page graphite. Tous les textes viennent de la copie. Le
 * sélecteur FR / EN est déduit de la définition.
 */

const FOOTER_LINK =
  "inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function OrdinateurShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(ordinateur, locale);
  const home = ordinateur.paths.home;
  const anchor = (id: string) => `${home}#${id}`;
  const nav = [
    { href: anchor(ANCHORS.repairs), label: copy.nav.repairs },
    { href: anchor(ANCHORS.process), label: copy.nav.process },
    { href: anchor(ANCHORS.business), label: copy.nav.business },
    { href: anchor(ANCHORS.workshop), label: copy.nav.workshop },
    { href: anchor(ANCHORS.contact), label: copy.nav.contact },
  ];

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(ordinateur, "en")}
      theme={ordinateur.theme}
      brand={{
        href: home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-tpl bg-tpl-inverse text-tpl-eyebrow"
          >
            <Cpu className="size-5" />
          </div>
        ),
      }}
      nav={nav}
      cta={{
        href: anchor(ANCHORS.contact),
        label: copy.cta.deposit,
        icon: false,
      }}
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
            href={templateHref(locale, anchor(ANCHORS.contact))}
            icon={<CalendarCheck aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.deposit}
          </TemplateLink>
        </>
      }
      footer={
        <footer
          data-tone="inverse"
          className="bg-tpl-inverse px-4 text-tpl-inverse-ink sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-12">
            <div className="md:col-span-12 lg:col-span-5">
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-inverse-ink/80">
                {copy.footer.text}
              </p>
              <p className="mt-6 text-tpl-sm text-tpl-inverse-ink/80">
                {copy.footer.copyright}
              </p>
            </div>
            <nav
              aria-label={copy.footer.linksTitle}
              className="md:col-span-6 lg:col-span-3"
            >
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-inverse-ink/80 uppercase">
                {copy.footer.linksTitle}
              </p>
              <ul className="mt-2 text-tpl-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={templateHref(locale, item.href)}
                      className={`${FOOTER_LINK} font-semibold`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="text-tpl-sm md:col-span-6 lg:col-span-4">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-inverse-ink/80 uppercase">
                {copy.footer.contactTitle}
              </p>
              <p className="mt-2">
                <a
                  href={copy.phone.href}
                  className={`${FOOTER_LINK} font-semibold tabular-nums`}
                >
                  {copy.phone.label}
                </a>
              </p>
              <p>
                <a
                  href={copy.email.href}
                  className={`${FOOTER_LINK} break-words`}
                >
                  {copy.email.label}
                </a>
              </p>
              <p className="mt-2 text-tpl-inverse-ink/80">
                {copy.contact.address.lines[0]}
                <br />
                {copy.contact.address.lines[1]}
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
