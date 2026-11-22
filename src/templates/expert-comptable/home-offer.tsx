import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBox } from "./parts";

/** Offre : les cinq missions en registre (code, intitulé, résumé, prix de départ). */
export function HomeOffer({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(expertComptable, locale);
  const section = copy.home.offer;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
    >
      <ol className="border-t-2 border-tpl-ink md:grid md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)_14rem] md:gap-x-8">
        {copy.missions.items.map((mission) => (
          <li
            key={mission.code}
            className="grid items-start gap-x-8 gap-y-3 border-b border-tpl-line py-6 md:col-span-4 md:grid-cols-subgrid"
          >
            <p className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-accent tabular-nums">
              <span className="sr-only">{section.codeLabel} </span>
              {mission.code}
            </p>
            <div className="flex items-center gap-3">
              <IconBox icon={mission.icon} />
              <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {mission.title}
              </h3>
            </div>
            <p className="text-tpl-sm text-tpl-ink-muted">{mission.summary}</p>
            <p className="text-tpl-sm font-semibold text-tpl-ink tabular-nums md:text-right">
              {mission.from}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <TemplateLink
          href={templateHref(locale, expertComptable.paths.missions)}
          variant="outline"
        >
          {copy.cta.allMissions}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
