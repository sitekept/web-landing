import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS, LIME_BUTTON } from "./parts";

/**
 * Entreprises, fond graphite : photo de baies et prix du contrat à gauche
 * (1/1), quatre engagements en liste à droite.
 */
export function HomeBusiness({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.business;

  return (
    <TemplateSection id={ANCHORS.business} tone="inverse" density="compact">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="16/9"
            sizes="(min-width: 1344px) 608px, (min-width: 1024px) 45vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          />
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-tpl-sm text-tpl-ink-muted">
                {page.price.label}
              </p>
              <p className="mt-1 font-mono text-tpl-2xl leading-tpl-display font-bold text-tpl-eyebrow tabular-nums">
                {page.price.value}
              </p>
              <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                {page.price.note}
              </p>
            </div>
            <TemplateLink
              href={templateHref(
                locale,
                `${ordinateur.paths.home}#${ANCHORS.contact}`
              )}
              icon={false}
              className={LIME_BUTTON}
            >
              {page.cta}
            </TemplateLink>
          </div>
        </div>
        <div>
          <TemplateHeading
            id="entreprises-titre"
            title={page.title}
            description={page.description}
          />
          <ul className="mt-10 border-b border-tpl-line">
            {page.items.map((item) => {
              const Icon = ICONS[item.icon];

              return (
                <li
                  key={item.title}
                  className="flex gap-4 border-t border-tpl-line py-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-1 size-6 shrink-0 text-tpl-eyebrow"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-tpl-ink-muted">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </TemplateSection>
  );
}
