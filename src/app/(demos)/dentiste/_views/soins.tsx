import { ShieldCheck, Sparkles, Syringe, type LucideIcon } from "lucide-react";

import {
  TemplateCard,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

const PRINCIPLE_ICONS: readonly LucideIcon[] = [
  ShieldCheck,
  Syringe,
  Sparkles,
];

export function SoinsView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const { paths } = dentiste;
  const { intro, principles } = copy.soins;
  const href = (path: string) => templateHref(locale, path);

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
        <div className="grid gap-4 lg:grid-cols-2">
          {intro.treatments.map((item) => (
            <TemplateCard key={item.title} title={item.title}>
              {item.text}
            </TemplateCard>
          ))}
        </div>
      </TemplateSection>

      <TemplateSection
        density="compact"
        tone="raised"
        eyebrow={principles.eyebrow}
        title={principles.title}
        titleScale="subtitle"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {principles.items.map((item, index) => (
            <IconCard
              key={item.title}
              icon={PRINCIPLE_ICONS[index]}
              title={item.title}
              inverse
            >
              {item.text}
            </IconCard>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TemplateLink href={href(paths.rendezVous)}>
            {copy.cta.book}
          </TemplateLink>
          <TemplateLink
            href={href(paths.technologies)}
            variant="outline"
            className="bg-tpl-raised"
          >
            {copy.cta.seeTechnologies}
          </TemplateLink>
        </div>
      </TemplateSection>
    </>
  );
}
