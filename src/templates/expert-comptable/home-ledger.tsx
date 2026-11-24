import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";
import type { TemplateLocale } from "@/components/template-kit";

/**
 * Exemple de tableau de bord mensuel, écrit comme une feuille de compte :
 * en-tête sombre, colonnes à filets, chiffres tabulaires, total sous double
 * filet. Les chiffres sont fictifs et signalés comme tels.
 */
export function HomeLedger({ locale }: { locale: TemplateLocale }) {
  const ledger = getTemplateCopy(expertComptable, locale).home.hero.ledger;

  return (
    <figure className="overflow-hidden rounded-tpl border border-tpl-ink bg-tpl-raised shadow-tpl-lg">
      <div className="bg-tpl-inverse px-5 py-3 text-tpl-inverse-ink">
        <p className="font-tpl-display text-tpl-base font-(weight:--tpl-display-weight)">
          {ledger.title}
        </p>
      </div>
      <table className="w-full text-tpl-sm tabular-nums">
        <caption className="sr-only">{ledger.caption}</caption>
        <thead>
          <tr className="text-tpl-xs tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            <th scope="col" className="px-5 py-2.5 text-left font-semibold">
              {ledger.columns.label}
            </th>
            <th
              scope="col"
              className="w-24 border-l border-tpl-line px-5 py-2.5 text-right font-semibold"
            >
              {ledger.columns.value}
            </th>
          </tr>
        </thead>
        <tbody>
          {ledger.rows.map((row) => (
            <tr key={row.label} className="border-t border-tpl-line">
              <th scope="row" className="px-5 py-3 text-left font-normal">
                {row.label}
              </th>
              <td className="border-l border-tpl-line px-5 py-3 text-right font-medium">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-4 border-double border-tpl-ink">
            <th scope="row" className="px-5 py-4 text-left font-semibold">
              {ledger.totalLabel}
            </th>
            <td className="border-l border-tpl-line px-5 py-4 text-right font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight) whitespace-nowrap text-tpl-accent">
              {ledger.totalValue}
            </td>
          </tr>
        </tfoot>
      </table>
      <figcaption className="border-t border-tpl-line px-5 py-3 text-tpl-xs text-tpl-ink-muted">
        {ledger.caption}. {ledger.note}
      </figcaption>
    </figure>
  );
}
