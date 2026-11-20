import { Check, Info } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

/** Conseils avant et après le soin, puis précautions en termes généraux. */
export function SoinsAdvice({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(spaMassage, locale).soins;
  const columns = [page.advice.before, page.advice.after];

  return (
    <>
      <TemplateSection eyebrow={page.advice.eyebrow} title={page.advice.title}>
        <div className="grid gap-6 md:grid-cols-2">
          {columns.map((column) => (
            <TemplateCard
              key={column.title}
              title={column.title}
              elevation="flat"
            >
              <ul className="space-y-3">
                {column.items.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-tpl-accent"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </TemplateCard>
          ))}
        </div>
      </TemplateSection>

      <TemplateSection tone="raised">
        <TemplateHeading
          as="h2"
          scale="subtitle"
          title={page.caution.title}
          description={page.caution.text}
        />
        <ul className="mt-8 space-y-4">
          {page.caution.items.map((line) => (
            <li
              key={line}
              className="flex items-start gap-4 text-tpl-sm text-tpl-ink-muted"
            >
              <Info
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-tpl-accent"
              />
              {line}
            </li>
          ))}
        </ul>
      </TemplateSection>
    </>
  );
}
