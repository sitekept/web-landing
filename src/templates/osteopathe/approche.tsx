import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingCta, IconCard } from "./parts";

export function ApprocheView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).approche;

  return (
    <>
      <TemplateSection density="compact">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.steps.eyebrow}
        title={page.steps.title}
      >
        <ol className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {page.steps.items.map((item, index) => (
            <li key={item.title} className="border-t border-tpl-ink/60 pt-6">
              <span
                aria-hidden="true"
                className="font-tpl-display text-tpl-2xl leading-none text-tpl-accent"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display">
                {item.title}
              </h3>
              <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </TemplateSection>

      <TemplateSection
        eyebrow={page.cabinet.eyebrow}
        title={page.cabinet.title}
        description={page.cabinet.description}
      >
        <HoverExpandGallery
          label={page.cabinet.label}
          sizes="(min-width: 1024px) 520px, 100vw"
          items={page.cabinet.items}
          height="32rem"
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.training.eyebrow}
        title={page.training.title}
        description={page.training.description}
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {page.training.items.map((item) => (
            <li key={item.title}>
              <IconCard icon={item.icon} title={item.title}>
                {item.text}
              </IconCard>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <ClosingCta locale={locale} />
    </>
  );
}
