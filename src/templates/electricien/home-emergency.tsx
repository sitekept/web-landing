import { CircleAlert, Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

type Props = { locale: TemplateLocale };

/** Rupture : fond graphite, téléphone en grand, consigne de sécurité. */
export function EmergencySection({ locale }: Props) {
  const copy = getTemplateCopy(electricien, locale);
  const page = copy.home.emergency;

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="mt-8">
            <TemplateLink
              href={copy.phone.href}
              icon={<Phone aria-hidden="true" className="size-5" />}
              className="min-h-14 px-8 text-tpl-lg font-extrabold tabular-nums"
            >
              {copy.phone.label}
            </TemplateLink>
          </div>
        </div>

        <div>
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {page.stepsTitle}
          </p>
          <ol className="mt-4 space-y-3">
            {page.steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-tpl border border-tpl-line bg-tpl-raised p-4"
              >
                <span
                  aria-hidden="true"
                  className="text-tpl-lg leading-none font-extrabold text-tpl-accent tabular-nums"
                >
                  0{index + 1}
                </span>
                <span className="text-tpl-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3 rounded-tpl border-l-4 border-tpl-accent bg-tpl-raised p-4">
            <CircleAlert
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-tpl-accent"
            />
            <div>
              <p className="text-tpl-sm font-bold">{page.safetyTitle}</p>
              <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                {page.safety}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Aperçu de trois réalisations (cuisine, garage, extérieur). */
export function WorksPreview({ locale }: Props) {
  const copy = getTemplateCopy(electricien, locale);
  const page = copy.home.works;
  const items = copy.realisations.gallery.items;
  const preview = [items[1], items[2], items[4]];

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {preview.map((item) => (
          <li key={item.title}>
            <TemplateMedia
              src={item.image.src}
              alt={item.image.alt}
              ratio="4/3"
              sizes="(min-width: 1376px) 512px, (min-width: 768px) calc(33.5vw - 23px), calc(104.5vw - 34px)"
            />
            <h3 className="mt-4 text-tpl-lg">{item.title}</h3>
            <p className="mt-1 text-tpl-sm text-tpl-ink-muted">{item.meta}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <TemplateLink
          href={templateHref(locale, electricien.paths.realisations)}
          variant="outline"
        >
          {copy.cta.allWorks}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
