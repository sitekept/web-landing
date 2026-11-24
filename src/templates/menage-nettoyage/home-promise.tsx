import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS, SPLIT_CLASS } from "./parts";

/** Accueil, fond sombre : avis à gauche (5 colonnes), trois engagements à droite (7). */
export function HomePromise({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).home.promise;

  return (
    <TemplateSection tone="inverse" density="regular">
      <div className={SPLIT_CLASS}>
        <div className="lg:col-span-5">
          <TemplateHeading eyebrow={page.eyebrow} title={page.title} />
          <figure className="mt-8 border-l-2 border-tpl-ink pl-6">
            <blockquote className="max-w-tpl-measure text-tpl-lg leading-tpl-body text-pretty">
              <p>{page.quote.text}</p>
            </blockquote>
            <figcaption className="mt-4 text-tpl-sm text-tpl-ink-muted">
              {page.quote.author}
            </figcaption>
          </figure>
        </div>
        <ul className="divide-y divide-tpl-line border-y border-tpl-line lg:col-span-7 lg:self-center">
          {page.items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <li key={item.title} className="flex gap-4 py-6">
                <Icon aria-hidden="true" className="mt-1 size-6 shrink-0" />
                <div>
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </TemplateSection>
  );
}
