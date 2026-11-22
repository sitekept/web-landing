import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

/** Entreprises : trois contextes professionnels. */
export function EntreprisesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).entreprises;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-4 lg:grid-cols-3">
        {page.items.map((item) => (
          <li key={item}>
            <TemplatePanel className="h-full shadow-tpl-sm">
              <p className="text-tpl-sm text-tpl-ink-muted">{item}</p>
            </TemplatePanel>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
