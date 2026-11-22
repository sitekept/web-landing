import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

import { ContactAside } from "./contact-aside";
import { ContactForm } from "./contact-form";

/** Contact : hero, formulaire de démonstration, coordonnées, horaires, zone. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const hero = getTemplateCopy(plombierSerrurier, locale).contact.hero;

  return (
    <>
      <TemplateSection density="compact" className="border-b border-tpl-line">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
        />
      </TemplateSection>
      <TemplateSection density="compact">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm locale={locale} />
          <ContactAside locale={locale} />
        </div>
      </TemplateSection>
    </>
  );
}
