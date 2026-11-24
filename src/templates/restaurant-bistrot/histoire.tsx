import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP } from "./parts";

/** Histoire : récit et photo, trois convictions sur fond sombre, invitation à venir. */
export function HistoireView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { histoire } = copy;
  const href = (path: string) => templateHref(locale, path);
  const [lead, ...rest] = histoire.paragraphs;

  return (
    <>
      <TemplateSection
        as="h1"
        eyebrow={histoire.eyebrow}
        title={histoire.title}
        className={FIRST_SECTION_TOP}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-7">
            <p className="max-w-tpl-measure text-tpl-lg text-pretty">{lead}</p>
            {rest.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <TemplateMedia
              src={histoire.image.src}
              alt={histoire.image.alt}
              ratio="3/2"
              sizes="(min-width: 1280px) 469px, (min-width: 1024px) 36vw, 92vw"
            />
          </div>
        </div>
      </TemplateSection>

      <TemplateSection tone="inverse" title={histoire.values.title}>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {histoire.values.items.map((item) => (
            <li key={item.title} className="border-t border-tpl-ink/40 pt-6">
              <h3 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-4 text-tpl-base text-tpl-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </TemplateSection>

      <TemplateSection tone="surface" density="compact">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <TemplateHeading
            scale="subtitle"
            title={histoire.closing.title}
            description={histoire.closing.text}
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <TemplateLink href={href(restaurantBistrot.paths.reservation)}>
              {copy.cta.bookTable}
            </TemplateLink>
            <TemplateLink
              href={href(restaurantBistrot.paths.menu)}
              variant="outline"
              icon={false}
            >
              {copy.cta.seeMenu}
            </TemplateLink>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
