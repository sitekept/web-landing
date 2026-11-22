import { ArrowRight } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Vitrine du jour : quatre produits avec prix, fond blanc. */
export function HomeShowcase({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(boulangerie, locale);
  const page = copy.showcase;

  return (
    <TemplateSection id={ANCHORS.showcase} tone="raised" density="compact">
      <div className="mb-10 flex items-end justify-between gap-6">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          scale="title"
          className="max-w-2xl"
        />
        <TemplateLink
          href={templateHref(
            locale,
            `${boulangerie.paths.home}#${ANCHORS.contact}`
          )}
          variant="ghost"
          size="sm"
          icon={<ArrowRight aria-hidden="true" className="size-4" />}
          className="hidden font-semibold text-tpl-accent lg:inline-flex"
        >
          {page.link}
        </TemplateLink>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {page.products.map((item) => (
          <li key={item.name}>
            <TemplateCard
              tone="surface"
              elevation="raised"
              className="h-full overflow-hidden p-0"
            >
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio="fill"
                rounded="none"
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 53vw, 100vw"
                className="h-56"
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-ink">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-tpl-pill bg-tpl-accent/10 px-3 py-1 text-tpl-sm font-bold whitespace-nowrap text-tpl-accent">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                  {item.description}
                </p>
              </div>
            </TemplateCard>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
