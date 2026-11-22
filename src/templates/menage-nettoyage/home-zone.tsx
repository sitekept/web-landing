import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

/** Accueil : zone couverte, quatre pastilles sur fond sombre. */
export function HomeZone({ locale }: { locale: TemplateLocale }) {
  const zone = getTemplateCopy(menageNettoyage, locale).home.zone;

  return (
    <TemplateSection
      density="compact"
      tone="inverse"
      eyebrow={zone.eyebrow}
      title={zone.title}
      description={zone.description}
      titleScale="subtitle"
    >
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {zone.items.map((item) => (
          <li
            key={item}
            className="rounded-tpl border border-tpl-line bg-tpl-ink/8 px-5 py-5 text-tpl-sm text-tpl-ink/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
