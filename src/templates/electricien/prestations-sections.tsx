import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge, ICONS } from "./parts";

type Props = { locale: TemplateLocale };

/** Une prestation par rangée : titre, pour qui / inclus, tarif à partir de. */
export function ServiceList({ locale }: Props) {
  const page = getTemplateCopy(electricien, locale).prestations.list;

  return (
    <TemplateSection density="compact">
      <ol className="divide-y divide-tpl-ink border-y-2 border-tpl-ink">
        {page.items.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-6 py-8 lg:grid-cols-[0.9fr_1.5fr_0.6fr] lg:gap-10"
          >
            <div className="flex items-start gap-4">
              <IconBadge icon={item.icon} />
              <div>
                <p
                  aria-hidden="true"
                  className="text-tpl-xs font-semibold text-tpl-ink-muted tabular-nums"
                >
                  0{index + 1}
                </p>
                <h2 className="text-tpl-lg leading-tpl-display text-balance">
                  {item.title}
                </h2>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                  {page.forLabel}
                </p>
                <p className="mt-2 text-tpl-sm">{item.forWho}</p>
              </div>
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                  {page.includesLabel}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-tpl-sm marker:text-tpl-ink">
                  {item.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="self-start rounded-tpl border border-tpl-ink bg-tpl-raised p-5 shadow-tpl-sm">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {page.fromLabel}
              </p>
              <p className="mt-1 text-tpl-xl leading-none font-extrabold tracking-tighter tabular-nums">
                {item.price}
              </p>
              <p className="mt-2 text-tpl-xs text-tpl-ink-muted">
                {item.priceNote}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-tpl-measure text-tpl-xs text-tpl-ink-muted">
        {page.disclaimer}
      </p>
    </TemplateSection>
  );
}

/** Étapes d'intervention, sur fond graphite. */
export function StepsSection({ locale }: Props) {
  const page = getTemplateCopy(electricien, locale).prestations.steps;

  return (
    <TemplateSection tone="inverse">
      <TemplateHeading
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {page.items.map((item, index) => {
          const Icon = ICONS[item.icon];

          return (
            <li key={item.title} className="border-t-4 border-tpl-accent pt-5">
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="text-tpl-xl leading-none font-extrabold tracking-tighter text-tpl-accent tabular-nums"
                >
                  0{index + 1}
                </span>
                <Icon
                  aria-hidden="true"
                  className="size-6 text-tpl-ink-muted"
                />
              </div>
              <h3 className="mt-5 text-tpl-lg">{item.title}</h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          );
        })}
      </ol>
    </TemplateSection>
  );
}
