import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template architecte-interieur : colonne latérale numérotée à partir
 * de `xl` (marque, navigation, bouton d'étude, coordonnées), barre du kit en
 * dessous avec deux actions rapides, petit pied de page avec les mêmes
 * coordonnées visible sous `xl`.
 */
export function ArchitecteInterieurShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { paths } = architecteInterieur;
  const { common } = copy;

  const contact = (
    <>
      <p>{common.address}</p>
      <p>
        <a
          href={common.phone.href}
          className="tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
        >
          {common.phone.label}
        </a>
      </p>
      <p>{common.email}</p>
      <p>{common.hours}</p>
    </>
  );

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(architecteInterieur, "en")}
      theme={architecteInterieur.theme}
      header="rail"
      railNumbers
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.projets, label: copy.nav.projets },
        { href: paths.methode, label: copy.nav.methode },
        { href: paths.studio, label: copy.nav.studio },
        { href: paths.journal, label: copy.nav.journal },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{ href: paths.contact, label: copy.cta.brief, icon: false }}
      railFooter={
        <div className="space-y-0.5 text-tpl-xs leading-6">{contact}</div>
      }
      mobileActionsLabel={copy.a11y.quickActions}
      mobileActions={
        <>
          <TemplateLink
            href={common.phone.href}
            variant="outline"
            shape="square"
            icon={false}
            className="flex-1 border-tpl-ink px-2 tabular-nums"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.contact)}
            shape="square"
            icon={false}
            className="flex-1 px-2"
          >
            {copy.cta.brief}
          </TemplateLink>
        </>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 py-8 text-tpl-sm text-tpl-ink-muted sm:px-6 lg:px-8 xl:hidden">
          <div className="mx-auto max-w-7xl space-y-0.5 leading-6">
            {contact}
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
