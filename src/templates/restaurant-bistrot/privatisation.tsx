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

/** Privatisation : trois formules à prix indicatifs (7/12) et une photo (5/12), puis le déroulé sur fond sombre. */
export function PrivatisationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { privatisation } = copy;
  const { formats } = privatisation;

  return (
    <>
      <TemplateSection
        as="h1"
        eyebrow={privatisation.eyebrow}
        title={privatisation.title}
        description={privatisation.description}
        className={FIRST_SECTION_TOP}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <ul className="lg:col-span-7">
            {formats.items.map((item) => (
              <li
                key={item.title}
                className="grid gap-4 border-t border-tpl-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-10"
              >
                <div>
                  <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
                <dl className="grid content-start gap-3 text-tpl-sm sm:text-right">
                  <div>
                    <dt className="text-tpl-ink-muted">
                      {formats.capacityLabel}
                    </dt>
                    <dd className="font-semibold tabular-nums">
                      {item.capacity}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-tpl-ink-muted">{formats.priceLabel}</dt>
                    <dd className="font-semibold tabular-nums">{item.price}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <TemplateMedia
              src={privatisation.image.src}
              alt={privatisation.image.alt}
              ratio="4/5"
              sizes="(min-width: 1280px) 469px, (min-width: 1024px) 36vw, (min-width: 520px) 448px, 92vw"
            />
          </div>
        </div>
      </TemplateSection>

      <TemplateSection tone="inverse">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <TemplateHeading
            title={privatisation.notes.title}
            className="lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <ol className="list-decimal space-y-4 pl-6 text-tpl-lg marker:text-tpl-eyebrow">
              {privatisation.notes.items.map((item) => (
                <li key={item} className="pl-2 text-pretty">
                  {item}
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <TemplateLink
                href={templateHref(locale, restaurantBistrot.paths.contact)}
                variant="inverse"
              >
                {copy.cta.contactRestaurant}
              </TemplateLink>
            </div>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
