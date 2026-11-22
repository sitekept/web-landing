import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP, TextPanels } from "./parts";

/** Réservation : trois formules à gauche, un encart et le lien vers la privatisation. */
export function ReservationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { reservation } = copy;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      tone="inverse"
      eyebrow={reservation.eyebrow}
      title={reservation.title}
      description={reservation.description}
      className={FIRST_SECTION_TOP}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <TextPanels items={reservation.items} columns={1} />
        <TemplatePanel tone="surface">
          <p className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {reservation.aside}
          </p>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, restaurantBistrot.paths.privatisation)}
              variant="inverse"
            >
              {copy.cta.seePrivatisation}
            </TemplateLink>
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
