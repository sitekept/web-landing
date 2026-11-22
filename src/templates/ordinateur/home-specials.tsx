import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/**
 * Services spécialisés : bande en bleu plein (accent), trois cartes
 * translucides. Les jetons d'encre sont rebindés sur l'encre de l'accent, le
 * texte reste lisible (blanc sur bleu).
 */
export function HomeSpecials({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.specials;

  return (
    <TemplateSection
      tone="bare"
      density="compact"
      align="center"
      title={page.title}
      description={page.description}
      className="bg-tpl-accent text-tpl-accent-ink [--tpl-ink-muted:var(--tpl-accent-ink)] [--tpl-ink:var(--tpl-accent-ink)]"
    >
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {page.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li
              key={item.title}
              className="rounded-tpl bg-tpl-accent-ink/6 p-8 text-center"
            >
              <Icon aria-hidden="true" className="mx-auto mb-6 size-16" />
              <h3 className="mb-4 font-tpl-display text-tpl-lg leading-tpl-display font-semibold">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </TemplateSection>
  );
}
