import { MapPin } from "lucide-react";

import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

const LABEL =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase";

/** Rupture : citation du praticien sur fond inverse, grande image à droite. */
export function HomePause({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(osteopathe, locale);
  const page = copy.home.pause;

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <figure>
          <blockquote className="font-tpl-display text-tpl-2xl leading-tpl-display text-balance">
            <p>{page.quote}</p>
          </blockquote>
          <figcaption className="mt-6 text-tpl-sm text-tpl-ink-muted">
            {page.author}
          </figcaption>
          <TemplateLink
            href={templateHref(locale, osteopathe.paths.approche)}
            variant="inverse"
            shape="pill"
            className="mt-9"
          >
            {copy.cta.discoverApproach}
          </TemplateLink>
        </figure>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/5"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
    </TemplateSection>
  );
}

/** Infos pratiques : horaires, accès en texte, tarif. */
export function HomePractical({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(osteopathe, locale);
  const page = copy.home.practical;

  return (
    <TemplateSection eyebrow={page.eyebrow} title={page.title}>
      <div className="grid gap-5 lg:grid-cols-3">
        <TemplatePanel>
          <p className={LABEL}>{copy.common.hoursLabel}</p>
          <dl className="mt-5 space-y-4 text-tpl-sm">
            {copy.common.hours.map((row) => (
              <div key={row.day} className="flex flex-col">
                <dt className="text-tpl-ink-muted">{row.day}</dt>
                <dd className="font-semibold">{row.time}</dd>
              </div>
            ))}
          </dl>
        </TemplatePanel>
        <TemplatePanel>
          <p className={LABEL}>{page.access.label}</p>
          <p className="mt-5 flex items-start gap-3 text-tpl-sm">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-tpl-accent"
            />
            {copy.common.address}
          </p>
          <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
            {page.access.text}
          </p>
        </TemplatePanel>
        <TemplatePanel>
          <p className={LABEL}>{page.price.label}</p>
          <p className="mt-4 font-tpl-display text-tpl-2xl leading-none">
            {page.price.value}
          </p>
          <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
            {page.price.text}
          </p>
        </TemplatePanel>
      </div>
      <p className="mt-8 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
        {copy.common.medicalNotice}
      </p>
    </TemplateSection>
  );
}
