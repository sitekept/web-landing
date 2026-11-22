import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template architecte-interieur : colonne latérale numérotée à partir
 * de `xl` (marque, texte, navigation, coordonnées), barre du kit en dessous,
 * petit pied de page avec les mêmes coordonnées visible sous `xl`.
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
      railFooter={
        <div className="space-y-0.5 text-tpl-xs leading-6">
          <p>{copy.common.location}</p>
          <p>{copy.common.email}</p>
          <p>{copy.common.appointment}</p>
        </div>
      }
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 py-8 text-tpl-sm text-tpl-ink-muted sm:px-6 lg:px-8 xl:hidden">
          <div className="mx-auto max-w-7xl space-y-0.5 leading-6">
            <p>{copy.common.location}</p>
            <p>{copy.common.email}</p>
            <p>{copy.common.appointment}</p>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
