import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

import { PageHero, WellnessNotice } from "./parts";

/**
 * Réservation : formulaire de démonstration à gauche, coordonnées, horaires et
 * conditions d'annulation à droite. Aucune donnée n'est envoyée.
 */
export function ReservationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.reservation;
  const labels = page.form.fields;
  const fields: TemplateFormField[] = [
    {
      name: "name",
      label: labels.name,
      required: true,
      autoComplete: "name",
      width: "half",
    },
    {
      name: "phone",
      label: labels.phone,
      type: "tel",
      required: true,
      autoComplete: "tel",
      width: "half",
    },
    {
      name: "email",
      label: labels.email,
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      name: "treatment",
      label: labels.treatment,
      type: "select",
      placeholder: labels.treatmentPlaceholder,
      options: labels.treatments,
      required: true,
      width: "half",
    },
    {
      name: "duration",
      label: labels.duration,
      type: "select",
      placeholder: labels.durationPlaceholder,
      options: labels.durations,
      width: "half",
    },
    {
      name: "date",
      label: labels.date,
      placeholder: labels.datePlaceholder,
      autoComplete: "off",
    },
    {
      name: "message",
      label: labels.message,
      type: "textarea",
      placeholder: labels.messagePlaceholder,
    },
  ];
  const details = [
    {
      Icon: Phone,
      label: page.details.phoneLabel,
      value: copy.phone.label,
      href: copy.phone.href,
    },
    { Icon: Mail, label: page.details.emailLabel, value: copy.common.email },
    {
      Icon: MapPin,
      label: page.details.addressLabel,
      value: copy.common.address,
    },
    {
      Icon: MapPin,
      label: page.details.accessLabel,
      value: copy.common.access,
    },
  ];

  return (
    <>
      <PageHero>
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </PageHero>

      <TemplateSection>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <TemplatePanel className="p-6 shadow-tpl-lg sm:p-10">
            <h2 className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
              {page.form.title}
            </h2>
            <p className="mt-3 mb-8 text-tpl-sm text-tpl-ink-muted">
              {page.form.intro}
            </p>
            <div className="[color-scheme:dark]">
              <TemplateDemoForm
                fields={fields}
                submitLabel={page.form.submit}
                locale={locale}
              />
            </div>
          </TemplatePanel>

          <div className="space-y-6">
            <TemplateCard title={page.details.title} elevation="flat">
              <dl className="space-y-4">
                {details.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-tpl-accent"
                    />
                    <div>
                      <dt className="text-tpl-xs text-tpl-ink-muted">
                        {label}
                      </dt>
                      <dd className="text-tpl-ink">
                        {href ? (
                          <a
                            href={href}
                            className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </TemplateCard>

            <TemplateCard title={copy.common.hoursLabel} elevation="flat">
              <dl className="space-y-3">
                {copy.common.hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between gap-4"
                  >
                    <dt className="flex items-center gap-2">
                      <Clock
                        aria-hidden="true"
                        className="size-4 shrink-0 text-tpl-accent"
                      />
                      {row.day}
                    </dt>
                    <dd className="text-tpl-ink tabular-nums">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </TemplateCard>

            <TemplateCard title={page.cancellation.title} elevation="flat">
              <ul className="list-disc space-y-3 pl-5 marker:text-tpl-accent">
                {page.cancellation.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </TemplateCard>
          </div>
        </div>
        <div className="mt-12">
          <WellnessNotice>{copy.common.wellnessNotice}</WellnessNotice>
        </div>
      </TemplateSection>
    </>
  );
}
