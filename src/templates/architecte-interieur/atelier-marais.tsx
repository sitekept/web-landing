import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { EYEBROW, PanelText } from "./parts";

/** Étude de cas « Appartement atelier, Le Marais » : parti pris et résultat. */
export function AtelierMaraisView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).atelierMarais;

  return (
    <TemplateSection
      density="compact"
      tone="tint"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          {page.points.map((point) => (
            <TemplatePanel key={point} tone="tint">
              <PanelText>{point}</PanelText>
            </TemplatePanel>
          ))}
        </div>

        <TemplatePanel tone="inverse">
          <p className={EYEBROW}>{page.result.eyebrow}</p>
          <p className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {page.result.text}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <TemplateMedia
              src={page.result.imageBedroom.src}
              alt={page.result.imageBedroom.alt}
              ratio="fill"
              rounded="none"
              sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
              className="min-h-[210px]"
            />
            <TemplateMedia
              src={page.result.imageHouse.src}
              alt={page.result.imageHouse.alt}
              ratio="fill"
              rounded="none"
              sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
              className="min-h-[210px]"
            />
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
