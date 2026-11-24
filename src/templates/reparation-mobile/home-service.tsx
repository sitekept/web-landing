import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

import { IconChip } from "./icons";
import { HEADING_CLASS, PillEyebrow } from "./parts";

type Props = { locale: TemplateLocale };

export function HomeService({ locale }: Props) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.home.homeService;

  return (
    <TemplateSection tone="inverse" className={HEADING_CLASS}>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <TemplateHeading
            eyebrow={<PillEyebrow>{page.eyebrow}</PillEyebrow>}
            title={page.title}
            description={page.description}
            scale="title"
          />
          <ul className="mt-8 grid gap-5">
            {page.points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <IconChip icon={point.icon} />
                <div>
                  <p className="text-tpl-base font-semibold">{point.title}</p>
                  <p className="text-tpl-sm text-tpl-ink-muted">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={templateHref(locale, reparationMobile.paths.contact)}
              shape="pill"
              variant="inverse"
            >
              {copy.cta.bookHome}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, reparationMobile.paths.faq)}
              shape="pill"
              variant="outline"
              icon={false}
              className="border-tpl-ink/60"
            >
              {copy.cta.readFaq}
            </TemplateLink>
          </div>
        </div>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) 640px, calc(95.5vw - 18px)"
          className="shadow-tpl-lg"
        />
      </div>
    </TemplateSection>
  );
}

export function Brands({ locale }: Props) {
  const page = getTemplateCopy(reparationMobile, locale).home.brands;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
      description={page.description}
      className={HEADING_CLASS}
    >
      <ul aria-label={page.label} className="flex flex-wrap gap-3">
        {page.items.map((brand) => (
          <li
            key={brand}
            className="rounded-tpl-pill border border-tpl-line bg-tpl-surface px-5 py-2.5 text-tpl-sm font-semibold"
          >
            {brand}
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
