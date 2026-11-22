import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS } from "./parts";

/** À propos : fond ardoise, texte et chiffres à gauche, photo et pastille bleue à droite. */
export function HomeAbout({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.about;

  return (
    <TemplateSection id={ANCHORS.about} tone="inverse" density="compact">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <TemplateHeading title={page.title} />
          <div className="mt-6 space-y-6 text-tpl-base">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-6">
            {page.stats.map((stat) => {
              const Icon = ICONS[stat.icon];

              return (
                <li key={stat.label} className="text-center">
                  <Icon
                    aria-hidden="true"
                    className="mx-auto mb-2 size-12 text-tpl-eyebrow"
                  />
                  <p className="text-tpl-lg font-bold text-tpl-eyebrow">
                    {stat.value}
                  </p>
                  <p className="text-tpl-sm">{stat.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="1/1"
            sizes="(min-width: 1280px) 590px, (min-width: 1024px) 45vw, 100vw"
            className="shadow-tpl-lg"
          />
          <div className="absolute right-4 bottom-4 rounded-tpl bg-tpl-accent p-6 text-center text-tpl-accent-ink shadow-tpl-lg lg:-right-6 lg:-bottom-6">
            <p className="text-tpl-xl font-bold">{page.badge.value}</p>
            <p className="text-tpl-sm font-medium">{page.badge.label}</p>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
