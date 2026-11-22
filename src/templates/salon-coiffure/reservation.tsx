import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { Eyebrow } from "./parts";

/** Réservation : trois formules à gauche, carte sombre « Booking » à droite. */
export function ReservationView({ locale }: { locale: TemplateLocale }) {
  const { reservation } = getTemplateCopy(salonCoiffure, locale);
  const { panel } = reservation;

  return (
    <TemplateSection
      as="h1"
      tone="raised"
      density="compact"
      titleScale="subtitle"
      className="flex-1 pt-[calc(var(--tpl-header-offset)+4rem)]"
      eyebrow={reservation.eyebrow}
      title={reservation.title}
      description={reservation.description}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <ul className="grid gap-4">
          {reservation.items.map((item) => (
            <li key={item}>
              <TemplatePanel
                tone="surface"
                className="text-tpl-sm text-tpl-ink-muted"
              >
                {item}
              </TemplatePanel>
            </li>
          ))}
        </ul>
        <TemplatePanel tone="inverse">
          <Eyebrow>{panel.eyebrow}</Eyebrow>
          <p className="mt-4 font-tpl-display text-tpl-xl leading-tight font-(weight:--tpl-display-weight)">
            {panel.text}
          </p>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, salonCoiffure.paths.stylists)}
              variant="inverse"
              shape="pill"
            >
              {panel.link}
            </TemplateLink>
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
