import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingCta, IconRing, PageHero } from "./parts";

/**
 * Espace : galerie à panneaux (21st.dev) des cinq pièces, hygiène et accueil,
 * horaires.
 */
export function EspaceView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.espace;

  return (
    <>
      <PageHero>
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </PageHero>

      <TemplateSection density="compact">
        <HoverExpandGallery
          label={page.gallery.label}
          items={page.gallery.items}
          height="34rem"
          width="fill"
          sizes="(min-width: 1024px) 1100px, 100vw"
          priority
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.care.eyebrow}
        title={page.care.title}
        description={page.care.description}
      >
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {page.care.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-5">
              <IconRing icon={item.icon} />
              <h3 className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight) text-balance">
                {item.title}
              </h3>
              <p className="text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <TemplateHeading
            eyebrow={page.hours.eyebrow}
            title={page.hours.title}
            description={page.hours.text}
            scale="title"
          />
          <dl className="divide-y divide-tpl-line self-start border-y border-tpl-line">
            {copy.common.hours.map((row) => (
              <div
                key={row.day}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <dt className="text-tpl-base text-tpl-ink-muted">{row.day}</dt>
                <dd className="font-tpl-display text-tpl-lg tabular-nums">
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </TemplateSection>

      <ClosingCta
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
