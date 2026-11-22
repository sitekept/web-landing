import { TemplatePanel } from "@/components/template-kit";

/**
 * Padding haut de la première section d'une page : l'en-tête `floating` passe
 * au-dessus du premier bloc et ne réserve aucune place, `--tpl-header-offset`
 * (gap + carte) la dégage.
 */
export const FIRST_SECTION_TOP = "pt-[calc(var(--tpl-header-offset)+6rem)]";

/**
 * Rangée de panneaux de texte (carte, formules, coordonnées…). Dans une section
 * crème les panneaux sont blancs ; dans une section sombre ils sont éclaircis.
 */
export function TextPanels({
  items,
  columns = 3,
}: {
  items: readonly string[];
  columns?: 1 | 3;
}) {
  return (
    <div className={columns === 3 ? "grid gap-4 lg:grid-cols-3" : "grid gap-4"}>
      {items.map((item) => (
        <TemplatePanel key={item} className="text-tpl-sm leading-7">
          {item}
        </TemplatePanel>
      ))}
    </div>
  );
}
