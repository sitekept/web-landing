import {
  TemplateCard,
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/** Demande de devis : formulaire à gauche, déroulé en trois étapes à droite. */
export function QuoteFormSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).devis;
  const form = page.form;
  const info = getTemplateCopy(garageAuto, locale).rendezVous;

  return (
    <TemplateSection density="compact" tone="raised">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <TemplatePanel
          tone="surface"
          className="border-2 border-tpl-ink p-6 sm:p-8"
        >
          <TemplateHeading
            scale="subtitle"
            title={form.title}
            description={form.description}
          />
          <TemplateDemoForm
            locale={locale}
            className="mt-8"
            submitLabel={form.submit}
            fields={[
              {
                name: "name",
                label: form.name.label,
                required: true,
                autoComplete: "name",
                width: "half",
              },
              {
                name: "phone",
                label: form.phone.label,
                type: "tel",
                required: true,
                autoComplete: "tel",
                width: "half",
              },
              {
                name: "email",
                label: form.email.label,
                type: "email",
                autoComplete: "email",
              },
              {
                name: "vehicle",
                label: form.vehicle.label,
                placeholder: form.vehicle.placeholder,
                required: true,
                width: "half",
              },
              {
                name: "mileage",
                label: form.mileage.label,
                placeholder: form.mileage.placeholder,
                width: "half",
              },
              {
                name: "type",
                label: form.type.label,
                type: "select",
                required: true,
                placeholder: form.type.placeholder,
                options: form.type.options,
              },
              {
                name: "message",
                label: form.message.label,
                type: "textarea",
                placeholder: form.message.placeholder,
              },
            ]}
          />
        </TemplatePanel>

        <div className="grid content-start gap-6 self-start lg:sticky lg:top-24">
          <TemplateCard title={page.next.title} titleAs="h2">
            <ol className="mt-2 space-y-6">
              {page.next.items.map((item, index) => {
                const Icon = ICONS[item.icon];

                return (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-tpl bg-tpl-ink font-tpl-display text-tpl-base font-(weight:--tpl-display-weight) text-tpl-surface tabular-nums"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="flex items-center gap-2 font-tpl-display text-tpl-base font-(weight:--tpl-display-weight)">
                        {item.title}
                        <Icon
                          aria-hidden="true"
                          className="size-4 text-tpl-accent"
                        />
                      </h3>
                      <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </TemplateCard>

          <TemplateCard title={info.hours.title} titleAs="h2">
            <dl className="mt-1 divide-y divide-tpl-line">
              {info.hours.items.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between gap-4 py-2.5"
                >
                  <dt>{row.day}</dt>
                  <dd className="font-semibold text-tpl-ink tabular-nums">
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
          </TemplateCard>
        </div>
      </div>
    </TemplateSection>
  );
}
