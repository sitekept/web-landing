import { Check } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateDemoForm,
  type TemplateFormField,
} from "@/components/template-kit/demo-form";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import {
  EstimationContent,
  EstimationFaq,
  EstimationFees,
  EstimationMethod,
} from "./estimation-sections";
import { ClosingBand } from "./parts";

/** Estimation : le titre et la photo à gauche, le formulaire à droite. */
export function EstimationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.estimation;
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
      name: "kind",
      label: labels.kind,
      type: "select",
      placeholder: labels.kindPlaceholder,
      options: labels.kinds,
      required: true,
      width: "half",
    },
    { name: "surface", label: labels.surface, width: "half" },
    {
      name: "district",
      label: labels.district,
      type: "select",
      placeholder: labels.districtPlaceholder,
      options: labels.districts,
      width: "half",
    },
    {
      name: "timing",
      label: labels.timing,
      type: "select",
      placeholder: labels.timingPlaceholder,
      options: labels.timings,
      width: "half",
    },
    { name: "message", label: labels.message, type: "textarea" },
  ];

  return (
    <>
      <TemplateSection density="compact">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.hero.eyebrow}
              title={page.hero.title}
              description={page.hero.description}
            />
            <ul className="mt-8 space-y-3 text-tpl-sm">
              {page.hero.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <TemplateMedia
              src={page.hero.image.src}
              alt={page.hero.image.alt}
              ratio="3/2"
              sizes="(min-width: 1024px) 512px, calc(88.5vw - 43px)"
              className="mt-10"
            />
          </div>
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
        </div>
      </TemplateSection>
      <EstimationMethod locale={locale} />
      <EstimationContent locale={locale} />
      <EstimationFees locale={locale} />
      <EstimationFaq locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
