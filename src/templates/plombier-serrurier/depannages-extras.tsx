import { Check } from "lucide-react";

import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS, IconBadge } from "./parts";

type Props = { locale: TemplateLocale };

/** Preuve : les bons réflexes en attendant le dépanneur, un bloc par métier. */
export function ReflexesSection({ locale }: Props) {
  const reflexes = getTemplateCopy(plombierSerrurier, locale).depannages
    .reflexes;

  return (
    <TemplateSection
      eyebrow={reflexes.eyebrow}
      title={reflexes.title}
      description={reflexes.description}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {reflexes.groups.map((group, index) => (
          <TemplateCard
            key={group.title}
            title={group.title}
            titleAs="h3"
            icon={
              <IconBadge
                icon={group.icon}
                trade={index === 0 ? "water" : "lock"}
              />
            }
            className="p-6 sm:p-8"
          >
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-tpl-base">
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-tpl-ink"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}

/** Rupture : ce que l'entreprise ne fait pas, fond teal. */
export function LimitsSection({ locale }: Props) {
  const limits = getTemplateCopy(plombierSerrurier, locale).depannages.limits;

  return (
    <TemplateSection
      tone="inverse"
      eyebrow={limits.eyebrow}
      title={limits.title}
      description={limits.description}
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {limits.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li
              key={item.title}
              className="rounded-tpl border border-tpl-line bg-tpl-raised p-6"
            >
              <Icon aria-hidden="true" className="size-6" />
              <h3 className="mt-4 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-2 text-tpl-sm">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </TemplateSection>
  );
}
