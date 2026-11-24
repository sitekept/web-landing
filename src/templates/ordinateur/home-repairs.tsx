import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/**
 * Réparations : texte et photo collés à gauche (4 colonnes), liste de prix à
 * droite (8) en lignes séparées par des filets, prix et délai en colonne.
 */
export function HomeRepairs({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.repairs;

  return (
    <TemplateSection id={ANCHORS.repairs} density="compact">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <TemplateHeading
            id="reparations-titre"
            title={page.title}
            description={page.description}
          />
          <p className="mt-4 text-tpl-sm font-semibold">{page.tabletNote}</p>
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="3/2"
            sizes="(min-width: 1344px) 384px, (min-width: 1024px) 25vw, (min-width: 768px) 512px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            className="mt-8 md:max-w-lg lg:max-w-none"
          />
        </div>
        <ul className="border-b border-tpl-line lg:col-span-8">
          {page.items.map((item) => (
            <li
              key={item.name}
              className="grid gap-x-8 gap-y-3 border-t border-tpl-line py-6 sm:grid-cols-[1fr_11rem]"
            >
              <div>
                <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.name}
                </h3>
                <p className="mt-2 max-w-tpl-measure text-tpl-ink-muted">
                  {item.description}
                </p>
              </div>
              <dl className="flex items-baseline justify-between gap-4 sm:block sm:text-right">
                <div>
                  <dt className="text-tpl-xs text-tpl-ink-muted">
                    {page.fromLabel}
                  </dt>
                  <dd className="font-mono text-tpl-xl leading-tpl-display font-bold text-tpl-accent tabular-nums">
                    {item.price}
                  </dd>
                </div>
                <div className="text-tpl-sm text-tpl-ink-muted sm:mt-2">
                  <dt className="inline">{page.delayLabel}</dt>{" "}
                  <dd className="inline tabular-nums">{item.delay}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
