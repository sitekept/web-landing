import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { fleuriste } from "@/content/templates/fleuriste";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, EYEBROW, FillPhoto } from "./parts";

/** Projets : trois bandes éditoriales, photo et texte en alternance, fond blanc. */
export function HomeProjects({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(fleuriste, locale);
  const page = copy.projects;
  const contact = templateHref(
    locale,
    `${fleuriste.paths.home}#${ANCHORS.contact}`
  );

  return (
    <TemplateSection
      id={ANCHORS.projects}
      tone="raised"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
    >
      <ul className="space-y-10">
        {page.items.map((story, index) => (
          <li key={story.title}>
            <ScrollReveal
              delay={index * 80}
              distance={18}
              className={`grid gap-6 overflow-hidden rounded-[2.25rem] border border-tpl-line bg-tpl-surface p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-7 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FillPhoto
                src={story.image.src}
                alt={story.image.alt}
                sizes="(min-width: 1024px) 512px, (min-width: 896px) 750px, 640px"
                className="min-h-[380px]"
              />
              <div className="flex flex-col justify-center p-2 sm:p-6">
                <p className={EYEBROW}>{story.eyebrow}</p>
                <h3 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {story.title}
                </h3>
                <p className="mt-5 max-w-xl text-tpl-base leading-8 text-tpl-ink-muted">
                  {story.description}
                </p>
                <div className="mt-6">
                  <TemplateLink
                    href={contact}
                    variant="ghost"
                    icon={<ArrowRight aria-hidden="true" className="size-4" />}
                    className="-ml-5 font-semibold"
                  >
                    {page.link}
                  </TemplateLink>
                </div>
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
