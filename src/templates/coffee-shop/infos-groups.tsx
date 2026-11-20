import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

/** Groupes et privatisation : arguments à gauche, formulaire de démonstration à droite. */
export function GroupsSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(coffeeShop, locale).infos;
  const form = page.groups.form;

  return (
    <TemplateSection id="groupes" className="scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <TemplateHeading
            scale="subtitle"
            eyebrow={page.groups.eyebrow}
            title={page.groups.title}
            description={page.groups.description}
          />
          <ul className="mt-8 space-y-3">
            {page.groups.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-tpl-accent"
                />
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <TemplatePanel className="border-tpl-ink p-6 shadow-tpl-lg sm:p-8">
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
                label: form.name,
                required: true,
                autoComplete: "name",
                width: "half",
              },
              {
                name: "email",
                label: form.email,
                type: "email",
                required: true,
                autoComplete: "email",
                width: "half",
              },
              {
                name: "phone",
                label: form.phone,
                type: "tel",
                autoComplete: "tel",
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
                name: "guests",
                label: form.guests.label,
                placeholder: form.guests.placeholder,
                width: "half",
              },
              {
                name: "date",
                label: form.date,
                type: "date",
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
      </div>
    </TemplateSection>
  );
}
