import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { SPLIT_CLASS } from "./parts";

/** FAQ : titre et contact à gauche (5 colonnes), six questions à droite (7). */
export function FaqView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const page = copy.faq;

  return (
    <TemplateSection density="compact">
      <div className={SPLIT_CLASS}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
            <div className="mt-8 border-t border-tpl-line pt-6">
              <p className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {page.contact.title}
              </p>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                {page.contact.text}
              </p>
              <a
                href={copy.phone.href}
                className="mt-2 inline-flex min-h-11 items-center text-tpl-base font-semibold tabular-nums underline underline-offset-4"
              >
                {copy.phone.label}
              </a>
            </div>
          </div>
        </div>
        <dl className="divide-y divide-tpl-line border-y border-tpl-line lg:col-span-7">
          {page.items.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.q}
              </dt>
              <dd className="mt-3 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </TemplateSection>
  );
}
