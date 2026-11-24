import { ArrowLeft } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { BienDetails } from "./bien-details";
import { BienVisit } from "./bien-visit";
import { ClosingBand } from "./parts";

/** Fiche d'un bien : titre et prix, galerie de quatre photos, détails, demande de visite. */
export function BienView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.bien;
  const [main, ...others] = page.gallery.items;

  return (
    <>
      <TemplateSection density="compact">
        <TemplateLink
          href={templateHref(locale, agenceImmobiliere.paths.biens)}
          variant="ghost"
          size="sm"
          icon={<ArrowLeft aria-hidden="true" className="size-4" />}
          className="-ml-3"
        >
          {copy.cta.backToListings}
        </TemplateLink>
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.hero.eyebrow}
            title={page.hero.title}
            description={page.hero.description}
          />
          <div className="rounded-tpl border border-tpl-line bg-tpl-raised p-6">
            <p className="inline-block rounded-tpl bg-tpl-inverse px-2.5 py-1 text-tpl-xs font-semibold text-tpl-inverse-ink">
              {page.hero.status}
            </p>
            <p className="mt-3 font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.hero.price}
            </p>
            <p className="mt-1 text-tpl-xs text-tpl-ink-muted">
              {page.hero.priceNote}
            </p>
            <ul className="mt-4 flex flex-wrap divide-x divide-tpl-line text-tpl-sm">
              {page.hero.specs.map((spec) => (
                <li key={spec} className="px-3 first:pl-0 last:pr-0">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul
          role="list"
          aria-label={page.gallery.label}
          className="mt-10 grid gap-3 md:grid-cols-3"
        >
          <li className="md:col-span-3">
            <TemplateMedia
              src={main.src}
              alt={main.alt}
              ratio="4/3"
              sizes="calc(83vw + 1px)"
              priority
              className="md:aspect-video"
            />
          </li>
          {others.map((image) => (
            <li key={image.src}>
              <TemplateMedia
                src={image.src}
                alt={image.alt}
                ratio="4/3"
                sizes="(min-width: 1408px) 384px, (min-width: 768px) calc(29.5vw - 9px), calc(89vw - 11px)"
              />
            </li>
          ))}
        </ul>
      </TemplateSection>
      <BienDetails locale={locale} />
      <BienVisit locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
