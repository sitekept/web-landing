import { Plus } from "lucide-react";

import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { FOCUS, ROW_TITLE } from "./parts";

/** Questions fréquentes : liste dépliante native, la première ouverte. */
export function MethodeFaq({ locale }: { locale: TemplateLocale }) {
  const { faq } = getTemplateCopy(architecteInterieur, locale).methode;

  return (
    <TemplateSection density="compact" tone="raised">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div>
          <TemplateHeading scale="subtitle" title={faq.title} />
        </div>
        <div className="border-t border-tpl-ink">
          {faq.items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group border-b border-tpl-line"
            >
              <summary
                className={`flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden ${ROW_TITLE} ${FOCUS}`}
              >
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-tpl-measure pb-5 text-tpl-base text-pretty text-tpl-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
