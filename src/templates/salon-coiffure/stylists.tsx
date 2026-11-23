import { Check } from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { CtaBand, PageIntro, SIZES } from "./parts";

/**
 * L’équipe : une rangée par styliste (texte, spécialités, jours, réservation)
 * face à une photo carrée de son travail, en alternant les côtés (7/5, puis 5/7).
 */
export function StylistsView({ locale }: { locale: TemplateLocale }) {
  const { stylists } = getTemplateCopy(salonCoiffure, locale);
  const { reservation } = salonCoiffure.paths;

  return (
    <>
      <PageIntro title={stylists.title} description={stylists.description} />
      <TemplateSection tone="raised" density="compact">
        <ul className="divide-y divide-tpl-line">
          {stylists.items.map((member, index) => (
            <li
              key={member.name}
              className="grid gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-12 lg:items-center lg:gap-16"
            >
              <div
                className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <h2 className="font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {member.name}
                </h2>
                <p className="mt-2 text-tpl-lg text-tpl-eyebrow">
                  {member.role}
                </p>
                <p className="mt-5 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
                  {member.text}
                </p>
                <h3 className="mt-6 text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
                  {stylists.specialtiesLabel}
                </h3>
                <ul className="mt-3 space-y-2">
                  {member.specialties.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check
                        aria-hidden="true"
                        className="size-4 shrink-0 text-tpl-eyebrow"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-tpl-sm text-tpl-ink-muted">
                  {member.days}
                </p>
                <div className="mt-4">
                  <TemplateLink
                    href={templateHref(locale, reservation)}
                    shape="pill"
                  >
                    {member.book}
                  </TemplateLink>
                </div>
              </div>
              <div className="lg:col-span-5">
                <TemplateMedia
                  src={member.image.src}
                  alt={member.image.alt}
                  ratio="1/1"
                  sizes={SIZES.COL5_G64}
                />
              </div>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <CtaBand
        locale={locale}
        title={stylists.cta.title}
        text={stylists.cta.text}
      />
    </>
  );
}
