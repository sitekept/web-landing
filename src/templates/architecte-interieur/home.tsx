import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { HomeChapters, HomeJournal, HomeStories } from "./home-sections";
import { EYEBROW } from "./parts";

/** Accueil : manifeste et collage, sommaire en chapitres, cas phare, journal. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const { home } = getTemplateCopy(architecteInterieur, locale);
  const { paths } = architecteInterieur;
  const { hero } = home;

  return (
    <>
      <TemplateSection
        density="compact"
        tone="surface"
        className="overflow-hidden border-b border-tpl-line"
      >
        <div className="grid gap-10 xl:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <TemplateHeading
              as="h1"
              scale="display"
              className="xl:[&_h1]:text-[4.5rem] xl:[&_h1]:leading-tpl-display"
              eyebrow={hero.eyebrow}
              title={hero.title}
              description={hero.text}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TemplateLink
                href={templateHref(locale, paths.projets)}
                variant="outline"
                shape="square"
                icon={false}
              >
                {hero.projects}
              </TemplateLink>
              <TemplateLink
                href={templateHref(locale, paths.contact)}
                variant="outline"
                shape="square"
                icon={false}
              >
                {hero.brief}
              </TemplateLink>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[0.75fr_1.25fr]">
            <div className="grid gap-5 pt-10">
              <TemplateMedia
                src={hero.imageSide.src}
                alt={hero.imageSide.alt}
                ratio="fill"
                rounded="none"
                sizes="(min-width: 1280px) 190px, (min-width: 640px) 30vw, 100vw"
                className="min-h-[240px] border border-tpl-line transition duration-700 hover:-translate-y-2 motion-reduce:hover:translate-none"
              />
              <TemplatePanel tone="tint">
                <p className={EYEBROW}>{hero.position.eyebrow}</p>
                <p className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {hero.position.text}
                </p>
              </TemplatePanel>
            </div>
            <TemplateMedia
              src={hero.imageMain.src}
              alt={hero.imageMain.alt}
              ratio="fill"
              rounded="none"
              priority
              sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
              className="min-h-[560px] border border-tpl-line transition duration-700 hover:translate-y-2 motion-reduce:hover:translate-none"
            />
          </div>
        </div>
      </TemplateSection>
      <HomeChapters locale={locale} />
      <HomeStories locale={locale} />
      <HomeJournal locale={locale} />
    </>
  );
}
