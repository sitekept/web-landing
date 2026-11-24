import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { CtaBand, PageIntro, SIZES } from "./parts";

/**
 * Prestations : titre, tarifs en deux colonnes (coupes, couleur, coiffage,
 * soins), ce qu’il faut savoir avant le rendez-vous, puis la bande de
 * réservation.
 */
export function PrestationsView({ locale }: { locale: TemplateLocale }) {
  const { prestations } = getTemplateCopy(salonCoiffure, locale);
  const { advice } = prestations;

  return (
    <>
      <PageIntro
        title={prestations.title}
        description={prestations.description}
      />
      <TemplateSection tone="raised" density="compact">
        <PriceList groups={prestations.groups} titleAs="h2" columns={2} />
        <p className="mt-10 text-tpl-sm text-tpl-ink-muted">
          {prestations.note}
        </p>
      </TemplateSection>
      <TemplateSection tone="surface">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <TemplateHeading title={advice.title} />
            <ul className="mt-8">
              {advice.items.map((item) => (
                <li
                  key={item.title}
                  className="border-t border-tpl-line py-5 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <TemplateMedia
              src={advice.image.src}
              alt={advice.image.alt}
              ratio="4/3"
              sizes={SIZES.COL5_G64}
            />
          </div>
        </div>
      </TemplateSection>
      <CtaBand
        locale={locale}
        title={prestations.cta.title}
        text={prestations.cta.text}
      />
    </>
  );
}
