import Link from "next/link";

import {
  TemplateCard,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  salonCoiffure,
  type SalonCoiffureCopy,
} from "@/content/templates/salon-coiffure";

import { LIFT } from "./parts";

/** Narration : trois cartes blanches sur fond blanc, à filet et grande ombre. */
export function HomeNarration({
  narration,
}: {
  narration: SalonCoiffureCopy["home"]["narration"];
}) {
  return (
    <TemplateSection
      tone="raised"
      density="compact"
      titleScale="subtitle"
      eyebrow={narration.eyebrow}
      title={narration.title}
      description={narration.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {narration.items.map((item) => (
          <TemplateCard key={item.title} title={item.title} interactive>
            {item.text}
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}

/**
 * Capsules de style sur fond rose pâle, une sur deux sombre. Chacune mène au
 * lookbook.
 */
export function HomeCapsules({
  locale,
  capsules,
}: {
  locale: TemplateLocale;
  capsules: SalonCoiffureCopy["home"]["capsules"];
}) {
  const href = templateHref(locale, salonCoiffure.paths.lookbook);

  return (
    <TemplateSection
      tone="tint"
      density="compact"
      titleScale="subtitle"
      eyebrow={capsules.eyebrow}
      title={capsules.title}
    >
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capsules.items.map((item, index) => (
          <li key={item}>
            <Link
              href={href}
              className="block rounded-tpl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tpl-ink"
            >
              <TemplatePanel
                tone={index % 2 === 0 ? "raised" : "inverse"}
                className={LIFT}
              >
                <p className="font-tpl-display text-tpl-lg leading-tight font-(weight:--tpl-display-weight)">
                  {item}
                </p>
              </TemplatePanel>
            </Link>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
