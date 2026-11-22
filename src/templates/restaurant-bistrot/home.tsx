import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateHeroMedia } from "@/components/template-kit/media";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

/** Accueil : héros plein écran avec la carte « ce soir », puis « le lieu ». */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const href = (path: string) => templateHref(locale, path);
  const { paths } = restaurantBistrot;
  const { hero, tonight, place } = copy.home;

  return (
    <>
      <TemplateHeroMedia
        src={hero.image.src}
        alt={hero.image.alt}
        height="screen"
        priority
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-end px-4 pt-[calc(var(--tpl-header-offset)+4rem)] pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid w-full items-end gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div className="max-w-3xl">
              <TemplateHeading
                as="h1"
                scale="title"
                eyebrow={hero.eyebrow}
                title={hero.title}
                description={hero.description}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TemplateLink
                  href={href(paths.reservation)}
                  variant="outline"
                  className="bg-tpl-ink/8 hover:bg-tpl-ink/14"
                >
                  {copy.cta.bookTable}
                </TemplateLink>
                <TemplateLink href={href(paths.menu)} variant="inverse">
                  {copy.cta.seeMenu}
                </TemplateLink>
              </div>
            </div>

            <TemplatePanel
              tone="inverse"
              className="bg-tpl-raised/85 backdrop-blur"
            >
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {tonight.eyebrow}
              </p>
              <p className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {tonight.title}
              </p>
              <ul className="mt-8 grid gap-3">
                {tonight.points.map((point) => (
                  <li
                    key={point}
                    className="border border-tpl-line bg-tpl-ink/6 px-4 py-4 text-tpl-sm text-tpl-ink-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </TemplatePanel>
          </div>
        </div>
      </TemplateHeroMedia>

      <TemplateSection
        density="compact"
        eyebrow={place.eyebrow}
        title={place.title}
        description={place.description}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {place.items.map((item, index) => (
            <TemplatePanel
              key={item}
              tone={index % 2 === 0 ? "raised" : "inverse"}
              className="text-tpl-lg font-semibold"
            >
              {item}
            </TemplatePanel>
          ))}
        </div>
      </TemplateSection>
    </>
  );
}
