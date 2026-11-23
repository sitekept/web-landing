import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge, SIZES } from "./parts";

/**
 * Technologies : texte et trois repères à gauche (5 colonnes) sur fond
 * inverse, radiographie à droite (7 colonnes).
 */
export function HomeTech({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.home.technologies;

  return (
    <TemplateSection tone="inverse">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <TemplateHeading
            scale="subtitle"
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <ul className="mt-8 space-y-6">
            {page.items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <IconBadge icon={item.icon} />
                <div>
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, dentiste.paths.technologies)}
              variant="inverse"
            >
              {copy.cta.seeTechnologies}
            </TemplateLink>
          </div>
        </div>
        <div className="lg:col-span-7">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="3/2"
            sizes={SIZES.COL7_LG}
          />
        </div>
      </div>
    </TemplateSection>
  );
}
