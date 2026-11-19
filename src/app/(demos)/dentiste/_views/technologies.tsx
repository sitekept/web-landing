import { Cpu, Shield, Workflow, type LucideIcon } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

const ICONS: readonly LucideIcon[] = [Cpu, Workflow, Shield];

export function TechnologiesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).technologies;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      as="h1"
      titleScale="subtitle"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {page.items.map((item, index) => (
          <IconCard
            key={item.title}
            icon={ICONS[index]}
            title={item.title}
            className="bg-tpl-surface"
          >
            {item.text}
          </IconCard>
        ))}
      </div>
    </TemplateSection>
  );
}
