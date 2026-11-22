import {
  TemplateCard,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

/** Demande de visite du bien : formulaire de démonstration et retour à la sélection. */
export function BienVisit({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.bien.visit;
  const labels = page.fields;
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
      name: "slot",
      label: labels.slot,
      type: "select",
      placeholder: labels.slotPlaceholder,
      options: labels.slots,
    },
    { name: "message", label: labels.message, type: "textarea" },
  ];

  return (
    <TemplateSection eyebrow={page.eyebrow} title={page.title} width="narrow">
      <TemplateCard elevation="floating" className="mt-10 p-6 sm:p-8">
        <p className="mb-6 text-tpl-sm text-tpl-ink-muted">{page.intro}</p>
        <TemplateDemoForm
          fields={fields}
          submitLabel={page.submit}
          locale={locale}
        />
      </TemplateCard>
      <div className="mt-8">
        <TemplateLink
          href={templateHref(locale, agenceImmobiliere.paths.biens)}
          variant="outline"
        >
          {copy.cta.seeAllListings}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
