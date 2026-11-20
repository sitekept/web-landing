import { Gift } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Rupture de l'accueil : la carte cadeau, en section inverse (crème) sur le
 * fond sombre du reste du site. Image ambrée, carte sombre posée en
 * chevauchement, montants et appel à l'action.
 */
export function GiftSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const gift = copy.gift;

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div className="relative pb-10">
          <TemplateMedia
            src={gift.image.src}
            alt={gift.image.alt}
            ratio="4/3"
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute right-4 bottom-0 left-4 rounded-tpl border border-tpl-accent/60 bg-tpl-inverse-ink p-5 text-tpl-inverse shadow-tpl-lg sm:right-auto sm:left-8 sm:w-80 sm:p-6">
            <p className="flex items-center gap-2 text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
              <Gift aria-hidden="true" className="size-4 text-tpl-accent" />
              {gift.badge}
            </p>
            <p className="mt-3 font-tpl-display text-tpl-xl leading-tpl-display">
              {gift.badgeFrom}
            </p>
          </div>
        </div>

        <div>
          <TemplateHeading
            eyebrow={gift.eyebrow}
            title={gift.title}
            description={gift.text}
            scale="title"
          />
          <h3 className="mt-8 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {gift.amountsLabel}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {gift.amounts.map((amount) => (
              <li
                key={amount}
                className="rounded-tpl-pill border border-tpl-ink/50 px-5 py-2 text-tpl-sm font-medium tabular-nums"
              >
                {amount}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-tpl-sm text-tpl-ink-muted">{gift.note}</p>
          <div className="mt-9">
            <TemplateLink
              href={templateHref(locale, spaMassage.paths.reservation)}
              variant="inverse"
              shape="pill"
            >
              {copy.cta.giftCard}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
