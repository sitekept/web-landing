import {
  TemplateCard,
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

import { GridBackdrop, HazardStripe, ICONS } from "./parts";

export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(electricien, locale);
  const page = copy.contact;
  const form = page.form;

  return (
    <>
      <GridBackdrop className="py-12 lg:py-16">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </GridBackdrop>
      <HazardStripe />

      <TemplateSection density="compact">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <TemplatePanel className="border-tpl-ink p-6 shadow-tpl-lg sm:p-8">
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
                  name: "type",
                  label: form.type.label,
                  type: "select",
                  required: true,
                  placeholder: form.type.placeholder,
                  options: form.type.options,
                  width: "half",
                },
                {
                  name: "urgency",
                  label: form.urgency.label,
                  type: "select",
                  placeholder: form.urgency.placeholder,
                  options: form.urgency.options,
                  width: "half",
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
                  <div
                    key={row.day}
                    className="flex justify-between gap-4 py-2"
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

            <div data-tone="inverse">
              <TemplateCard
                title={page.zone.title}
                titleAs="h2"
                className="border-tpl-ink bg-tpl-inverse"
              >
                {page.zone.text}
              </TemplateCard>
            </div>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
