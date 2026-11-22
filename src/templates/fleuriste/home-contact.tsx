import { ScrollReveal } from "@/components/scroll-reveal";
import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { fleuriste } from "@/content/templates/fleuriste";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, EYEBROW, ICONS } from "./parts";

const LINK =
  "underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

/** Contact : grande carte blanche, coordonnées à gauche, encart beige et deux actions. */
export function HomeContact({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(fleuriste, locale);
  const page = copy.contact;

  return (
    <TemplateSection
      id={ANCHORS.contact}
      tone="surface"
      density="compact"
      width="narrow"
    >
      <ScrollReveal
        distance={18}
        className="rounded-[2.375rem] border border-tpl-line bg-tpl-raised p-8 shadow-tpl-sm sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <TemplateHeading eyebrow={page.eyebrow} title={page.title} />
            <ul className="mt-8 space-y-5 text-tpl-sm leading-7 text-tpl-ink-muted">
              {page.details.map((detail) => {
                const Icon = ICONS[detail.icon];
                const href =
                  detail.icon === "phone"
                    ? page.phoneHref
                    : detail.icon === "mail"
                      ? page.emailHref
                      : undefined;

                return (
                  <li key={detail.text} className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-tpl-eyebrow"
                    />
                    {href ? (
                      <a href={href} className={LINK}>
                        {detail.text}
                      </a>
                    ) : (
                      <span>{detail.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <TemplatePanel tone="tint" className="p-7">
            <p className={EYEBROW}>{page.panelLabel}</p>
            <p className="mt-4 text-tpl-base leading-8">{page.panelText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TemplateLink href={page.emailHref} icon={false}>
                {page.quote}
              </TemplateLink>
              <TemplateLink
                href={page.phoneHref}
                variant="outline"
                icon={false}
                className="border-tpl-ink"
              >
                {page.call}
              </TemplateLink>
            </div>
          </TemplatePanel>
        </div>
      </ScrollReveal>
    </TemplateSection>
  );
}
