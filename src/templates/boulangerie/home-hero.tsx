import { Sparkles } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, InfoRow } from "./parts";

/** Accueil : titre et chiffres à gauche, grande photo, carte du jour et infos à droite. */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(boulangerie, locale);
  const page = copy.hero;
  const anchor = (id: string) =>
    templateHref(locale, `${boulangerie.paths.home}#${id}`);

  return (
    <TemplateSection
      id={ANCHORS.home}
      tone="tint"
      density="compact"
      className="border-b border-tpl-line"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-tpl-pill border border-tpl-line bg-tpl-raised px-4 py-2 text-tpl-sm font-medium text-tpl-eyebrow">
            <Sparkles aria-hidden="true" className="size-4" />
            {page.badge}
          </div>
          <TemplateHeading
            as="h1"
            scale="title"
            className="mt-6 max-w-xl"
            title={
              <>
                {page.titleStart}
                <span className="mt-2 block text-tpl-accent">
                  {page.titleAccent}
                </span>
                {page.titleEnd}
              </>
            }
            description={page.description}
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TemplateLink
              href={anchor(ANCHORS.showcase)}
              icon={false}
              className="rounded-lg px-8"
            >
              {page.seeShowcase}
            </TemplateLink>
            <TemplateLink
              href={anchor(ANCHORS.contact)}
              variant="outline"
              icon={false}
              className="rounded-lg bg-tpl-raised px-8"
            >
              {page.prepareOrder}
            </TemplateLink>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3 lg:gap-2 xl:gap-4">
            {page.stats.map((stat) => (
              <li key={stat.label}>
                <TemplatePanel className="h-full p-5 shadow-tpl-sm lg:px-3 xl:px-5">
                  <div className="text-tpl-xl font-bold text-tpl-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {stat.label}
                  </div>
                </TemplatePanel>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.52fr_0.48fr]">
          <div className="relative min-h-[540px] overflow-hidden rounded-tpl shadow-tpl-lg">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="fill"
              rounded="none"
              sizes="(min-width: 1024px) 1080px, 828px"
              className="absolute inset-0 min-h-[540px]"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-b from-tpl-inverse/10 to-tpl-inverse/40"
            />
          </div>
          <div className="space-y-4">
            <TemplatePanel tone="inverse" className="p-6 shadow-tpl-lg">
              <p className="text-tpl-sm tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {page.todayLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {copy.showcase.products.slice(0, 3).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 border-b border-tpl-line pb-3 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-tpl-sm text-tpl-ink-muted">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-tpl-sm font-bold text-tpl-eyebrow">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </TemplatePanel>
            <TemplatePanel className="p-6 shadow-tpl-sm">
              <p className="text-tpl-sm tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {page.infoLabel}
              </p>
              <div className="mt-4 space-y-4 text-tpl-sm text-tpl-ink-muted">
                <InfoRow icon="address">{copy.common.addressShort}</InfoRow>
                <InfoRow icon="hours">{copy.common.hours}</InfoRow>
                <InfoRow icon="phone">{copy.phone.label}</InfoRow>
              </div>
            </TemplatePanel>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
