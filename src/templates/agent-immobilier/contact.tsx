import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  TemplateCard,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { TemplateMedia } from "@/components/template-kit/media";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { getTemplateCopy } from "@/content/templates/types";

import { ContactNext } from "./contact-next";
import { ClosingBand } from "./parts";

const ICON = "mt-0.5 size-4 shrink-0 text-tpl-accent";

export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.contact;
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
      name: "project",
      label: labels.project,
      type: "select",
      placeholder: labels.projectPlaceholder,
      options: labels.projects,
      required: true,
      width: "half",
    },
    {
      name: "time",
      label: labels.time,
      type: "select",
      placeholder: labels.timePlaceholder,
      options: labels.times,
      width: "half",
    },
    { name: "message", label: labels.message, type: "textarea" },
  ];

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      >
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <TemplateCard
            title={page.form.title}
            titleAs="h2"
            elevation="floating"
            className="p-6 sm:p-8"
          >
            <p className="mb-6 text-tpl-sm text-tpl-ink-muted">
              {page.form.intro}
            </p>
            <TemplateDemoForm
              fields={fields}
              submitLabel={page.form.submit}
              locale={locale}
            />
          </TemplateCard>

          <div className="grid gap-5">
            <TemplateMedia
              src={page.details.image.src}
              alt={page.details.image.alt}
              ratio="3/2"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <TemplatePanel>
              <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {page.details.title}
              </h2>
              <ul className="mt-5 space-y-3 text-tpl-sm">
                <li className="flex items-start gap-3">
                  <Phone aria-hidden="true" className={ICON} />
                  <span className="sr-only">{page.details.phoneLabel}</span>
                  <a
                    href={copy.phone.href}
                    className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className={ICON} />
                  <span className="sr-only">{page.details.emailLabel}</span>
                  {copy.common.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className={ICON} />
                  <span className="sr-only">{page.details.addressLabel}</span>
                  <span>
                    {copy.common.address}
                    <span className="block text-tpl-ink-muted">
                      {page.details.access}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className={ICON} />
                  <span className="sr-only">{copy.common.hoursLabel}</span>
                  <dl className="space-y-1">
                    {copy.common.hours.map((row) => (
                      <div
                        key={row.day}
                        className="flex flex-col sm:flex-row sm:gap-2"
                      >
                        <dt className="text-tpl-ink-muted">{row.day}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              </ul>
              <p className="mt-6 border-t border-tpl-line pt-4 text-tpl-xs text-tpl-ink-muted">
                <span className="font-semibold">{copy.common.zone.label}</span>
                <span className="block">{copy.common.zone.text}</span>
              </p>
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>
      <ContactNext locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
