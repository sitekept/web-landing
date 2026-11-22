import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge, type Trade } from "./parts";

type Props = { locale: TemplateLocale };

const TRADES: readonly Trade[] = ["water", "heat"];

const PANEL_EDGE: Record<Trade, string> = {
  water: "border-t-4 border-t-tpl-inverse",
  heat: "border-t-4 border-t-tpl-accent",
};

/** Offre : les dépannages les plus demandés, un panneau par métier. */
export function OfferSection({ locale }: Props) {
  const copy = getTemplateCopy(plombierChauffagiste, locale);
  const { paths } = plombierChauffagiste;
  const offer = copy.home.offer;

  return (
    <TemplateSection
      eyebrow={offer.eyebrow}
      title={offer.title}
      description={offer.description}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {offer.groups.map((group, index) => {
          const trade = TRADES[index];
          const volet = copy.home.hero.volets[index];

          return (
            <TemplatePanel
              key={group.title}
              className={`p-6 shadow-tpl-sm sm:p-8 ${PANEL_EDGE[trade]}`}
            >
              <div className="flex items-center gap-3">
                <IconBadge icon={group.icon} trade={trade} />
                <h3 className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
                  {group.title}
                </h3>
              </div>
              <dl className="mt-6 divide-y divide-tpl-line">
                {group.rows.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-tpl-base">{row.name}</dt>
                    <dd className="shrink-0 font-semibold whitespace-nowrap tabular-nums">
                      {row.price}
                    </dd>
                  </div>
                ))}
              </dl>
              <TemplateLink
                href={templateHref(
                  locale,
                  `${paths.depannages}#${volet.anchor}`
                )}
                variant="ghost"
                className="mt-4 -ml-5"
              >
                {volet.link}
              </TemplateLink>
            </TemplatePanel>
          );
        })}
      </div>
      <p className="mt-6 text-tpl-sm text-tpl-ink-muted">{offer.note}</p>
    </TemplateSection>
  );
}

/** Déroulé d'un dépannage : photo à gauche, quatre étapes numérotées. */
export function StepsSection({ locale }: Props) {
  const steps = getTemplateCopy(plombierChauffagiste, locale).home.steps;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <TemplateHeading
            eyebrow={steps.eyebrow}
            title={steps.title}
            description={steps.description}
          />
          <TemplateMedia
            src={steps.image.src}
            alt={steps.image.alt}
            ratio="4/5"
            sizes="(min-width: 1024px) 420px, 100vw"
            className="mt-8 hidden max-w-sm lg:block"
          />
        </div>
        <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-tpl-line lg:self-center">
          {steps.items.map((step, index) => (
            <li key={step.title} className="relative flex gap-5">
              <span
                aria-hidden="true"
                className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-accent font-semibold text-tpl-accent-ink tabular-nums"
              >
                {index + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
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
