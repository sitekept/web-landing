import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { SPLIT_CLASS } from "./parts";

/** Accueil : ce que contient un passage, quatre listes à cocher (découpe 1/1). */
export function HomeVisit({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).home.visit;

  return (
    <TemplateSection density="regular">
      <div className={SPLIT_CLASS}>
        <div className="lg:col-span-6">
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-6">
          {page.groups.map((group) => (
            <section key={group.title}>
              <h3 className="border-b-2 border-tpl-ink pb-2 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-tpl-sm">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-tpl-eyebrow"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
