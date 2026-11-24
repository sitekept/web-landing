// Restaurant Menu Block - olewandowski1 - https://21st.dev/@olewandowski1/components/menu-1
// MIT, voir LICENSE.

import { cn } from "@/lib/utils";

/**
 * Carte ou liste de prix à points de conduite (21st.dev, « Restaurant Menu
 * Block »). Voir `SOURCE.md` pour l'origine, la licence et les modifications.
 *
 * Composant serveur, sans état. Il ne rend que les groupes : l'en-tête de
 * section (titre, description) et les mentions de bas de carte viennent de
 * `TemplateSection` et de la vue qui l'utilise. Convient à une carte de café,
 * aux soins d'un spa, aux forfaits d'un garage, aux tarifs d'un plombier ou
 * aux honoraires d'un expert-comptable.
 *
 * Tous les textes (titres de groupes, noms, descriptions, étiquettes) et les
 * prix, déjà formatés (« 7 € », « dès 89 € »), viennent des props, donc de la
 * copie FR et EN du template.
 */

export type PriceListItem = {
  name: string;
  /** Description sous le nom (ingrédients, durée, périmètre…). */
  detail?: string;
  /** Prix déjà formaté par la copie, locale comprise : « 7 € », « dès 89 € ». */
  price: string;
  /** Étiquette facultative (« Végétarien », « Sur devis »…), en texte : pas seulement une couleur. */
  note?: string;
};

export type PriceListGroup = {
  title: string;
  items: readonly PriceListItem[];
};

export type PriceListTitleLevel = "h2" | "h3" | "h4";

export type PriceListProps = {
  groups: readonly PriceListGroup[];
  /** Niveau de titre des groupes (`h3` par défaut), à régler sur le titre de la section qui porte la liste. */
  titleAs?: PriceListTitleLevel;
  /** Nombre de colonnes à partir de `md` (1 par défaut) ; en dessous, une seule colonne. */
  columns?: 1 | 2;
  className?: string;
};

/** Classes littérales : Tailwind ne génère pas de classe construite à la volée. */
const COLUMNS: Record<1 | 2, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
};

export function PriceList({
  groups,
  titleAs: Title = "h3",
  columns = 1,
  className,
}: PriceListProps) {
  return (
    <div
      className={cn(
        "grid gap-x-12 gap-y-10 font-tpl-text text-tpl-ink",
        COLUMNS[columns],
        className
      )}
    >
      {groups
        .filter((group) => group.items.length > 0)
        .map((group, groupIndex) => (
          <div key={`${groupIndex}-${group.title}`}>
            <Title className="font-tpl-display text-tpl-sm font-(weight:--tpl-display-weight) tracking-tpl-eyebrow text-tpl-ink uppercase">
              {group.title}
            </Title>
            <ul role="list" className="mt-4 flex flex-col gap-4">
              {group.items.map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <div className="flex items-baseline gap-2">
                    <span className="min-w-0 text-tpl-base font-medium text-tpl-ink">
                      {item.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="min-w-4 flex-1 -translate-y-[0.2em] border-b border-dotted border-tpl-ink-muted/70"
                    />
                    <span className="shrink-0 text-tpl-base font-medium whitespace-nowrap text-tpl-ink tabular-nums">
                      {item.price}
                    </span>
                  </div>
                  {item.detail || item.note ? (
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-tpl-sm text-tpl-ink-muted">
                      {item.detail ? <span>{item.detail}</span> : null}
                      {item.note ? (
                        <span className="inline-flex items-center rounded-tpl-pill border border-tpl-line px-2 text-tpl-xs text-tpl-ink-muted">
                          {item.note}
                        </span>
                      ) : null}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
