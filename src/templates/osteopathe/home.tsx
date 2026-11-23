import { CalendarDays, Check, Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

import { HomePause, HomePractical } from "./home-closing";
import { HomeProof, HomeSession } from "./home-details";
import { HomeForWho } from "./home-who";
import { ClosingCta } from "./parts";

/** Hero asymétrique : titre éditorial à gauche, grande photo et tarif à droite. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(osteopathe, locale);
  const page = copy.home.hero;

  return (
    <>
      <TemplateSection>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TemplateLink
                href={templateHref(locale, osteopathe.paths.rendezVous)}
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
            <ul className="mt-10 space-y-3 text-tpl-sm text-tpl-ink-muted">
              {page.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pb-12 lg:pb-0">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/5"
              sizes="(min-width: 1024px) 512px, calc(85vw - 16px)"
              priority
            />
            <TemplatePanel className="absolute bottom-0 left-4 w-64 shadow-tpl-lg lg:bottom-12 lg:-left-12">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {page.card.label}
              </p>
              <p className="mt-2 font-tpl-display text-tpl-2xl leading-tpl-display">
                {page.card.value}
              </p>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                {page.card.text}
              </p>
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>
      <HomeForWho locale={locale} />
      <HomeSession locale={locale} />
      <HomeProof locale={locale} />
      <HomePause locale={locale} />
      <HomePractical locale={locale} />
      <ClosingCta locale={locale} />
    </>
  );
}
