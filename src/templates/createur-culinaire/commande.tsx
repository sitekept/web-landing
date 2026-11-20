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
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

import { RULE } from "./parts";

const EYEBROW =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase";

/** Commande : hero court, délais, formulaire de démonstration et coordonnées. */
export function CommandeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(createurCulinaire, locale);
  const page = copy.commande;
  const f = page.form.fields;

  const fields: TemplateFormField[] = [
    { name: "name", label: f.name, required: true, autoComplete: "name" },
    {
      name: "email",
      label: f.email,
      type: "email",
      required: true,
      autoComplete: "email",
      width: "half",
    },
    {
      name: "phone",
      label: f.phone,
      type: "tel",
      autoComplete: "tel",
      width: "half",
    },
    {
      name: "eventType",
      label: f.eventType,
      type: "select",
      required: true,
      placeholder: f.eventTypePlaceholder,
      options: f.eventTypes,
    },
    { name: "date", label: f.date, type: "date", width: "half" },
    {
      name: "guests",
      label: f.guests,
      placeholder: f.guestsPlaceholder,
      width: "half",
    },
    { name: "wishes", label: f.wishes, type: "textarea" },
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
  ];

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        className="pb-8 lg:pb-12"
      />

      <TemplateSection
        tone="raised"
        density="compact"
        eyebrow={page.delays.eyebrow}
        title={page.delays.title}
        description={page.delays.note}
      >
        <ul className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {page.delays.items.map((item) => (
            <li key={item.value} className={`${RULE} pt-5`}>
              <p className="font-tpl-display text-tpl-2xl text-tpl-accent tabular-nums">
                {item.value}
              </p>
              <h3 className="mt-3 font-tpl-display text-tpl-lg">
                {item.label}
              </h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection density="compact">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <TemplateHeading
              scale="subtitle"
              title={page.form.title}
              description={page.form.intro}
            />
            <div className={`${RULE} mt-10 pt-6`}>
              <h3 className={EYEBROW}>{page.details.title}</h3>
              <ul className="mt-5 space-y-5">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-tpl-accent"
                    />
                    <div>
                      <p className="text-tpl-xs text-tpl-ink-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="inline-flex min-h-11 items-center text-tpl-base underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-tpl-base">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <Clock
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-tpl-accent"
                  />
                  <div>
                    <p className="text-tpl-xs text-tpl-ink-muted">
                      {page.details.hoursLabel}
                    </p>
                    <ul className="text-tpl-base">
                      {copy.common.hours.map((row) => (
                        <li key={row.day}>
                          {row.day}, {row.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-tpl-sm text-tpl-ink-muted">
                {page.details.pickup}
              </p>
            </div>
          </div>

          <TemplatePanel className="p-6 sm:p-10">
            <TemplateDemoForm
              fields={fields}
              submitLabel={page.form.submit}
              locale={locale}
            />
          </TemplatePanel>
        </div>
      </TemplateSection>
    </>
  );
}
