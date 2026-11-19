import { Award, Microscope, UserRound, type LucideIcon } from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

const PRACTICE_ICONS: readonly LucideIcon[] = [Award, Microscope, UserRound];

export function EquipeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const { intro, practice } = copy.equipe;

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        titleScale="subtitle"
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {intro.members.map((member) => (
            <IconCard key={member.name} icon={UserRound} title={member.name}>
              {member.role}
            </IconCard>
          ))}
        </div>
      </TemplateSection>

      <TemplateSection
        density="compact"
        tone="raised"
        eyebrow={practice.eyebrow}
        title={practice.title}
        titleScale="subtitle"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {practice.items.map((item, index) => (
            <IconCard
              key={item.title}
              icon={PRACTICE_ICONS[index]}
              title={item.title}
              inverse
            >
              {item.text}
            </IconCard>
          ))}
        </div>

        <div className="mt-8">
          <TemplateLink href={templateHref(locale, dentiste.paths.contact)}>
            {copy.cta.visit}
          </TemplateLink>
        </div>
      </TemplateSection>
    </>
  );
}
