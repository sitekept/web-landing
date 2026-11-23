import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { fleuriste } from "@/content/templates/fleuriste";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, EYEBROW, FillPhoto } from "./parts";

const PANEL_LABEL = `${EYEBROW} text-tpl-sm`;

/** Accueil : titre centré, puis trois colonnes (vision, grande photo, positionnement). */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(fleuriste, locale);
  const page = copy.hero;
  const anchor = (id: string) =>
    templateHref(locale, `${fleuriste.paths.home}#${id}`);

  return (
    <TemplateSection
      id={ANCHORS.home}
      tone="surface"
      density="compact"
      className="border-b border-tpl-line"
    >
      <ScrollReveal distance={18} className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-tpl-pill border border-tpl-line bg-tpl-raised/70 px-3 py-1.5 text-tpl-xs font-medium text-tpl-eyebrow sm:text-tpl-sm">
          <Sparkles aria-hidden="true" className="size-4" />
          {page.badge}
        </div>
        <TemplateHeading
          as="h1"
          scale="display"
          align="center"
          className="mt-8 leading-none"
          title={
            <>
              {page.titleStart}
              <span className="block text-tpl-eyebrow">{page.titleAccent}</span>
              {page.titleEnd}
            </>
          }
          description={page.description}
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <TemplateLink href={anchor(ANCHORS.projects)} icon={false}>
            {page.seeProjects}
          </TemplateLink>
          <TemplateLink
            href={anchor(ANCHORS.contact)}
            variant="outline"
            icon={false}
            className="bg-tpl-raised"
          >
            {page.bookMeeting}
          </TemplateLink>
        </div>
      </ScrollReveal>

      <ScrollReveal
        delay={90}
        distance={18}
        className="mt-12 grid gap-4 lg:grid-cols-[0.8fr_1.15fr_0.8fr]"
      >
        <div className="grid gap-4">
          <TemplatePanel className="p-6 shadow-tpl-sm">
            <p className={PANEL_LABEL}>{page.visionLabel}</p>
            <p className="mt-4 font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
              {page.visionText}
            </p>
          </TemplatePanel>
          <FillPhoto
            src={page.vision.src}
            alt={page.vision.alt}
            sizes="(min-width: 1408px) 384px, (min-width: 1024px) calc(24vw - 6px), calc(85vw - 16px)"
            className="min-h-[260px] sm:max-lg:min-h-[400px] [&_img]:object-[50%_72%]"
          />
        </div>

        <FillPhoto
          src={page.main.src}
          alt={page.main.alt}
          sizes="(min-width: 1024px) 512px, (min-width: 704px) calc(88vw - 42px), 512px"
          className="min-h-[640px] rounded-[2.25rem] shadow-tpl-lg"
          priority
          veil
        />

        <div className="grid gap-4">
          <FillPhoto
            src={page.side.src}
            alt={page.side.alt}
            sizes="(min-width: 1024px) 384px, (min-width: 528px) calc(85vw - 16px), 384px"
            className="min-h-[240px]"
          />
          <TemplatePanel tone="inverse" className="p-6 shadow-tpl-lg">
            <p className={PANEL_LABEL}>{page.positioningLabel}</p>
            <p className="mt-4 text-tpl-base leading-8">
              {page.positioningText}
            </p>
          </TemplatePanel>
        </div>
      </ScrollReveal>
    </TemplateSection>
  );
}
