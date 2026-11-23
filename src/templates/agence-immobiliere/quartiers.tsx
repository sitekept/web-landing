import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { AccentIcon, ClosingBand } from "./parts";

/** Quartiers : une bande par quartier (photo, caractère, agent référent), puis trois questions. */
export function QuartiersView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.quartiers;

  return (
    <>
      <TemplateSection density="compact">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.list.eyebrow}
        title={page.list.title}
      >
        <ul role="list" className="mt-12 grid gap-8 md:grid-cols-2">
          {page.list.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col overflow-hidden rounded-tpl border border-tpl-line bg-tpl-surface"
            >
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio="16/9"
                rounded="none"
                sizes="(min-width: 1408px) 512px, (min-width: 768px) calc(41.5vw - 15px), calc(84vw - 13px)"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-accent uppercase">
                  {item.character}
                </p>
                <h3 className="mt-2 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.name}
                </h3>
                <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                  {item.text}
                </p>
                <ul className="mt-4 space-y-2 text-tpl-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <dl className="mt-5 grid flex-1 content-end gap-3 border-t border-tpl-line pt-4 text-tpl-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                      {page.list.referentLabel}
                    </dt>
                    <dd>{item.referent}</dd>
                  </div>
                  <div>
                    <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                      {page.list.typesLabel}
                    </dt>
                    <dd>{item.types}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <TemplateLink
            href={templateHref(locale, agenceImmobiliere.paths.biens)}
            variant="outline"
          >
            {page.list.cta}
          </TemplateLink>
        </div>
      </TemplateSection>

      <TemplateSection eyebrow={page.choose.eyebrow} title={page.choose.title}>
        <ul role="list" className="mt-12 grid gap-8 md:grid-cols-3">
          {page.choose.items.map((item) => (
            <li key={item.title} className="border-t border-tpl-ink pt-5">
              <AccentIcon icon={item.icon} />
              <h3 className="mt-4 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <ClosingBand locale={locale} />
    </>
  );
}
