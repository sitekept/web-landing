import {
  TemplateHeading,
  TemplateLink,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateHeroMedia } from "@/components/template-kit/media";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

/** Héros de l'accueil : photo sombre, titre `h1`, deux liens, note à droite. */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(avocate, locale);
  const { hero } = copy.home;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateHeroMedia
      src={hero.image.src}
      alt={hero.image.alt}
      height="auto"
      priority
      className="border-b border-tpl-line lg:min-h-[620px]"
    >
      <div className="w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <TemplateHeading
                as="h1"
                scale="display"
                eyebrow={hero.eyebrow}
                title={hero.title}
                description={hero.description}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TemplateLink
                  href={href(avocate.paths.contact)}
                  variant="inverse"
                >
                  {copy.cta.contact}
                </TemplateLink>
                <TemplateLink
                  href={href(avocate.paths.expertises)}
                  variant="outline"
                  icon={false}
                >
                  {copy.cta.seeExpertises}
                </TemplateLink>
              </div>
            </div>

            <div className="border-l border-tpl-line pl-6 text-tpl-sm leading-7 text-tpl-ink-muted lg:max-w-md">
              <p className="font-semibold text-tpl-ink">{hero.aside.title}</p>
              <p className="mt-4">{hero.aside.text}</p>
            </div>
          </div>
        </div>
      </div>
    </TemplateHeroMedia>
  );
}
