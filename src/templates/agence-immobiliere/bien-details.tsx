import { Check, X } from "lucide-react";

import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { TINT } from "./parts";

/** Description, caractéristiques, avis de l'agence et agent référent du bien. */
export function BienDetails({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.bien;
  const lists = [
    { data: page.opinion.pros, Icon: Check, key: "pros" },
    { data: page.opinion.cons, Icon: X, key: "cons" },
  ];

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.about.eyebrow}
      title={page.about.title}
    >
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          {page.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-4 max-w-tpl-measure text-tpl-base text-tpl-ink-muted"
            >
              {paragraph}
            </p>
          ))}
          <h3 className="mt-10 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {page.opinion.title}
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {lists.map(({ data, Icon, key }) => (
              <div key={key} className={`rounded-tpl p-5 text-tpl-sm ${TINT}`}>
                <p className="font-semibold">{data.title}</p>
                <ul className="mt-3 space-y-3">
                  {data.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          <TemplatePanel tone="surface">
            <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.features.title}
            </h3>
            <dl className="mt-4 divide-y divide-tpl-line text-tpl-sm">
              {page.features.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6"
                >
                  <dt className="text-tpl-ink-muted">{item.label}</dt>
                  <dd className="font-semibold sm:text-right">{item.value}</dd>
                </div>
              ))}
            </dl>
          </TemplatePanel>
          <div className="rounded-tpl border border-tpl-line bg-tpl-surface p-6">
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
              {page.referent.label}
            </p>
            <p className="mt-3 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.referent.name}
            </p>
            <p className="text-tpl-sm text-tpl-accent">{page.referent.role}</p>
            <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
              {page.referent.text}
            </p>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
