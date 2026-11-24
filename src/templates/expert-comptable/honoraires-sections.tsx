import { Check, Plus } from "lucide-react";

import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { Steps } from "./parts";

/** Offre : ce que couvre le forfait mensuel, et ce qui se chiffre à part. */
export function HonorairesIncluded({ locale }: { locale: TemplateLocale }) {
  const included = getTemplateCopy(expertComptable, locale).honorairesPage
    .included;
  const columns = [
    { block: included.yes, Icon: Check, accent: true },
    { block: included.extra, Icon: Plus, accent: false },
  ];

  return (
    <TemplateSection
      eyebrow={included.eyebrow}
      title={included.title}
      description={included.description}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {columns.map(({ block, Icon, accent }) => (
          <TemplatePanel key={block.title}>
            <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {block.title}
            </h3>
            <ul className="mt-4 border-t-2 border-tpl-ink">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-tpl-line py-3 text-tpl-sm"
                >
                  <Icon
                    aria-hidden="true"
                    className={
                      accent
                        ? "mt-0.5 size-4 shrink-0 text-tpl-accent"
                        : "mt-0.5 size-4 shrink-0 text-tpl-ink-muted"
                    }
                  />
                  {item}
                </li>
              ))}
            </ul>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}

/** Rupture : la méthode de fixation du prix, en trois étapes sur fond nuit. */
export function HonorairesMethod({ locale }: { locale: TemplateLocale }) {
  const method = getTemplateCopy(expertComptable, locale).honorairesPage.method;

  return (
    <TemplateSection
      tone="inverse"
      eyebrow={method.eyebrow}
      title={method.title}
    >
      <Steps items={method.steps} onDark />
    </TemplateSection>
  );
}
