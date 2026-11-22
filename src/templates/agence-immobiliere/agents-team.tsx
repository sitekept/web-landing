import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { AccentIcon } from "./parts";

/** Façon de travailler ensemble : trois repères, en rangée. */
export function AgentsTeam({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.agents.team;

  return (
    <TemplateSection eyebrow={page.eyebrow} title={page.title}>
      <ul role="list" className="mt-12 grid gap-8 md:grid-cols-3">
        {page.items.map((item) => (
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
  );
}
