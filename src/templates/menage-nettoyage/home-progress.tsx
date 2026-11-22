import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

/** Accueil : quatre étapes numérotées, la deuxième et la quatrième sur fond sombre. */
export function HomeProgress({ locale }: { locale: TemplateLocale }) {
  const progress = getTemplateCopy(menageNettoyage, locale).home.progress;

  return (
    <TemplateSection
      density="compact"
      eyebrow={progress.eyebrow}
      title={progress.title}
      titleScale="subtitle"
    >
      <ol className="grid gap-4 xl:grid-cols-4">
        {progress.items.map((item, index) => (
          <li key={item}>
            <TemplatePanel
              tone={index === 1 || index === 3 ? "inverse" : "raised"}
              className="h-full"
            >
              <p className="text-tpl-sm font-semibold">{item}</p>
            </TemplatePanel>
          </li>
        ))}
      </ol>
    </TemplateSection>
  );
}
