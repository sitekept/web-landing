import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { Plate } from "./parts";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

/**
 * Contact : formulaire de démonstration (type de séance, date, lieu), image,
 * coordonnées et les trois temps qui suivent la demande.
 */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(photographe, locale);
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
      name: "email",
      label: labels.email,
      type: "email",
      required: true,
      autoComplete: "email",
      width: "half",
    },
    {
      name: "type",
      label: labels.type,
      type: "select",
      placeholder: labels.typePlaceholder,
      options: labels.types,
      required: true,
    },
    { name: "date", label: labels.date, type: "date", width: "half" },
    { name: "place", label: labels.place, width: "half" },
    { name: "message", label: labels.message, type: "textarea" },
  ];

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        titleScale="title"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        className="pb-6 lg:pb-8"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.form.title}
            </h2>
            <p className="mt-3 mb-8 text-tpl-sm text-tpl-ink-muted">
              {page.form.intro}
            </p>
            <TemplateDemoForm
              fields={fields}
              submitLabel={page.form.submit}
              locale={locale}
            />
          </div>

          <div className="grid gap-6 lg:col-span-5">
            <Plate
              src={page.details.image.src}
              alt={page.details.image.alt}
              ratio="3/2"
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw"
            />
            <TemplatePanel tone="surface">
              <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {page.details.title}
              </h2>
              <ul className="mt-5 space-y-3 text-tpl-sm">
                <li className="flex items-start gap-3">
                  <Phone
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                  />
                  <span className="sr-only">{page.details.phoneLabel}</span>
                  <a
                    href={copy.phone.href}
                    className={`underline underline-offset-4 ${FOCUS}`}
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                  <span className="sr-only">{page.details.emailLabel}</span>
                  {copy.common.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                  />
                  <span className="sr-only">{page.details.addressLabel}</span>
                  <span>
                    {copy.common.address}
                    <span className="block text-tpl-ink-muted">
                      <span className="sr-only">
                        {page.details.areaLabel}
                        {page.details.labelSeparator}
                      </span>
                      {page.details.area}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                  />
                  <span>
                    <span className="sr-only">
                      {page.details.replyLabel}
                      {page.details.labelSeparator}
                    </span>
                    {page.details.reply}
                  </span>
                </li>
              </ul>
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>

      <TemplateSection
        tone="raised"
        title={page.next.title}
        titleScale="subtitle"
      >
        <ol role="list" className="grid gap-10 md:grid-cols-3 md:gap-8">
          {page.next.items.map((item, index) => (
            <li key={item.title} className="border-t border-tpl-ink pt-4">
              <p
                aria-hidden="true"
                className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </TemplateSection>
    </>
  );
}
