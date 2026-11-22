import { TemplateCard, TemplateSection } from "@/components/template-kit";

type Tone = "raised" | "inverse";

const COLUMNS = {
  1: "",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
} as const;

/**
 * Liste de cartes de texte, une liste HTML (`ul`) : une colonne, ou deux ou
 * trois à partir de `xl`. `alternate` éclaircit une carte sur deux (page sur
 * fond de papier) pour garder l'alternance de l'ancienne démo.
 */
export function ItemList({
  items,
  columns = 1,
  tone = "raised",
  alternate = false,
}: {
  items: readonly string[];
  columns?: keyof typeof COLUMNS;
  tone?: Tone;
  alternate?: boolean;
}) {
  return (
    <ul className={`grid gap-4 ${COLUMNS[columns]}`}>
      {items.map((item, index) => (
        <li key={item} className="flex">
          <TemplateCard
            tone={tone}
            elevation="flat"
            className={
              alternate && index !== 1 ? "w-full bg-tpl-raised/60" : "w-full"
            }
          >
            {item}
          </TemplateCard>
        </li>
      ))}
    </ul>
  );
}

/** Page à une section : titre `h1`, description et liste de cartes. */
export function ListPage({
  eyebrow,
  title,
  description,
  items,
  columns = 1,
  paper = false,
  alternate = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
  columns?: keyof typeof COLUMNS;
  /** Page sur fond de papier (`surface`) plutôt que blanc (`raised`). */
  paper?: boolean;
  alternate?: boolean;
}) {
  return (
    <TemplateSection
      as="h1"
      tone={paper ? "surface" : "raised"}
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      <ItemList items={items} columns={columns} alternate={alternate} />
    </TemplateSection>
  );
}
