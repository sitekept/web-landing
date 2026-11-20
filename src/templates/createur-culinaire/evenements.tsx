import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

import {
  EventFormulas,
  EventLogistics,
  EventWorkshops,
} from "./evenements-sections";
import { ClosingCta } from "./parts";

/** Événements : formules (tableau de prix), ateliers, logistique, devis. */
export function EvenementsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).evenements;

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        className="pb-4 lg:pb-8"
      />
      <EventFormulas locale={locale} />
      <EventWorkshops locale={locale} />
      <EventLogistics locale={locale} />
      <ClosingCta
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
