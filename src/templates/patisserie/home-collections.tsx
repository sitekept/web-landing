import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Collections : deux grandes cartes sur fond crème, la photo alterne de côté. */
export function HomeCollections({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).collections;

  return (
    <TemplateSection
      id={ANCHORS.collections}
      tone="inverse"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="title"
    >
      <ul className="space-y-10">
        {page.items.map((item, index) => (
          <li key={item.title}>
            <TemplatePanel
              tone="surface"
              className="grid gap-6 rounded-[2.4rem] p-5 shadow-tpl-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-7"
            >
              <div
                className={`relative min-h-[380px] overflow-hidden rounded-3xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <TemplateMedia
                  src={item.image.src}
                  alt={item.image.alt}
                  ratio="fill"
                  rounded="none"
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                  className="absolute inset-0 min-h-[380px]"
                />
              </div>
              <div className="flex flex-col justify-center p-2 sm:p-6">
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                  {item.note}
                </p>
                <h3 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-xl text-tpl-base text-tpl-ink-muted">
                  {item.description}
                </p>
              </div>
            </TemplatePanel>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
