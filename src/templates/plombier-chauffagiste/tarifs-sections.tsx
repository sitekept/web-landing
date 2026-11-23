import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge } from "./parts";

type Props = { locale: TemplateLocale };

/** Offre : la carte des tarifs de départ (élément 21st.dev `price-list`). */
export function PriceListSection({ locale }: Props) {
  const list = getTemplateCopy(plombierChauffagiste, locale).tarifs.list;

  return (
    <TemplateSection
      eyebrow={list.eyebrow}
      title={list.title}
      description={list.description}
    >
      <div className="rounded-tpl border border-tpl-line bg-tpl-raised p-6 shadow-tpl-sm sm:p-10">
        <PriceList groups={list.groups} titleAs="h3" columns={2} />
        <p className="mt-10 border-t border-tpl-line pt-5 text-tpl-sm text-tpl-ink-muted">
          {list.footnote}
        </p>
      </div>
    </TemplateSection>
  );
}

/** Preuve : ce que couvre le prix annoncé, photo à gauche. */
export function IncludedSection({ locale }: Props) {
  const included = getTemplateCopy(plombierChauffagiste, locale).tarifs
    .included;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
        <TemplateMedia
          src={included.image.src}
          alt={included.image.alt}
          ratio="4/5"
          sizes="(min-width: 512px) 750px, calc(159vw - 30px)"
          className="max-w-md lg:max-w-none"
        />
        <div>
          <TemplateHeading
            eyebrow={included.eyebrow}
            title={included.title}
            description={included.description}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {included.items.map((item) => (
              <li key={item.title}>
                <TemplateCard
                  title={item.title}
                  titleAs="h3"
                  icon={<IconBadge icon={item.icon} trade="water" />}
                  elevation="flat"
                  className="h-full"
                >
                  {item.text}
                </TemplateCard>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-tpl-sm text-tpl-ink-muted">
            {included.aside}
          </p>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Rupture : les majorations, annoncées avant le départ. Fond teal. */
export function SurchargesSection({ locale }: Props) {
  const surcharges = getTemplateCopy(plombierChauffagiste, locale).tarifs
    .surcharges;

  return (
    <TemplateSection
      tone="inverse"
      eyebrow={surcharges.eyebrow}
      title={surcharges.title}
      description={surcharges.description}
    >
      <dl className="divide-y divide-tpl-line border-y border-tpl-line">
        {surcharges.rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 md:grid-cols-[1.4fr_1fr_auto]"
          >
            <dt className="col-span-2 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight) md:col-span-1">
              {row.label}
            </dt>
            <dd className="text-tpl-base tabular-nums">{row.hours}</dd>
            <dd className="text-tpl-xl leading-none font-semibold tabular-nums">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-tpl-measure text-tpl-base">{surcharges.note}</p>
    </TemplateSection>
  );
}

/** Le devis signé avant les travaux : trois étapes et une photo. */
export function QuoteSection({ locale }: Props) {
  const quote = getTemplateCopy(plombierChauffagiste, locale).tarifs.quote;

  return (
    <TemplateSection>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
        <div>
          <TemplateHeading
            eyebrow={quote.eyebrow}
            title={quote.title}
            description={quote.description}
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-3">
            {quote.steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-tpl border border-tpl-line bg-tpl-raised p-5 shadow-tpl-sm"
              >
                <p
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-tpl-pill bg-tpl-accent font-semibold text-tpl-accent-ink tabular-nums"
                >
                  {index + 1}
                </p>
                <h3 className="mt-4 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <TemplateMedia
          src={quote.image.src}
          alt={quote.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) 512px, calc(96vw - 20px)"
        />
      </div>
    </TemplateSection>
  );
}
