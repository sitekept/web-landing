import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS } from "./parts";

/**
 * Déroulé : titre et promesse sur les fichiers à gauche (5 colonnes), quatre
 * étapes numérotées à droite (7), séparées par des filets (pas de cartes).
 */
export function HomeProcess({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.process;
  const DataIcon = ICONS[page.data.icon];

  return (
    <TemplateSection id={ANCHORS.process} tone="tint" density="compact">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <TemplateHeading
            id="deroule-titre"
            title={page.title}
            description={page.description}
          />
          <TemplatePanel className="mt-8 flex gap-4 border-tpl-line p-6">
            <DataIcon
              aria-hidden="true"
              className="mt-1 size-6 shrink-0 text-tpl-accent"
            />
            <div>
              <h3 className="font-semibold">{page.data.title}</h3>
              <p className="mt-1 text-tpl-ink-muted">{page.data.text}</p>
            </div>
          </TemplatePanel>
        </div>
        <ol className="border-b border-tpl-line lg:col-span-7">
          {page.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-tpl-line py-6"
            >
              <span
                aria-hidden="true"
                className="font-mono text-tpl-xl leading-tpl-display font-bold text-tpl-accent tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-tpl-measure text-tpl-ink-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </TemplateSection>
  );
}
