import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBox } from "./parts";

/** Preuve : les quatre situations (profils) que le cabinet accompagne. */
export function MissionsProfiles({ locale }: { locale: TemplateLocale }) {
  const profiles = getTemplateCopy(expertComptable, locale).missionsPage
    .profiles;

  return (
    <TemplateSection
      eyebrow={profiles.eyebrow}
      title={profiles.title}
      description={profiles.description}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.items.map((item) => (
          <TemplateCard
            key={item.title}
            title={item.title}
            icon={<IconBox icon={item.icon} />}
            elevation="flat"
          >
            {item.text}
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}
