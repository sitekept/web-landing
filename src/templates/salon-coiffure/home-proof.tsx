import { CalendarCheck, Phone } from "lucide-react";

import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { ContactLines, HoursList } from "./parts";

/**
 * Bande d’avis alignée sur la grille du contenu : le kit la centre et fige la
 * largeur des cartes en mouvement réduit. Ici, même bord gauche que le titre,
 * cartes de pleine largeur (trois par rangée au-dessus de 1024 px).
 */
const REVIEWS_ALIGN =
  "[&>div:first-child]:px-0 motion-reduce:[&_ul]:justify-start motion-reduce:[&_li]:w-auto motion-reduce:[&_li]:min-w-0 motion-reduce:[&_li]:flex-1 motion-reduce:[&_li]:basis-[22rem]";

/** Avis : bande défilante de six cartes sur le fond de page. */
export function ReviewsSection({ locale }: { locale: TemplateLocale }) {
  const { reviews } = getTemplateCopy(salonCoiffure, locale).home;

  return (
    <TemplateSection
      tone="surface"
      title={reviews.title}
      description={reviews.description}
    >
      <TestimonialsMarquee
        label={reviews.label}
        tone="surface"
        durationSeconds={60}
        className={REVIEWS_ALIGN}
        items={reviews.items.map((item) => ({ ...item }))}
      />
    </TemplateSection>
  );
}

/** Venir au salon : horaires, adresse et boutons à gauche, photo du salon à droite. */
export function VisitSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { visit } = copy.home;

  return (
    <TemplateSection
      tone="tint"
      title={visit.title}
      description={visit.description}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <TemplatePanel className="lg:col-span-5">
          <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
            {copy.common.hoursLabel}
          </h3>
          <HoursList locale={locale} />
          <div className="mt-6 border-t border-tpl-line pt-6">
            <ContactLines locale={locale} />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={templateHref(locale, salonCoiffure.paths.reservation)}
              shape="pill"
              icon={<CalendarCheck aria-hidden="true" className="size-4" />}
            >
              {copy.cta.bookSlot}
            </TemplateLink>
            <TemplateLink
              href={copy.common.phone.href}
              variant="outline"
              shape="pill"
              icon={<Phone aria-hidden="true" className="size-4" />}
            >
              {copy.cta.call}
            </TemplateLink>
          </div>
        </TemplatePanel>
        <div className="lg:col-span-7">
          <TemplateMedia
            src={visit.image.src}
            alt={visit.image.alt}
            ratio="4/3"
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw"
          />
        </div>
      </div>
    </TemplateSection>
  );
}
