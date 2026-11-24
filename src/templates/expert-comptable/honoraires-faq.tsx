import { Plus } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

/** Preuve : questions fréquentes en `<details>` natifs, photo de papier à côté. */
export function HonorairesFaq({ locale }: { locale: TemplateLocale }) {
  const faq = getTemplateCopy(expertComptable, locale).honorairesPage.faq;

  return (
    <TemplateSection eyebrow={faq.eyebrow} title={faq.title}>
      <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
        <div className="border-t-2 border-tpl-ink">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-tpl-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-tpl-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-tpl-accent transition-transform group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-tpl-measure pb-5 text-tpl-sm text-tpl-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <div className="hidden lg:sticky lg:top-28 lg:block">
          <TemplateMedia
            src={faq.image.src}
            alt={faq.image.alt}
            ratio="1/1"
            sizes="(min-width: 1024px) 384px, calc(85vw - 16px)"
          />
        </div>
      </div>
    </TemplateSection>
  );
}
