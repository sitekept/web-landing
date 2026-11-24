import { Check } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { ColumnLabel } from "./parts";

/** Rupture : fond nuit, photo de bureau et deux colonnes « vous remettez / vous recevez ». */
export function HomeHandover({ locale }: { locale: TemplateLocale }) {
  const section = getTemplateCopy(expertComptable, locale).home.handover;
  const columns = [section.give, section.receive];

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <TemplateMedia
          src={section.image.src}
          alt={section.image.alt}
          ratio="4/5"
          sizes="(min-width: 1024px) 384px, calc(85vw - 16px)"
        />
        <div>
          <ColumnLabel>{section.eyebrow}</ColumnLabel>
          <h2 className="mt-4 max-w-3xl font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {section.title}
          </h2>
          <p className="mt-5 max-w-tpl-measure text-tpl-lg text-tpl-ink-muted">
            {section.description}
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {columns.map((column) => (
              <div key={column.title} className="border-t-2 border-tpl-ink">
                <h3 className="pt-4 text-tpl-sm font-semibold tracking-tpl-eyebrow uppercase">
                  {column.title}
                </h3>
                <ul className="mt-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-tpl-line py-3 text-tpl-sm"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
