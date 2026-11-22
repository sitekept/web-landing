import { Plus } from "lucide-react";

import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { getTemplateCopy } from "@/content/templates/types";

import { AccentIcon, ICONS } from "./parts";

/** Méthode : trois temps, chacun avec un grand numéro. */
export function EstimationMethod({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.estimation.method;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {page.steps.map((step, index) => {
          const Icon = ICONS[step.icon];

          return (
            <li key={step.title} className="border-t border-tpl-ink pt-5">
              <div className="flex items-center justify-between">
                <span className="font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon
                  aria-hidden="true"
                  className="size-6 text-tpl-ink-muted"
                />
              </div>
              <h3 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {step.title}
              </h3>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{step.text}</p>
            </li>
          );
        })}
      </ol>
    </TemplateSection>
  );
}

/** Contenu de l'avis de valeur : quatre cartes à icône. */
export function EstimationContent({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.estimation.content;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul
        role="list"
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {page.items.map((item) => (
          <li key={item.title} className="flex">
            <TemplateCard
              elevation="flat"
              className="w-full"
              icon={<AccentIcon icon={item.icon} />}
              title={item.title}
            >
              {item.text}
            </TemplateCard>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/** Rupture sapin : les honoraires, en liste à points de conduite (élément vendor). */
export function EstimationFees({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.estimation.fees;

  return (
    <TemplateSection
      tone="inverse"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="mt-12">
        <PriceList groups={page.groups} titleAs="h3" columns={2} />
        <p className="mt-10 border-l-2 border-tpl-ink/50 pl-4 text-tpl-sm text-tpl-ink-muted">
          {page.note}
        </p>
      </div>
    </TemplateSection>
  );
}

/** Questions fréquentes : éléments `details` natifs, accessibles au clavier. */
export function EstimationFaq({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.estimation.faq;

  return (
    <TemplateSection eyebrow={page.eyebrow} title={page.title}>
      <div className="mt-10 max-w-3xl divide-y divide-tpl-line border-y border-tpl-line">
        {page.items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-tpl-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink [&::-webkit-details-marker]:hidden">
              {item.question}
              <Plus
                aria-hidden="true"
                className="size-5 shrink-0 text-tpl-accent transition-transform group-open:rotate-45 motion-reduce:transition-none"
              />
            </summary>
            <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </TemplateSection>
  );
}
