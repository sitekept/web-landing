import {
  TemplateHeading,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { TextLink } from "./parts";

/** Avis : deux témoignages en colonnes à filet d'encre. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const { proof } = getTemplateCopy(architecteInterieur, locale).home;

  return (
    <TemplateSection density="compact" tone="tint" title={proof.title}>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-10 md:gap-12">
        {proof.items.map((item) => (
          <figure key={item.name} className="border-t-2 border-tpl-ink pt-6">
            <blockquote className="font-tpl-display text-tpl-lg leading-snug font-(weight:--tpl-display-weight) text-pretty">
              {item.quote}
            </blockquote>
            <figcaption className="mt-5 text-tpl-sm">
              <span className="font-semibold">{item.name}</span>
              <span className="block text-tpl-ink-muted">{item.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </TemplateSection>
  );
}

/** Journal : trois notes, titre et durée de lecture, sous un titre à gauche. */
export function HomeJournal({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { journal } = copy.home;
  const { paths } = architecteInterieur;

  return (
    <TemplateSection density="compact" tone="surface">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div>
          <TemplateHeading scale="subtitle" title={journal.title} />
          <div className="mt-4">
            <TextLink href={templateHref(locale, paths.journal)}>
              {journal.more}
            </TextLink>
          </div>
        </div>
        <ul className="border-t border-tpl-ink">
          {copy.journal.items.map((note) => (
            <li
              key={note.title}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-tpl-line py-5"
            >
              <span className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
                {note.title}
              </span>
              <span className="text-tpl-sm text-tpl-ink-muted">
                {note.minutes}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
