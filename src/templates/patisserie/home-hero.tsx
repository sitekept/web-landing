import { Sparkles } from "lucide-react";

import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Accueil : badge et grand titre centrés, puis cadre avec photo et panneau de chiffres. */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).hero;

  return (
    <TemplateSection
      id={ANCHORS.home}
      tone="surface"
      density="compact"
      className="border-b border-tpl-line"
    >
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-tpl-pill border border-tpl-line bg-tpl-raised px-4 py-2 text-tpl-sm text-tpl-accent">
          <Sparkles aria-hidden="true" className="size-4" />
          {page.badge}
        </div>
        <TemplateHeading
          as="h1"
          scale="display"
          align="center"
          className="mt-8 max-w-4xl"
          title={
            <>
              {page.titleStart}
              <span className="block text-tpl-accent">{page.titleAccent}</span>
              {page.titleEnd}
            </>
          }
          description={page.description}
        />
      </div>

      <div className="mt-14 rounded-[2.5rem] border border-tpl-line bg-tpl-raised p-4 shadow-tpl-lg">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-tpl">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="fill"
              rounded="none"
              sizes="(min-width: 1024px) 640px, (min-width: 560px) calc(85.5vw - 50px), 384px"
              className="absolute inset-0 min-h-[520px]"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-b from-tpl-surface/5 to-tpl-surface/30"
            />
          </div>
          <div className="flex flex-col justify-between rounded-tpl border border-tpl-line bg-tpl-surface p-8">
            <TemplateHeading
              eyebrow={page.panel.eyebrow}
              title={page.panel.title}
              description={page.panel.text}
              scale="title"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {page.panel.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-3xl border border-tpl-line bg-tpl-ink/[0.03] p-5"
                >
                  <p className="text-2xl font-semibold text-tpl-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
