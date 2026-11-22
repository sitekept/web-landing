import {
  TemplateHeading,
  TemplatePanel,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

/** Formulaire de démonstration : aucune donnée n'est envoyée. */
export function ContactForm({ locale }: { locale: TemplateLocale }) {
  const form = getTemplateCopy(plombierSerrurier, locale).contact.form;

  return (
    <TemplatePanel className="p-6 shadow-tpl-lg sm:p-8 lg:self-start">
      <TemplateHeading
        as="h2"
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
            width: "half",
          },
          {
            name: "city",
            label: form.city.label,
            autoComplete: "postal-code",
            width: "half",
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
  );
}
