import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { HoursList, InfoItem } from "./parts";

/** Venir : adresse, horaires, accès (7/12) et panneau de réservation (5/12). */
export function VenirSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { venir } = copy.home;
  const { common } = copy;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection tone="surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-7">
          <TemplateHeading title={venir.title} />
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {common.hoursLabel}
              </p>
              <HoursList rows={common.hours} className="mt-3" />
            </div>
            <dl className="grid content-start gap-8">
              <InfoItem label={venir.addressLabel}>{common.address}</InfoItem>
              <InfoItem label={venir.phoneLabel}>
                <a
                  href={copy.phone.href}
                  className="font-semibold tabular-nums underline-offset-4 hover:underline"
                >
                  {copy.phone.label}
                </a>
              </InfoItem>
              <InfoItem label={venir.accessLabel}>{venir.access}</InfoItem>
            </dl>
          </div>
        </div>

        <TemplatePanel
          tone="inverse"
          className="self-start p-8 lg:col-span-5 lg:p-10"
        >
          <h3 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {venir.panel.title}
          </h3>
          <p className="mt-4 text-tpl-base text-tpl-ink-muted">
            {venir.panel.text}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <TemplateLink
              href={href(restaurantBistrot.paths.reservation)}
              variant="inverse"
            >
              {copy.cta.bookTable}
            </TemplateLink>
            <TemplateLink
              href={copy.phone.href}
              variant="outline"
              icon={false}
              className="tabular-nums"
            >
              {copy.cta.call} {copy.phone.label}
            </TemplateLink>
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
