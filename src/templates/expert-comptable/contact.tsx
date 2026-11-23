import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { TemplateMedia } from "@/components/template-kit/media";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { Steps } from "./parts";

/** Contact : formulaire de devis, coordonnées, photo, puis la suite en trois étapes. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(expertComptable, locale);
  const page = copy.contactPage;
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
      name: "profile",
      label: labels.profile,
      type: "select",
      placeholder: labels.profilePlaceholder,
      options: labels.profiles,
      required: true,
      width: "half",
    },
    {
      name: "need",
      label: labels.need,
      type: "select",
      placeholder: labels.needPlaceholder,
      options: labels.needs,
      width: "half",
    },
    { name: "message", label: labels.message, type: "textarea" },
  ];

  return (
    <>
      <TemplateSection density="compact" className="border-b border-tpl-line">
        <TemplateHeading
          as="h1"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <TemplatePanel className="p-6 sm:p-8">
            <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.form.title}
            </h2>
            <p className="mt-3 mb-6 text-tpl-sm text-tpl-ink-muted">
              {page.form.intro}
            </p>
            <TemplateDemoForm
              fields={fields}
              submitLabel={page.form.submit}
              locale={locale}
            />
          </TemplatePanel>

          <div className="grid gap-6">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="3/2"
              sizes="(min-width: 1024px) 512px, calc(85vw - 16px)"
              priority
            />
            <TemplatePanel>
              <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {page.details.title}
              </h2>
              <ul className="mt-5 space-y-3 text-tpl-sm">
                <li className="flex items-start gap-3">
                  <Phone
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  <span className="sr-only">{page.details.phoneLabel}</span>
                  <a
                    href={copy.phone.href}
                    className="tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  <span className="sr-only">{page.details.emailLabel}</span>
                  {copy.common.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  <span className="sr-only">{page.details.addressLabel}</span>
                  <span>
                    {copy.common.address}
                    <span className="block text-tpl-ink-muted">
                      {page.details.access}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  <span className="sr-only">{copy.common.hoursLabel}</span>
                  <dl className="space-y-1 tabular-nums">
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
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.next.eyebrow}
        title={page.next.title}
      >
        <Steps items={page.next.steps} />
      </TemplateSection>
    </>
  );
}
