import { TemplateSection } from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import type { PlombierSerrurierIconKey } from "@/content/templates/plombier-serrurier";

import { IconBadge, type Trade } from "./parts";

type Image = { src: string; alt: string };

type Volet = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: Image;
  secondImage: Image;
  items: readonly {
    icon: PlombierSerrurierIconKey;
    title: string;
    text: string;
    from: string;
  }[];
};

/**
 * Un volet de la page dépannages (plomberie ou serrurerie) : deux photos d'un
 * côté, la liste des interventions de l'autre, chacune avec son tarif de
 * départ. `flip` inverse les colonnes pour alterner d'un volet à l'autre.
 */
export function VoletSection({
  volet,
  trade,
  fromLabel,
  tone,
  flip = false,
}: {
  volet: Volet;
  trade: Trade;
  fromLabel: string;
  tone: "surface" | "raised";
  flip?: boolean;
}) {
  return (
    <TemplateSection
      id={volet.id}
      tone={tone}
      eyebrow={volet.eyebrow}
      title={volet.title}
      description={volet.description}
    >
      <div
        className={`grid gap-10 lg:gap-14 ${flip ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]"}`}
      >
        <div
          className={`grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:content-stretch ${flip ? "lg:order-2" : ""}`}
        >
          <TemplateMedia
            src={volet.image.src}
            alt={volet.image.alt}
            ratio="1/1"
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
          />
          <TemplateMedia
            src={volet.secondImage.src}
            alt={volet.secondImage.alt}
            ratio="16/9"
            className="lg:aspect-auto lg:h-full lg:min-h-40"
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <ul className="divide-y divide-tpl-line border-y border-tpl-line">
          {volet.items.map((item) => (
            <li key={item.title} className="flex gap-4 py-6">
              <IconBadge icon={item.icon} trade={trade} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h3>
                  <p className="text-tpl-base font-semibold whitespace-nowrap tabular-nums">
                    <span className="sr-only">{fromLabel} </span>
                    {item.from}
                  </p>
                </div>
                <p className="mt-2 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
