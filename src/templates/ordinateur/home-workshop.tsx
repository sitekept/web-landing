import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS } from "./parts";

/** Atelier : texte et trois engagements à gauche, photo de soudure à droite (1/1). */
export function HomeWorkshop({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.workshop;

  return (
    <TemplateSection id={ANCHORS.workshop} tone="raised" density="compact">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <TemplateHeading
            id="atelier-titre"
            title={page.title}
            description={page.description}
          />
          <ul className="mt-10 border-b border-tpl-line">
            {page.points.map((point) => {
              const Icon = ICONS[point.icon];

              return (
                <li
                  key={point.title}
                  className="flex gap-4 border-t border-tpl-line py-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-1 size-6 shrink-0 text-tpl-accent"
                  />
                  <div>
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="mt-1 text-tpl-ink-muted">{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="3/2"
          sizes="(min-width: 1344px) 608px, (min-width: 1024px) 45vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          className="max-lg:order-first"
        />
      </div>
    </TemplateSection>
  );
}
