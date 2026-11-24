import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

import { CARD_TITLE, ContactFormCard, DetailList } from "./parts";

/** Contact : conseils avant d'écrire, puis formulaire de démonstration. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(avocate, locale).contact;

  return (
    <TemplateSection
      as="h1"
      tone="raised"
      density="compact"
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      description={page.hero.description}
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <TemplatePanel tone="surface">
          <h2 className={`${CARD_TITLE} text-tpl-xl`}>{page.before.title}</h2>
          <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
            {page.before.text}
          </p>
          <div className="mt-7">
            <DetailList items={page.before.items} />
          </div>
        </TemplatePanel>
        <ContactFormCard locale={locale} />
      </div>
    </TemplateSection>
  );
}
