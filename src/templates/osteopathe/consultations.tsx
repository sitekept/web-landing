import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

import { Bring, Limits, Pricing } from "./consultations-details";
import { ClosingCta, IconBadge } from "./parts";

export function ConsultationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).consultations;

  return (
    <>
      <TemplateSection density="compact">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.hero.eyebrow}
            title={page.hero.title}
            description={page.hero.description}
          />
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="3/2"
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
          />
        </div>
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.reasons.eyebrow}
        title={page.reasons.title}
        description={page.reasons.description}
      >
        <ul className="grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {page.reasons.items.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 border-t border-tpl-line py-7"
            >
              <IconBadge icon={item.icon} />
              <div>
                <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection
        eyebrow={page.audiences.eyebrow}
        title={page.audiences.title}
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {page.audiences.items.map((item) => (
            <li key={item.title}>
              <TemplateCard
                title={item.title}
                elevation="flat"
                className="h-full"
              >
                {item.text}
              </TemplateCard>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <Pricing locale={locale} />
      <Bring locale={locale} />
      <Limits locale={locale} />
      <ClosingCta locale={locale} />
    </>
  );
}
