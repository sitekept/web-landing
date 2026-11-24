import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP, HoursList, InfoItem } from "./parts";

/** Contact : coordonnées et horaires (7/12), formulaire (5/12). */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { contact, common } = copy;
  const { form } = contact;

  return (
    <TemplateSection
      as="h1"
      eyebrow={contact.eyebrow}
      title={contact.title}
      description={contact.description}
      className={FIRST_SECTION_TOP}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-7">
          <dl className="grid gap-8 sm:grid-cols-2">
            <InfoItem label={contact.addressLabel}>{common.address}</InfoItem>
            <InfoItem label={contact.phoneLabel}>
              <a
                href={copy.phone.href}
                className="font-semibold tabular-nums underline-offset-4 hover:underline"
              >
                {copy.phone.label}
              </a>
            </InfoItem>
            <InfoItem label={contact.emailLabel}>{common.email}</InfoItem>
            <InfoItem label={contact.accessLabel}>{contact.access}</InfoItem>
          </dl>
          <div className="mt-12">
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
              {common.hoursLabel}
            </p>
            <HoursList rows={common.hours} className="mt-3 max-w-lg" />
          </div>
        </div>

        <TemplatePanel tone="raised" className="p-6 sm:p-10 lg:col-span-5">
          <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {form.title}
          </h2>
          <TemplateDemoForm
            locale={locale}
            className="mt-8"
            submitLabel={form.submit}
            fields={[
              {
                name: "name",
                label: form.name,
                required: true,
                autoComplete: "name",
              },
              {
                name: "email",
                label: form.email,
                type: "email",
                required: true,
                autoComplete: "email",
              },
              {
                name: "subject",
                label: form.subject,
                type: "select",
                options: form.subjects,
                placeholder: form.choose,
                required: true,
              },
              {
                name: "message",
                label: form.message,
                type: "textarea",
                required: true,
              },
            ]}
          />
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
