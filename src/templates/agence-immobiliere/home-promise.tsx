import { Mail, MapPin, Phone } from "lucide-react";

import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Rupture sapin (la promesse de l'agence) puis contact
 * posé sur fond clair : coordonnées et secteur à côté de l'appel à l'action.
 */
export function HomePromise({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.home.promise;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <TemplateSection tone="inverse" density="spacious">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <figure>
            <blockquote className="font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
              {page.quote}
            </blockquote>
            <p className="mt-6 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
              {page.text}
            </p>
            <figcaption className="mt-6 flex items-center gap-3 text-tpl-sm text-tpl-ink-muted">
              <span aria-hidden="true" className="h-px w-8 bg-tpl-ink/50" />
              {page.signature}
            </figcaption>
            <div className="mt-8">
              <TemplateLink
                href={href(agenceImmobiliere.paths.contact)}
                variant="inverse"
              >
                {page.cta}
              </TemplateLink>
            </div>
          </figure>
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/5"
            sizes="(min-width: 1280px) 900px, (min-width: 1024px) 66vw, (min-width: 640px) 720px, 172vw"
            className="mx-auto max-w-sm lg:max-w-none"
          />
        </div>
      </TemplateSection>

      <TemplateSection
        eyebrow={copy.common.closing.eyebrow}
        title={copy.common.closing.title}
        description={copy.common.closing.text}
      >
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-3 sm:flex-row">
            <TemplateLink href={href(agenceImmobiliere.paths.estimation)}>
              {copy.cta.estimate}
            </TemplateLink>
            <TemplateLink href={copy.phone.href} variant="outline" icon={false}>
              {copy.phone.label}
            </TemplateLink>
          </div>
          <TemplatePanel>
            <ul className="space-y-3 text-tpl-sm">
              <li className="flex items-start gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                />
                <a
                  href={copy.phone.href}
                  className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {copy.phone.label}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                />
                {copy.common.email}
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                />
                <span>
                  <span className="block font-semibold">
                    {copy.common.zone.label}
                  </span>
                  {copy.common.zone.text}
                </span>
              </li>
            </ul>
          </TemplatePanel>
        </div>
      </TemplateSection>
    </>
  );
}
