import { TemplatePanel, type TemplateLocale } from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

const toOptions = (labels: readonly string[]) =>
  labels.map((label) => ({ value: label, label }));

/** Formulaire de demande de rendez-vous (démonstration : rien n'est envoyé). */
export function ConsultationForm({ locale }: { locale: TemplateLocale }) {
  const { form } = getTemplateCopy(cabinetAvocat, locale).consultation;
  const f = form.fields;

  const fields: TemplateFormField[] = [
    { name: "name", label: f.name, required: true, autoComplete: "name" },
    { name: "company", label: f.company, autoComplete: "organization" },
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
      name: "topic",
      label: f.topic,
      type: "select",
      options: toOptions(f.topics),
      placeholder: f.topicPlaceholder,
      required: true,
      width: "half",
    },
    {
      name: "urgency",
      label: f.urgency,
      type: "select",
      options: toOptions(f.urgencies),
      placeholder: f.urgencyPlaceholder,
      width: "half",
    },
    {
      name: "mode",
      label: f.mode,
      type: "select",
      options: toOptions(f.modes),
      placeholder: f.modePlaceholder,
    },
    { name: "message", label: f.message, type: "textarea", required: true },
    { name: "consent", label: f.consent, type: "checkbox", required: true },
  ];

  return (
    <TemplatePanel className="p-6 sm:p-8">
      <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
        {form.title}
      </h2>
      <p className="mt-3 mb-6 text-tpl-sm text-tpl-ink-muted">{form.intro}</p>
      <TemplateDemoForm
        fields={fields}
        submitLabel={form.submit}
        locale={locale}
      />
    </TemplatePanel>
  );
}
