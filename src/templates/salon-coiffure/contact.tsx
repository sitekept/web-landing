import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { TemplateMedia } from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { ContactLines, HoursList, PageIntro, SIZES } from "./parts";

/**
 * Contact : formulaire à gauche (7/12) ; à droite la photo du salon, puis
 * adresse, téléphone et horaires.
 */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { contact } = copy;
  const { form } = contact;
  const fields: TemplateFormField[] = [
    {
      name: "name",
      label: form.name.label,
      width: "half",
      required: true,
      autoComplete: "name",
    },
    {
      name: "email",
      label: form.email.label,
      type: "email",
      width: "half",
      required: true,
      autoComplete: "email",
    },
    {
      name: "subject",
      label: form.subject.label,
      type: "select",
      placeholder: form.subject.placeholder,
      options: form.subject.options,
    },
    {
      name: "message",
      label: form.message.label,
      type: "textarea",
      required: true,
    },
  ];

  return (
    <>
      <PageIntro title={contact.title} description={contact.description} />
      <TemplateSection tone="surface" density="compact">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <TemplatePanel tone="raised" className="p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {contact.form.title}
            </h2>
            <TemplateDemoForm
              className="mt-8"
              locale={locale}
              fields={fields}
              submitLabel={contact.form.submit}
            />
          </TemplatePanel>
          <div className="grid gap-6 lg:col-span-5">
            <TemplateMedia
              src={contact.image.src}
              alt={contact.image.alt}
              ratio="4/3"
              sizes={SIZES.COL5_G40}
            />
            <TemplatePanel tone="raised">
              <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {contact.infoTitle}
              </h2>
              <div className="mt-4">
                <ContactLines locale={locale} />
              </div>
              <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
                {contact.access}
              </p>
              <div className="mt-6 border-t border-tpl-line pt-2">
                <HoursList locale={locale} />
              </div>
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
