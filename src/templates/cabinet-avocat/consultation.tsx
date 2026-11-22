import type { TemplateLocale } from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { ListPage } from "./parts";

/** Page « consultation » : un titre, une description et une liste de cartes. */
export function ConsultationView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).consultation;

  return (
    <ListPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      items={page.items}
      columns={3}
    />
  );
}
