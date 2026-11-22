import {
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { EntryRow, EYEBROW, PanelText } from "./parts";

/** Sommaire : trois chapitres, lignes cliquables. */
export function HomeChapters({ locale }: { locale: TemplateLocale }) {
  const { chapters } = getTemplateCopy(architecteInterieur, locale).home;

  return (
    <TemplateSection
      density="compact"
      tone="tint"
      eyebrow={chapters.eyebrow}
      title={chapters.title}
      description={chapters.description}
    >
      <div className="space-y-4">
        {chapters.items.map((item) => (
          <EntryRow
            key={item.title}
            href={templateHref(locale, item.href)}
            label={item.label}
            title={item.title}
            text={item.note}
            action={chapters.read}
          />
        ))}
      </div>
    </TemplateSection>
  );
}

/** Récits de projet : cas phare sur fond sombre et trois principes. */
export function HomeStories({ locale }: { locale: TemplateLocale }) {
  const { stories } = getTemplateCopy(architecteInterieur, locale).home;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      eyebrow={stories.eyebrow}
      title={stories.title}
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <TemplatePanel tone="inverse">
          <p className={EYEBROW}>{stories.flagship.eyebrow}</p>
          <p className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {stories.flagship.text}
          </p>
          <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
            {stories.flagship.note}
          </p>
        </TemplatePanel>
        <div className="grid gap-4">
          {stories.points.map((point) => (
            <TemplatePanel key={point} tone="tint">
              <PanelText>{point}</PanelText>
            </TemplatePanel>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}

/** Dernière séquence : trois notes du journal. */
export function HomeJournal({ locale }: { locale: TemplateLocale }) {
  const { journal } = getTemplateCopy(architecteInterieur, locale).home;

  return (
    <TemplateSection
      density="compact"
      tone="tint"
      eyebrow={journal.eyebrow}
      title={journal.title}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {journal.items.map((item) => (
          <TemplatePanel key={item} tone="tint">
            <PanelText>{item}</PanelText>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}
