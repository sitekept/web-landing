import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { Plate } from "./parts";

/** Hero : un titre fort, puis la grande image et une colonne de texte précise. */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(photographe, locale);
  const { hero } = copy.home;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection
      as="h1"
      titleScale="display"
      density="compact"
      eyebrow={hero.eyebrow}
      title={hero.title}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <Plate
          className="lg:col-span-8"
          src={hero.image.src}
          alt={hero.image.alt}
          caption={hero.caption}
          ratio="3/2"
          sizes="(min-width: 1024px) 750px, calc(88vw - 41px)"
          priority
        />
        <div className="flex flex-col gap-8 lg:col-span-4">
          <p className="max-w-sm text-tpl-base text-tpl-ink-muted">
            {hero.description}
          </p>
          <ul
            role="list"
            className="border-t border-tpl-line text-tpl-sm [&>li]:border-b [&>li]:border-tpl-line [&>li]:py-3"
          >
            {hero.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <TemplateLink
              href={href(photographe.paths.contact)}
              shape="square"
              icon={false}
            >
              {copy.cta.request}
            </TemplateLink>
            <TemplateLink
              href={href(photographe.paths.portfolio)}
              variant="outline"
              shape="square"
              icon={false}
            >
              {copy.cta.seePortfolio}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
