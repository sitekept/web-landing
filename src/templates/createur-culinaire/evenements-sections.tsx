import { Check } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS, RULE } from "./parts";

const EYEBROW =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase";

/** Tableau des formules : une ligne par événement, prix à droite. */
export function EventFormulas({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).evenements.formulas;

  return (
    <TemplateSection
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="border-b border-tpl-ink">
        {page.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li
              key={item.name}
              className={`${RULE} grid gap-6 py-8 lg:grid-cols-[1fr_1.5fr_0.7fr] lg:gap-12 lg:py-10`}
            >
              <div>
                <Icon aria-hidden="true" className="size-6 text-tpl-accent" />
                <h3 className="mt-4 font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
                  {item.name}
                </h3>
                <p className={`${EYEBROW} mt-4`}>{page.guestsLabel}</p>
                <p className="mt-1 text-tpl-sm">{item.guests}</p>
              </div>

              <div>
                <p className={EYEBROW}>{page.includesLabel}</p>
                <ul className="mt-3 grid gap-2 text-tpl-sm sm:grid-cols-2">
                  {item.includes.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:text-right">
                <p className={EYEBROW}>{page.fromLabel}</p>
                <p className="mt-1 font-tpl-display text-tpl-2xl text-tpl-accent tabular-nums">
                  {item.from}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </TemplateSection>
  );
}

/** Ateliers : photo à gauche, trois formats avec leur tarif à droite. */
export function EventWorkshops({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).evenements.workshops;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/5"
          rounded="none"
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) 38vw, 100vw"
        />
        <ul className="border-b border-tpl-ink">
          {page.items.map((item) => (
            <li key={item.title} className={`${RULE} py-6`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="text-tpl-sm font-semibold text-tpl-accent">
                  {item.price}
                </p>
              </div>
              <p className="mt-3 max-w-prose text-tpl-sm text-tpl-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}

/** Livraison, installation et allergènes : trois colonnes sous un filet. */
export function EventLogistics({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).evenements.logistics;

  return (
    <TemplateSection eyebrow={page.eyebrow} title={page.title}>
      <ul className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {page.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li key={item.title} className={`${RULE} pt-6`}>
              <Icon aria-hidden="true" className="size-6 text-tpl-accent" />
              <h3 className="mt-4 font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </TemplateSection>
  );
}
