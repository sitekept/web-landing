import type { TemplateLocale } from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { ListPage } from "./parts";

/** Page « publications » : un titre, une description et une liste de cartes. */
export function PublicationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).publications;

  return (
    <ListPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      items={page.items}
      paper
    />
  );
}
