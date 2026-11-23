import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Groupes montrés sur l’accueil (coupes, couleur, soins), trois lignes chacun. */
const HOME_GROUPS = [0, 1, 3] as const;

/** Prestations : liste de prix à gauche, photo portrait à droite (7/5). */
export function PricesSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { prices } = copy.home;
  const groups = HOME_GROUPS.map((index) => ({
    title: copy.prestations.groups[index].title,
    items: copy.prestations.groups[index].items.slice(0, 3),
  }));

  return (
    <TemplateSection
      tone="raised"
      title={prices.title}
      description={prices.description}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <PriceList groups={groups} />
          <p className="mt-8 text-tpl-sm text-tpl-ink-muted">
            {copy.prestations.note}
          </p>
          <div className="mt-6">
            <TemplateLink
              href={templateHref(locale, salonCoiffure.paths.prestations)}
              variant="outline"
              shape="pill"
            >
              {prices.link}
            </TemplateLink>
          </div>
        </div>
        <div className="lg:col-span-5">
          <TemplateMedia
            src={prices.image.src}
            alt={prices.image.alt}
            ratio="4/5"
            sizes="(min-width: 1280px) 495px, (min-width: 1024px) 41vw, 100vw"
          />
        </div>
      </div>
    </TemplateSection>
  );
}

/** Déroulé d’un rendez-vous : titre à gauche, trois temps numérotés à droite. */
export function MethodSection({ locale }: { locale: TemplateLocale }) {
  const { method } = getTemplateCopy(salonCoiffure, locale).home;

  return (
    <TemplateSection tone="surface">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <TemplateHeading
          className="lg:col-span-5"
          title={method.title}
          description={method.description}
        />
        <ol className="lg:col-span-7">
          {method.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-t border-tpl-line py-7 first:border-t-0 first:pt-0"
            >
              <span
                aria-hidden="true"
                className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-eyebrow tabular-nums"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </TemplateSection>
  );
}
