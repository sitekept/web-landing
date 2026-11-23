import {
  TemplateCard,
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/**
 * Prise de rendez-vous : formulaire à gauche ; horaires et coordonnées à
 * droite (la page porte le contact du template).
 */
export function AppointmentSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(garageAuto, locale);
  const page = copy.rendezVous;
  const form = page.form;

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
                name: "service",
                label: form.service.label,
                type: "select",
                required: true,
                placeholder: form.service.placeholder,
                options: form.service.options,
              },
              {
                name: "date",
                label: form.date.label,
                type: "date",
                required: true,
                width: "half",
              },
              {
                name: "slot",
                label: form.slot.label,
                type: "select",
                required: true,
                placeholder: form.slot.placeholder,
                options: form.slot.options,
                width: "half",
              },
              {
                name: "vehicle",
                label: form.vehicle.label,
                placeholder: form.vehicle.placeholder,
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

        <div className="grid content-start gap-6">
          <TemplateCard title={page.hours.title} titleAs="h2">
            <dl className="mt-1 divide-y divide-tpl-line">
              {page.hours.items.map((row) => (
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
            <p className="mt-3 text-tpl-xs">{page.hours.note}</p>
          </TemplateCard>

          <TemplateCard title={page.details.title} titleAs="h2">
            <ul className="mt-1 space-y-4">
              {page.details.items.map((item) => {
                const Icon = ICONS[item.icon];

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-tpl-accent"
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

          <TemplateMedia
            src={page.aside.src}
            alt={page.aside.alt}
            ratio="4/3"
            sizes="(min-width: 1024px) 512px, calc(96vw - 19px)"
            rounded="none"
          />
        </div>
      </div>
    </TemplateSection>
  );
}
