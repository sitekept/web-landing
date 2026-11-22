import { Sparkles } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateHeroMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Héros plein écran : photo de carte électronique, titre, deux boutons. */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.hero;
  const anchor = (id: string) =>
    templateHref(locale, `${ordinateur.paths.home}#${id}`);

  return (
    <section id={ANCHORS.home} aria-labelledby="accueil-titre">
      <TemplateHeroMedia
        src={page.image.src}
        alt={page.image.alt}
        height="screen"
        priority
      >
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-6 flex items-center justify-center gap-3 text-tpl-lg font-medium text-tpl-eyebrow">
            <Sparkles aria-hidden="true" className="size-8 shrink-0" />
            {page.badge}
            <Sparkles aria-hidden="true" className="size-8 shrink-0" />
          </p>
          <TemplateHeading
            as="h1"
            scale="display"
            align="center"
            id="accueil-titre"
            title={
              <>
                {page.titleStart}
                <span className="block text-tpl-eyebrow">
                  {page.titleAccent}
                </span>
              </>
            }
            description={page.description}
            className="[&>p]:max-w-3xl"
          />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TemplateLink
              href={anchor(ANCHORS.services)}
              icon={false}
              className="px-8 py-3 text-tpl-base"
            >
              {page.seeServices}
            </TemplateLink>
            <TemplateLink
              href={anchor(ANCHORS.contact)}
              variant="outline"
              icon={false}
              className="border-tpl-ink px-8 py-3 text-tpl-base hover:bg-tpl-ink hover:text-tpl-inverse"
            >
              {page.freeDiagnostic}
            </TemplateLink>
          </div>
        </div>
      </TemplateHeroMedia>
    </section>
  );
}
