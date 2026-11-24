import { TemplatePanel, type TemplateLocale } from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

/** Liste à filets : un trait court, puis le texte. */
export function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-tpl-sm leading-7 text-tpl-ink-muted"
        >
          <span
            aria-hidden="true"
            className="mt-3.5 h-px w-5 shrink-0 bg-tpl-ink-muted"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Titre de carte en police d'affichage, écrit dans une vue. */
export const CARD_TITLE =
  "font-tpl-display leading-tpl-display font-(weight:--tpl-display-weight)";

/** Formulaire de contact de démonstration, dans un encart posé sur le fond de page. */
export function ContactFormCard({ locale }: { locale: TemplateLocale }) {
  const { form } = getTemplateCopy(avocate, locale);
  const labels = form.fields;
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
      name: "phone",
      label: labels.phone,
      type: "tel",
      autoComplete: "tel",
      width: "half",
    },
    {
      name: "subject",
      label: labels.subject,
      type: "select",
      placeholder: labels.subjectPlaceholder,
      options: labels.subjects,
      required: true,
      width: "half",
    },
    {
      name: "message",
      label: labels.message,
      type: "textarea",
      required: true,
    },
    {
      name: "consent",
      label: form.consent,
      type: "checkbox",
      required: true,
    },
  ];

  return (
    <TemplatePanel tone="surface" className="p-5 shadow-tpl-lg sm:p-6 lg:p-8">
      <TemplateDemoForm
        fields={fields}
        submitLabel={form.submit}
        locale={locale}
      />
    </TemplatePanel>
  );
}
