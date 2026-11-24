import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Honoraires : titre et note à gauche (5 colonnes), tableau des tarifs de
 * départ à droite (7 colonnes). L'ancre `#honoraires` est celle du bouton du hero.
 */
export function HomeFees({ locale }: { locale: TemplateLocale }) {
  const { fees } = getTemplateCopy(cabinetAvocat, locale).home;

  return (
    <TemplateSection id="honoraires" density="compact">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <TemplateHeading
            eyebrow={fees.eyebrow}
            title={fees.title}
            description={fees.description}
          />
          <p className="mt-6 max-w-tpl-measure text-tpl-sm text-pretty text-tpl-ink-muted">
            {fees.note}
          </p>
          <TemplateLink
            href={templateHref(locale, cabinetAvocat.paths.consultation)}
            icon={false}
            className="mt-8"
          >
            {fees.cta}
          </TemplateLink>
        </div>
        <dl className="divide-y divide-tpl-line border-y border-tpl-ink lg:col-span-7">
          {fees.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-x-8"
            >
              <dt className="font-semibold">{row.label}</dt>
              <dd className="font-semibold tabular-nums sm:row-span-2 sm:text-right">
                {row.price}
              </dd>
              <dd className="text-tpl-sm text-pretty text-tpl-ink-muted">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </TemplateSection>
  );
}
