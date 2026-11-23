import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { GridBackdrop, HazardStripe } from "./parts";

export function RealisationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(electricien, locale).realisations;

  return (
    <>
      <GridBackdrop className="py-12 lg:py-16">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </GridBackdrop>
      <HazardStripe />

      <TemplateSection density="compact">
        <p className="mb-4 text-tpl-sm text-tpl-ink-muted">
          {page.gallery.hint}
        </p>
        <HoverExpandGallery
          label={page.gallery.label}
          sizes="(min-width: 992px) 828px, 750px"
          width="fill"
          priority
          items={page.gallery.items}
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.beforeAfter.eyebrow}
        title={page.beforeAfter.title}
        description={page.beforeAfter.description}
      >
        <ul className="grid gap-6 lg:grid-cols-3">
          {page.beforeAfter.items.map((item) => (
            <li key={item.title}>
              <TemplateCard
                title={item.title}
                className="h-full bg-tpl-surface"
              >
                <dl className="mt-1 space-y-4">
                  <div>
                    <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                      {page.beforeAfter.beforeLabel}
                    </dt>
                    <dd className="mt-1">{item.before}</dd>
                  </div>
                  <div className="border-l-4 border-tpl-accent pl-4">
                    <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink uppercase">
                      {page.beforeAfter.afterLabel}
                    </dt>
                    <dd className="mt-1 text-tpl-ink">{item.after}</dd>
                  </div>
                </dl>
              </TemplateCard>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <ClosingBand
        locale={locale}
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
