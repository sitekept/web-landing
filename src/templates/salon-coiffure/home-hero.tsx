import { Sparkles, Star } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  salonCoiffure,
  type SalonCoiffureCopy,
} from "@/content/templates/salon-coiffure";

import { Eyebrow, HERO_VEIL } from "./parts";

/**
 * Héros : manifeste à gauche, collage décalé à droite (petite photo, carte
 * sombre « Signature », grande photo qui porte une carte d’avis en
 * surimpression, débordante). Le premier bloc passe sous l’en-tête flottant.
 */
export function HomeHero({
  locale,
  hero,
}: {
  locale: TemplateLocale;
  hero: SalonCoiffureCopy["home"]["hero"];
}) {
  const { paths } = salonCoiffure;

  return (
    <TemplateSection
      tone="bare"
      className={`overflow-hidden pt-[calc(var(--tpl-header-offset)+3rem)] pb-16 lg:pt-[calc(var(--tpl-header-offset)+6rem)] lg:pb-24 ${HERO_VEIL}`}
    >
      <div className="grid gap-8 pt-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl self-center">
          <p className="inline-flex items-center gap-2 rounded-tpl-pill bg-tpl-raised px-4 py-2 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase shadow-tpl-sm">
            <Sparkles aria-hidden="true" className="size-4" />
            {hero.eyebrow}
          </p>
          <TemplateHeading
            as="h1"
            className="mt-6"
            title={hero.title}
            description={hero.text}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={templateHref(locale, paths.reservation)}
              shape="pill"
            >
              {hero.book}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, paths.lookbook)}
              variant="outline"
              shape="pill"
              className="border-transparent bg-tpl-raised hover:border-transparent hover:bg-tpl-raised"
            >
              {hero.lookbook}
            </TemplateLink>
          </div>
        </div>

        <div className="relative grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="grid gap-4 pt-10">
            <TemplateMedia
              src={hero.imageSide.src}
              alt={hero.imageSide.alt}
              ratio="fill"
              sizes="(min-width: 1024px) 230px, 100vw"
              className="min-h-[220px]"
            />
            <TemplatePanel tone="inverse">
              <Eyebrow>{hero.signature.eyebrow}</Eyebrow>
              <p className="mt-4 font-tpl-display text-tpl-lg leading-tight font-(weight:--tpl-display-weight)">
                {hero.signature.text}
              </p>
            </TemplatePanel>
          </div>

          <div className="relative">
            <TemplateMedia
              src={hero.imageMain.src}
              alt={hero.imageMain.alt}
              ratio="fill"
              priority
              sizes="(min-width: 1024px) 360px, 100vw"
              className="h-auto min-h-[520px] shadow-tpl-lg"
            />
            <TemplatePanel className="absolute right-6 -bottom-6 left-6 bg-tpl-raised/90 p-5 shadow-tpl-lg backdrop-blur-md transition duration-500 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-none">
              <div
                aria-hidden="true"
                className="flex items-center gap-2 text-tpl-eyebrow"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {hero.review}
              </p>
            </TemplatePanel>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
