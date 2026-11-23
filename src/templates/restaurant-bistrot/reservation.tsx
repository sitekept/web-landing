import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { TemplateMedia } from "@/components/template-kit/media";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP } from "./parts";

/** Réservation : formulaire (7/12), repères pratiques et photo (5/12). */
export function ReservationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { reservation } = copy;
  const { form, aside } = reservation;

  return (
    <TemplateSection
      as="h1"
      eyebrow={reservation.eyebrow}
      title={reservation.title}
      description={reservation.description}
      className={FIRST_SECTION_TOP}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <TemplatePanel tone="raised" className="p-6 sm:p-10 lg:col-span-7">
          <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {form.title}
          </h2>
          <TemplateDemoForm
            locale={locale}
            className="mt-8"
            submitLabel={form.submit}
            fields={[
              {
                name: "date",
                label: form.date,
                type: "date",
                required: true,
                width: "half",
              },
              {
                name: "service",
                label: form.service,
                type: "select",
                options: form.services,
                placeholder: form.choose,
                required: true,
                width: "half",
              },
              {
                name: "guests",
                label: form.guests,
                type: "select",
                options: form.guestOptions,
                placeholder: form.choose,
                required: true,
              },
              {
                name: "name",
                label: form.name,
                required: true,
                autoComplete: "name",
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
                name: "email",
                label: form.email,
                type: "email",
                required: true,
                autoComplete: "email",
              },
              { name: "note", label: form.note, type: "textarea" },
            ]}
          />
        </TemplatePanel>

        <div className="lg:col-span-5">
          <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {aside.title}
          </h2>
          <ul className="mt-6">
            {aside.items.map((item) => (
              <li
                key={item}
                className="border-b border-tpl-line py-4 text-tpl-base first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-3">
            <TemplateLink
              href={copy.phone.href}
              className="tabular-nums"
              icon={false}
            >
              {copy.cta.call} {copy.phone.label}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, restaurantBistrot.paths.privatisation)}
              variant="outline"
            >
              {aside.groupLink}
            </TemplateLink>
          </div>
          <TemplateMedia
            src={aside.image.src}
            alt={aside.image.alt}
            ratio="3/2"
            sizes="(min-width: 1280px) 469px, (min-width: 1024px) 36vw, 92vw"
            className="mt-10"
          />
        </div>
      </div>
    </TemplateSection>
  );
}
