import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

/** « Pour qui » : quatre cartes à icône. */
export function HomeForWho({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).home.forWho;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {page.items.map((item) => (
          <li key={item.title}>
            <IconCard icon={item.icon} title={item.title}>
              {item.text}
            </IconCard>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
