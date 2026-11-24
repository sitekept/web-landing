import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  cabinetAvocat,
  cabinetAvocatImages,
} from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { COL5_SIZES, LABEL, LINK_OUTLINE } from "./parts";

/**
 * Dès `lg`, la boîte de la photo (portrait 3:4) est plus haute que large (colonne
 * de 372 à 505 px, hauteur du texte 650 à 690 px) : `object-cover` demande alors
 * un fichier large de hauteur × 0,75, soit 490 à 520 px.
 */
const HERO_SIZES = `(min-width: 1024px) 510px, ${COL5_SIZES}`;

/**
 * Hero de l'accueil : promesse, deux boutons et trois repères à gauche
 * (7 colonnes), salle de réunion à droite (5 colonnes, remplit la hauteur).
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const { hero } = getTemplateCopy(cabinetAvocat, locale).home;
  const { paths } = cabinetAvocat;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection density="compact" className="border-b border-tpl-line">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <TemplateHeading
            as="h1"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink href={href(paths.consultation)} icon={false}>
              {hero.primary}
            </TemplateLink>
            <TemplateLink
              href={href(`${paths.home}#honoraires`)}
              variant="outline"
              icon={false}
              className={LINK_OUTLINE}
            >
              {hero.secondary}
            </TemplateLink>
          </div>
          <dl className="mt-10 grid divide-y divide-tpl-line border-y border-tpl-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {hero.facts.map((fact) => (
              <div key={fact.label} className="py-4 sm:px-5 sm:first:pl-0">
                <dt className={LABEL}>{fact.label}</dt>
                <dd className="mt-1.5 text-tpl-base font-semibold">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:col-span-5 lg:aspect-auto">
          <TemplateMedia
            src={cabinetAvocatImages.room}
            alt={hero.imageAlt}
            ratio="fill"
            rounded="none"
            priority
            sizes={HERO_SIZES}
            className="absolute inset-0"
          />
        </div>
      </div>
    </TemplateSection>
  );
}
