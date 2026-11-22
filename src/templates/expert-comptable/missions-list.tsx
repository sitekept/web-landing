import { Check } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { ColumnLabel, IconBox } from "./parts";

/** Offre : registre détaillé des cinq missions (ce qu'elles comprennent, prix de départ). */
export function MissionsList({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(expertComptable, locale);
  const list = copy.missionsPage.list;

  return (
    <TemplateSection
      eyebrow={list.eyebrow}
      title={list.title}
      description={list.description}
    >
      <ol className="border-t-2 border-tpl-ink">
        {copy.missions.items.map((mission) => (
          <li
            key={mission.code}
            className="grid gap-x-10 gap-y-5 border-b border-tpl-line py-8 md:grid-cols-[3.5rem_1.1fr_1fr]"
          >
            <p className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-accent tabular-nums">
              {mission.code}
            </p>
            <div>
              <div className="flex items-center gap-3">
                <IconBox icon={mission.icon} />
                <h3 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {mission.title}
                </h3>
              </div>
              <p className="mt-4 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                {mission.summary}
              </p>
              <p className="mt-4 inline-block border-y border-tpl-ink py-1.5 text-tpl-sm font-semibold tabular-nums">
                {mission.from}
              </p>
            </div>
            <div>
              <ColumnLabel>{copy.missions.includesLabel}</ColumnLabel>
              <ul className="mt-3">
                {mission.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-tpl-line py-2.5 text-tpl-sm last:border-b-0"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </TemplateSection>
  );
}
