import {
  TemplateLink,
  TemplateSection,
  TemplateHeading,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/**
 * Offre : les quatre métiers en galerie à panneaux (élément 21st.dev
 * `hover-expand-gallery`, accordéon sous 1024 px), suivis de la méthode en
 * quatre étapes numérotées.
 */
export function ServicesGallery({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(garageAuto, locale);
  const page = copy.home.services;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <HoverExpandGallery
        label={page.label}
        width="fill"
        height="32rem"
        railWidth={72}
        sizes="(min-width: 1024px) 1000px, 100vw"
        items={page.items.map((item) => ({
          title: item.title,
          meta: item.meta,
          image: item.image,
        }))}
      />
      <div className="mt-10">
        <TemplateLink
          href={templateHref(locale, garageAuto.paths.prestations)}
          variant="outline"
          className="border-tpl-ink"
        >
          {copy.cta.services}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}

export function MethodSteps({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).home.method;

  return (
    <TemplateSection density="regular">
      <TemplateHeading
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {page.items.map((item, index) => {
          const Icon = ICONS[item.icon];

          return (
            <li key={item.title} className="border-t-4 border-tpl-ink pt-5">
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight) text-tpl-accent tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" className="size-6" />
              </div>
              <h3 className="mt-4 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          );
        })}
      </ol>
    </TemplateSection>
  );
}
