import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand, IconBadge } from "./parts";

export function AProposView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(coffeeShop, locale).aPropos;

  return (
    <>
      <TemplateSection density="compact" className="pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.hero.eyebrow}
            title={page.hero.title}
            description={page.hero.description}
          />
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="4/5"
            sizes="(min-width: 1024px) 828px, calc(156vw - 15px)"
            priority
            className="border border-tpl-ink lg:-rotate-2"
          />
        </div>
      </TemplateSection>

      <TemplateSection tone="raised">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <TemplateHeading
            eyebrow={page.story.eyebrow}
            title={page.story.title}
          />
          <div className="space-y-6 text-tpl-lg text-tpl-ink-muted">
            {page.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-tpl-measure text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </TemplateSection>

      <TemplateSection
        tone="inverse"
        eyebrow={page.method.eyebrow}
        title={page.method.title}
        description={page.method.description}
      >
        <ol className="grid gap-px overflow-hidden rounded-tpl border border-tpl-line bg-tpl-line sm:grid-cols-2 lg:grid-cols-4">
          {page.method.steps.map((step, index) => (
            <li key={step.label} className="bg-tpl-surface p-6 lg:p-7">
              <p
                aria-hidden="true"
                className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase"
              >
                0{index + 1}
              </p>
              <p className="mt-4 text-tpl-2xl leading-none font-black tracking-tighter tabular-nums">
                {step.value}
              </p>
              <h3 className="mt-5 text-tpl-lg">{step.label}</h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </TemplateSection>

      <TemplateSection
        eyebrow={page.gallery.eyebrow}
        title={page.gallery.title}
      >
        <HoverExpandGallery
          label={page.gallery.label}
          sizes="(min-width: 992px) 828px, 750px"
          width="fill"
          height="34rem"
          items={page.gallery.items}
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.commitments.eyebrow}
        title={page.commitments.title}
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {page.commitments.items.map((item) => (
            <li key={item.title}>
              <TemplatePanel
                tone="surface"
                className="flex h-full items-start gap-5 p-6"
              >
                <IconBadge icon={item.icon} />
                <div>
                  <h3 className="text-tpl-lg leading-tpl-display">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
              </TemplatePanel>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <ClosingBand
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
