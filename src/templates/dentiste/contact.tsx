import { Mail, MapPin, Phone } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS, PageIntro } from "./parts";

/**
 * Contact : coordonnées, horaires et accès à gauche (5 colonnes), formulaire
 * d'écriture au secrétariat à droite (7 colonnes).
 */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const { info, contact: page } = copy;
  const { form } = page;

  return (
    <>
      <PageIntro {...page.intro} />

      <TemplateSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-6 lg:col-span-5">
            <TemplateCard title={info.addressLabel} titleAs="h2">
              <ul className="mt-1 space-y-4 text-tpl-ink">
                <li className="flex items-start gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0"
                  />
                  <span>{info.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="size-5 shrink-0" />
                  <a
                    href={copy.phone.href}
                    className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
                  <span>{info.email}</span>
                </li>
              </ul>
            </TemplateCard>

            <TemplateCard title={info.hoursLabel} titleAs="h2">
              <dl className="mt-1 divide-y divide-tpl-line">
                {info.hours.map((row) => (
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

          <TemplatePanel className="p-6 sm:p-8 lg:col-span-7">
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
                  autoComplete: "tel",
                  width: "half",
                },
                {
                  name: "email",
                  label: form.email.label,
                  type: "email",
                  required: true,
                  autoComplete: "email",
                },
                {
                  name: "message",
                  label: form.message.label,
                  type: "textarea",
                  required: true,
                  placeholder: form.message.placeholder,
                },
              ]}
            />
          </TemplatePanel>
        </div>
      </TemplateSection>

      <TemplateSection tone="tint">
        <TemplateHeading scale="subtitle" title={page.access.title} />
        <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {page.access.items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <li key={item.title} className="border-t-4 border-tpl-ink pt-5">
                <Icon aria-hidden="true" className="size-6" />
                <h3 className="mt-4 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </TemplateSection>
    </>
  );
}
