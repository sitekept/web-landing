import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS, SPLIT_CLASS, SPLIT_SIZES } from "./parts";

/**
 * Accueil, juste sous le héros : les quatre services à gauche (7 colonnes),
 * la photo à droite (5 colonnes, 4/5 et collante à partir de `lg`).
 */
export function HomeServices({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const page = copy.home.services;

  return (
    <TemplateSection tone="raised" density="regular">
      <div className={SPLIT_CLASS}>
        <div className="lg:col-span-7">
          <TemplateHeading
            title={page.title}
            description={page.description}
            scale="title"
          />
          <ul className="mt-10 divide-y divide-tpl-line border-y border-tpl-line">
            {page.items.map((item) => {
              const Icon = ICONS[item.icon];

              return (
                <li key={item.title} className="flex gap-4 py-6">
                  <Icon
                    aria-hidden="true"
                    className="mt-1 size-6 shrink-0 text-tpl-eyebrow"
                  />
                  <div>
                    <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                      {item.text}
                    </p>
                    <p className="mt-2 text-tpl-sm font-semibold tabular-nums">
                      {item.meta}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <TemplateLink
            href={templateHref(locale, menageNettoyage.paths.formules)}
            variant="outline"
            icon={false}
            className="mt-8"
          >
            {page.link}
          </TemplateLink>
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/3"
              sizes={SPLIT_SIZES}
              className="lg:aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
