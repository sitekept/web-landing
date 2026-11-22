import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Preuve : un devis d'exemple, en tableau (désignation, quantité, montant,
 * total). Chiffres tabulaires, filets d'encre, pas de carte dans la carte.
 */
export function SampleQuote({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).devis.sample;
  const head =
    "py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase";

  return (
    <TemplateSection>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div>
          <table className="w-full border-collapse text-left">
            <caption className="border-t-4 border-tpl-ink pt-4 pb-3 text-left font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
              {page.caption}
            </caption>
            <thead>
              <tr className="border-b border-tpl-ink">
                <th scope="col" className={head}>
                  {page.columns.item}
                </th>
                <th scope="col" className={`${head} pl-3 text-right`}>
                  {page.columns.qty}
                </th>
                <th scope="col" className={`${head} pl-3 text-right`}>
                  {page.columns.price}
                </th>
              </tr>
            </thead>
            <tbody>
              {page.lines.map((line) => (
                <tr key={line.label} className="border-b border-tpl-line">
                  <th scope="row" className="py-3 pr-4 text-tpl-sm font-medium">
                    {line.label}
                  </th>
                  <td className="py-3 pl-3 text-right text-tpl-sm tabular-nums">
                    {line.qty}
                  </td>
                  <td className="py-3 pl-3 text-right text-tpl-sm font-semibold tabular-nums">
                    {line.price}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan={2}
                  className="pt-5 text-left text-tpl-base font-semibold"
                >
                  {page.totalLabel}
                </th>
                <td className="pt-5 text-right font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) tabular-nums">
                  {page.total}
                </td>
              </tr>
            </tfoot>
          </table>
          <p className="mt-6 text-tpl-xs text-tpl-ink-muted">{page.note}</p>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Rupture : travaux sur mesure, photo de pièces à gauche, bande sombre. */
export function CustomWorks({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).devis.other;

  return (
    <TemplateSection tone="inverse">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {page.items.map((item) => (
              <li
                key={item}
                className="border-2 border-tpl-ink px-4 py-2.5 text-tpl-sm font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) 560px, 100vw"
          rounded="none"
        />
      </div>
    </TemplateSection>
  );
}
