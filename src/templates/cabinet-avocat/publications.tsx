import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingCta, LABEL } from "./parts";

/**
 * Page « publications » : titre `h1`, puis cinq notes (rubrique et durée de
 * lecture à gauche sur 4 colonnes, titre et résumé à droite sur 8), enfin
 * l'appel au rendez-vous.
 */
export function PublicationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).publications;

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        className="border-b border-tpl-line"
      >
        <ul className="divide-y divide-tpl-line border-y border-tpl-line">
          {page.items.map((item) => (
            <li key={item.title}>
              <article className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-12">
                <p className={`${LABEL} lg:col-span-4`}>
                  {item.tag}
                  <span className="block pt-1 font-normal tracking-normal text-tpl-ink-muted normal-case">
                    {item.time} {page.readingLabel}
                  </span>
                </p>
                <div className="lg:col-span-8">
                  <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <ClosingCta locale={locale} />
    </>
  );
}
