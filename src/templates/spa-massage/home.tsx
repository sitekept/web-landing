import { CalendarDays, Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

import { GiftSection } from "./gift";
import { HomePractical, HomeProof } from "./home-closing";
import { HomeFeatured, HomeSignature } from "./home-intro";
import { HomeRitual } from "./home-ritual";
import { ClosingCta } from "./parts";

/**
 * Accueil : hero image plein cadre (voile fait avec les tokens), signature,
 * soins phares, rituel, avis, carte cadeau (rupture crème), infos, appel final.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const hero = copy.home.hero;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <TemplateMedia
          src={hero.image.src}
          alt={hero.image.alt}
          ratio="16/9"
          sizes="100vw"
          rounded="none"
          priority
          className="absolute inset-0 -z-20 h-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-tpl-surface via-tpl-surface/80 to-tpl-surface/30 lg:bg-linear-to-r lg:from-tpl-surface lg:via-tpl-surface/75 lg:to-transparent"
        />
        <div className="px-4 pt-24 pb-14 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto flex min-h-[28rem] max-w-7xl items-end lg:min-h-[34rem] lg:items-center">
            <div className="max-w-2xl">
              <TemplateHeading
                as="h1"
                scale="display"
                eyebrow={hero.eyebrow}
                title={hero.title}
                description={hero.description}
              />
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <TemplateLink
                  href={templateHref(locale, spaMassage.paths.reservation)}
                  shape="pill"
                  icon={<CalendarDays aria-hidden="true" className="size-4" />}
                >
                  {copy.cta.book}
                </TemplateLink>
                <TemplateLink
                  href={copy.phone.href}
                  variant="outline"
                  shape="pill"
                  icon={<Phone aria-hidden="true" className="size-4" />}
                >
                  {copy.phone.label}
                </TemplateLink>
              </div>
              <ul className="mt-10 flex flex-col gap-2 text-tpl-sm text-tpl-ink-muted sm:flex-row sm:flex-wrap sm:gap-x-8">
                {hero.facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-tpl-pill bg-tpl-accent"
                    />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HomeSignature locale={locale} />
      <HomeFeatured locale={locale} />
      <HomeRitual locale={locale} />
      <HomeProof locale={locale} />
      <GiftSection locale={locale} />
      <HomePractical locale={locale} />
      <ClosingCta
        locale={locale}
        title={copy.home.closing.title}
        text={copy.home.closing.text}
      />
    </>
  );
}
