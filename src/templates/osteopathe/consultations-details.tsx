import { TriangleAlert } from "lucide-react";

import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge } from "./parts";

/** Tarifs : tableau sobre, la note de remboursement en dessous. */
export function Pricing({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).consultations.pricing;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          className="self-start"
        />
        <div>
          <table className="w-full text-left text-tpl-sm">
            <caption className="sr-only">{page.caption}</caption>
            <thead>
              <tr className="border-b border-tpl-ink/60 text-tpl-xs tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                <th scope="col" className="py-3 pr-4 font-semibold">
                  {page.columns.service}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {page.columns.duration}
                </th>
                <th scope="col" className="py-3 pl-4 text-right font-semibold">
                  {page.columns.price}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tpl-line">
              {page.rows.map((row) => (
                <tr key={row.service}>
                  <th scope="row" className="py-5 pr-4 font-semibold">
                    {row.service}
                  </th>
                  <td className="px-4 py-5 text-tpl-ink-muted">
                    {row.duration}
                  </td>
                  <td className="py-5 pl-4 text-right font-tpl-display text-tpl-lg whitespace-nowrap">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-tpl-sm text-tpl-ink-muted">{page.note}</p>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Ce qu'il faut apporter. */
export function Bring({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).consultations.bring;

  return (
    <TemplateSection eyebrow={page.eyebrow} title={page.title}>
      <ul className="grid gap-5 sm:grid-cols-2">
        {page.items.map((item) => (
          <li key={item.text}>
            <TemplatePanel className="flex h-full items-start gap-4">
              <IconBadge icon={item.icon} />
              <p className="pt-2 text-tpl-sm">{item.text}</p>
            </TemplatePanel>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/** Limites et contre-indications : renvoi vers le médecin. */
export function Limits({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).consultations.limits;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          className="self-start"
        />
        <div>
          <p className="flex items-start gap-3 text-tpl-base">
            <TriangleAlert
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-tpl-accent"
            />
            {page.text}
          </p>
          <ul className="mt-6 space-y-3 border-l-2 border-tpl-line pl-6 text-tpl-sm text-tpl-ink-muted">
            {page.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-tpl-sm font-semibold">{page.closing}</p>
        </div>
      </div>
    </TemplateSection>
  );
}
