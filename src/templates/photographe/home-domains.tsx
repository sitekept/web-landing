import Link from "next/link";

import {
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { IndexLabel } from "./parts";

/** Ancres des séries du portfolio, dans l'ordre de la copie. */
export const SERIES_ANCHORS = ["mariage", "portrait", "entreprise"] as const;

/**
 * Offre : les trois séries. Une galerie à panneaux (utilisée une seule fois
 * dans ce template), puis trois colonnes de texte qui renvoient au portfolio.
 */
export function HomeDomains({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(photographe, locale);
  const { domains } = copy.home;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={domains.eyebrow}
      title={domains.title}
      titleScale="subtitle"
      description={domains.description}
    >
      <HoverExpandGallery
        label={domains.label}
        sizes="(min-width: 992px) 828px, 750px"
        height="34rem"
        width="fill"
        railWidth={72}
        items={domains.items.map((item) => ({
          title: item.title,
          meta: item.meta,
          image: item.image,
        }))}
      />
      <ol
        role="list"
        className="mt-12 grid gap-10 border-t border-tpl-line pt-8 md:grid-cols-3 md:gap-8"
      >
        {domains.items.map((item, index) => (
          <li key={item.title} className="flex flex-col">
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
              <IndexLabel index={index + 1}>{item.title}</IndexLabel>
            </p>
            <p className="mt-4 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            <p className="mt-4 text-tpl-sm font-medium">{item.from}</p>
            <Link
              href={`${templateHref(locale, photographe.paths.portfolio)}#${SERIES_ANCHORS[index]}`}
              className="mt-4 w-fit text-tpl-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
            >
              {copy.cta.seeSeries}
              <span className="sr-only">
                {copy.cta.seeSeriesSeparator}
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </TemplateSection>
  );
}
