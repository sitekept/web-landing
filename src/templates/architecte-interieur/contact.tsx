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
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { BLOCK_TITLE, FOCUS, ROW_TITLE } from "./parts";

/** Contact : formulaire de demande, coordonnées du studio, puis la suite en trois temps. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
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
      name: "phone",
      label: labels.phone,
      type: "tel",
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
      name: "place",
      label: labels.place,
      type: "select",
      placeholder: labels.placePlaceholder,
      options: labels.places,
      width: "half",
    },
    {
      name: "budget",
      label: labels.budget,
      type: "select",
      placeholder: labels.budgetPlaceholder,
      options: labels.budgets,
      width: "half",
    },
    { name: "message", label: labels.message, type: "textarea" },
  ];

  return (
    <>
      <TemplateSection density="compact" tone="surface">
        <TemplateHeading
          as="h1"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <TemplatePanel tone="tint" className="p-6 sm:p-8">
            <h2 className={BLOCK_TITLE}>{page.form.title}</h2>
            <p className="mt-3 mb-6 text-tpl-sm text-tpl-ink-muted">
              {page.form.intro}
            </p>
            <TemplateDemoForm
              fields={fields}
              submitLabel={page.form.submit}
              locale={locale}
            />
          </TemplatePanel>
          <div>
            <h2 className={BLOCK_TITLE}>{page.details.title}</h2>
            <dl className="mt-6 border-t border-tpl-ink text-tpl-base">
              <div className="border-b border-tpl-line py-4">
                <dt className="text-tpl-sm text-tpl-ink-muted">
                  {page.details.phoneLabel}
                </dt>
                <dd>
                  <a
                    href={copy.common.phone.href}
                    className={`inline-flex min-h-11 items-center font-semibold tabular-nums underline underline-offset-4 ${FOCUS}`}
                  >
                    {copy.common.phone.label}
                  </a>
                </dd>
              </div>
              <div className="border-b border-tpl-line py-4">
                <dt className="text-tpl-sm text-tpl-ink-muted">
                  {page.details.emailLabel}
                </dt>
                <dd className="break-words">{copy.common.email}</dd>
              </div>
              <div className="border-b border-tpl-line py-4">
                <dt className="text-tpl-sm text-tpl-ink-muted">
                  {page.details.addressLabel}
                </dt>
                <dd>
                  {copy.common.address}
                  <span className="block text-tpl-sm text-tpl-ink-muted">
                    {page.details.access}
                  </span>
                </dd>
              </div>
              <div className="border-b border-tpl-line py-4">
                <dt className="text-tpl-sm text-tpl-ink-muted">
                  {copy.common.hoursLabel}
                </dt>
                <dd>{copy.common.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </TemplateSection>

      <TemplateSection density="compact" tone="raised" title={page.next.title}>
        <ol className="grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,13rem),1fr))] gap-x-12 gap-y-8">
          {page.next.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-tpl-ink pt-4">
              <p
                aria-hidden="true"
                className="text-tpl-sm font-semibold text-tpl-ink-muted tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className={`${ROW_TITLE} mt-2`}>{step.title}</h3>
              <p className="mt-2 text-tpl-sm text-pretty text-tpl-ink-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </TemplateSection>
    </>
  );
}
