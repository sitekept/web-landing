import { Phone } from "lucide-react";

import {
  TemplateLink,
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

import { HoursList, PageIntro, SIZES } from "./parts";

/**
 * Réservation : formulaire de demande à gauche (7/12), à droite la photo, les
 * formules les plus réservées et ce qu’il faut savoir (conditions, appel).
 */
export function ReservationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { reservation } = copy;
  const { form, formulas, policy } = reservation;
  const fields: TemplateFormField[] = [
    {
      name: "service",
      label: form.service.label,
      type: "select",
      required: true,
      placeholder: form.service.placeholder,
      options: form.service.options,
    },
    {
      name: "stylist",
      label: form.stylist.label,
      type: "select",
      width: "half",
      placeholder: form.stylist.placeholder,
      options: form.stylist.options,
    },
    {
      name: "date",
      label: form.date.label,
      type: "date",
      width: "half",
      required: true,
    },
    {
      name: "slot",
      label: form.slot.label,
      type: "select",
      placeholder: form.slot.placeholder,
      options: form.slot.options,
    },
    {
      name: "name",
      label: form.name.label,
      width: "half",
      required: true,
      autoComplete: "name",
    },
    {
      name: "phone",
      label: form.phone.label,
      type: "tel",
      width: "half",
      required: true,
      autoComplete: "tel",
    },
    {
      name: "email",
      label: form.email.label,
      type: "email",
      autoComplete: "email",
    },
  ];

  return (
    <>
      <PageIntro
        title={reservation.title}
        description={reservation.description}
      />
      <TemplateSection tone="surface" density="compact">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <TemplatePanel tone="raised" className="p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {form.title}
            </h2>
            <TemplateDemoForm
              className="mt-8"
              locale={locale}
              fields={fields}
              submitLabel={form.submit}
            />
          </TemplatePanel>
          <div className="grid gap-6 lg:col-span-5">
            <TemplateMedia
              src={policy.image.src}
              alt={policy.image.alt}
              ratio="4/3"
              sizes={SIZES.COL5_G40}
            />
            <TemplatePanel tone="raised">
              <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {formulas.title}
              </h2>
              <ul className="mt-5 space-y-4">
                {formulas.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{item.name}</span>
                      <span className="block text-tpl-sm text-tpl-ink-muted">
                        {item.detail}
                      </span>
                    </span>
                    <span className="shrink-0 font-medium tabular-nums">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </TemplatePanel>
            <TemplatePanel tone="inverse">
              <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {policy.title}
              </h2>
              <ul className="mt-4 space-y-3 text-tpl-sm text-tpl-ink-muted">
                {policy.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-5">
                <TemplateLink
                  href={copy.common.phone.href}
                  variant="inverse"
                  shape="pill"
                  icon={<Phone aria-hidden="true" className="size-4" />}
                  className="tabular-nums"
                >
                  {copy.common.phone.label}
                </TemplateLink>
              </div>
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>
      <TemplateSection tone="raised" density="compact">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) md:col-span-5">
            {copy.common.hoursLabel}
          </h2>
          <div className="md:col-span-7">
            <HoursList locale={locale} />
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
