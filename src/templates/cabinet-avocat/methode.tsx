import type { TemplateLocale } from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { ListPage } from "./parts";

/** Page « methode » : un titre, une description et une liste de cartes. */
export function MethodeView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).methode;

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
