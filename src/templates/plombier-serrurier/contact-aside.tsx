import { Check } from "lucide-react";

import { TemplateCard, type TemplateLocale } from "@/components/template-kit";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/** Colonne latérale : coordonnées, horaires et astreinte, zone, préparation. */
export function ContactAside({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(plombierSerrurier, locale);
  const page = copy.contact;

  return (
    <div className="grid content-start gap-6">
      <TemplateCard title={page.details.title} titleAs="h2">
        <ul className="mt-1 space-y-4">
          {page.details.items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <li key={item.label} className="flex items-start gap-3">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-tpl-ink"
                />
                <div>
                  <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
                    {item.label}
                  </p>
                  <p className="text-tpl-ink tabular-nums">
                    {item.icon === "phone" ? (
                      <a
                        href={copy.phone.href}
                        className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </TemplateCard>

      <TemplateCard title={page.hours.title} titleAs="h2">
        <dl className="mt-1 divide-y divide-tpl-line">
          {page.hours.items.map((row) => (
            <div key={row.day} className="flex justify-between gap-4 py-2">
              <dt>{row.day}</dt>
              <dd className="font-semibold text-tpl-ink tabular-nums">
                {row.time}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-tpl-xs">{page.hours.note}</p>
      </TemplateCard>

      <div data-tone="inverse">
        <TemplateCard
          title={page.zone.title}
          titleAs="h2"
          className="border-tpl-line bg-tpl-inverse"
        >
          {page.zone.text}
        </TemplateCard>
      </div>

      <TemplateCard title={page.prep.title} titleAs="h2" elevation="flat">
        <ul className="space-y-2">
          {page.prep.items.map((item) => (
            <li key={item} className="flex gap-3">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-tpl-ink"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </TemplateCard>
    </div>
  );
}
