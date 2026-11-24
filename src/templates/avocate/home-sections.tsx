import {
  TemplateSection,
  TemplatePanel,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

import { CARD_TITLE, DetailList } from "./parts";

/** Deux champs d'intervention, sur le fond de page. */
export function ExpertisesSection({ locale }: { locale: TemplateLocale }) {
  const { expertises } = getTemplateCopy(avocate, locale).home;

  return (
    <TemplateSection
      density="compact"
      eyebrow={expertises.eyebrow}
      title={expertises.title}
      description={expertises.description}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {expertises.cards.map((card) => (
          <TemplatePanel key={card.title}>
            <h3 className={`${CARD_TITLE} text-tpl-xl`}>{card.title}</h3>
            <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
              {card.text}
            </p>
            <div className="mt-6">
              <DetailList items={card.items} />
            </div>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}

/** Méthode en trois étapes, sur fond clair. */
export function MethodSection({ locale }: { locale: TemplateLocale }) {
  const { method } = getTemplateCopy(avocate, locale).home;

  return (
    <TemplateSection
      tone="raised"
      density="compact"
      className="border-y border-tpl-line"
      eyebrow={method.eyebrow}
      title={method.title}
      description={method.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {method.steps.map((step) => (
          <TemplatePanel key={step.label} tone="surface">
            <p className="text-tpl-sm font-semibold text-tpl-eyebrow">
              {step.label}
            </p>
            <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
              {step.text}
            </p>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}

/** Approche : photo à gauche, encart à droite, sur le troisième fond clair. */
export function ApproachSection({ locale }: { locale: TemplateLocale }) {
  const { approach } = getTemplateCopy(avocate, locale).home;

  return (
    <TemplateSection
      tone="tint"
      density="compact"
      eyebrow={approach.eyebrow}
      title={approach.title}
      description={approach.description}
    >
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <TemplateMedia
          src={approach.image.src}
          alt={approach.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) calc(43vw - 11px), calc(96vw - 22px)"
          className="border border-tpl-line"
        />
        <TemplatePanel>
          <h3 className={`${CARD_TITLE} text-tpl-xl`}>
            {approach.panel.title}
          </h3>
          <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
            {approach.panel.text}
          </p>
          <div className="mt-6">
            <DetailList items={approach.panel.items} />
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
