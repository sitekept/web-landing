import { Phone } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { CheckList, PageIntro } from "./parts";

/**
 * Rendez-vous : formulaire à gauche (7 colonnes) ; horaires, urgence et
 * documents à apporter à droite (5 colonnes).
 */
export function RendezVousView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.rendezVous;
  const { form, aside } = page;

  return (
    <>
      <PageIntro {...page.intro} />

      <TemplateSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
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
                  name: "patient",
                  label: form.patient.label,
                  type: "select",
                  required: true,
                  placeholder: form.patient.placeholder,
                  options: form.patient.options,
                  width: "half",
                },
                {
                  name: "reason",
                  label: form.reason.label,
                  type: "select",
                  required: true,
                  placeholder: form.reason.placeholder,
                  options: form.reason.options,
                  width: "half",
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
                  name: "message",
                  label: form.message.label,
                  type: "textarea",
                  placeholder: form.message.placeholder,
                },
              ]}
            />
          </TemplatePanel>

          <div className="grid content-start gap-6 lg:col-span-5">
            <TemplateCard title={aside.hoursTitle} titleAs="h2">
              <dl className="mt-1 divide-y divide-tpl-line">
                {copy.info.hours.map((row) => (
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

            <TemplateCard
              tone="inverse"
              title={aside.urgent.title}
              titleAs="h2"
            >
              <p>{aside.urgent.text}</p>
              <TemplateLink
                href={copy.phone.href}
                variant="inverse"
                icon={<Phone aria-hidden="true" className="size-4" />}
                className="mt-5 tabular-nums"
              >
                {copy.phone.label}
              </TemplateLink>
            </TemplateCard>

            <TemplateCard title={aside.bring.title} titleAs="h2">
              <CheckList items={aside.bring.items} className="mt-1" />
            </TemplateCard>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
