import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Tarifs et prise en charge : un vrai tableau à partir de `md`, des lignes
 * empilées en dessous (l'en-tête ne reste que pour les lecteurs d'écran, et
 * chaque cellule rappelle sa colonne).
 */
export function PricesTable({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).soins.prices;
  const cell = "block px-0 py-1 md:table-cell md:px-5 md:py-4 md:align-top";
  const label =
    "mr-2 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase md:hidden";

  return (
    <TemplateSection
      tone="tint"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
      description={page.description}
    >
      <div className="overflow-hidden rounded-tpl border border-tpl-line bg-tpl-raised shadow-tpl-sm">
        <table className="block w-full text-left text-tpl-sm md:table">
          <thead className="max-md:sr-only">
            <tr className="md:border-b md:border-tpl-line">
              <th
                scope="col"
                className="px-5 py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase"
              >
                {page.columns.care}
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase"
              >
                {page.columns.price}
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase"
              >
                {page.columns.coverage}
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {page.rows.map((row) => (
              <tr
                key={row.care}
                className="block border-t border-tpl-line p-5 first:border-t-0 md:table-row md:p-0"
              >
                <th
                  scope="row"
                  className={`${cell} font-tpl-display text-tpl-base font-(weight:--tpl-display-weight)`}
                >
                  {row.care}
                </th>
                <td className={`${cell} font-semibold tabular-nums`}>
                  <span aria-hidden="true" className={label}>
                    {page.columns.price}
                  </span>
                  {row.price}
                </td>
                <td className={`${cell} text-tpl-ink-muted`}>
                  <span aria-hidden="true" className={label}>
                    {page.columns.coverage}
                  </span>
                  {row.coverage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
        {page.note}
      </p>
    </TemplateSection>
  );
}
