import { Check } from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import type { AgentImmobilierIconKey } from "@/content/templates/agent-immobilier";
import { getTemplateCopy } from "@/content/templates/types";

import { AccentIcon } from "./parts";

type OfferColumn = {
  icon: AgentImmobilierIconKey;
  title: string;
  text: string;
  points: readonly string[];
  cta: string;
};

function Column({
  data,
  href,
  inverted,
}: {
  data: OfferColumn;
  href: string;
  inverted?: boolean;
}) {
  return (
    <div
      // Panneau sapin : `data-tone` rebinde l'encre et la surface sur la paire inverse.
      data-tone={inverted ? "inverse" : undefined}
      className="flex flex-col rounded-tpl border border-tpl-line bg-tpl-surface p-7 text-tpl-ink sm:p-9"
    >
      <AccentIcon
        icon={data.icon}
        className="size-8"
        tone={inverted ? "ink" : "accent"}
      />
      <h3 className="mt-6 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
        {data.title}
      </h3>
      <p className="mt-3 text-tpl-base text-tpl-ink-muted">{data.text}</p>
      <ul className="mt-6 space-y-3 text-tpl-sm">
        {data.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <Check
              aria-hidden="true"
              className={`mt-0.5 size-4 shrink-0 ${inverted ? "text-tpl-ink" : "text-tpl-accent"}`}
            />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <TemplateLink href={href} variant={inverted ? "inverse" : "solid"}>
          {data.cta}
        </TemplateLink>
      </div>
    </div>
  );
}

/** Offre : deux colonnes, vendeurs sur fond clair, acquéreurs sur fond sapin. */
export function HomeOffer({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.home.offer;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Column
          data={page.sellers}
          href={href(agentImmobilier.paths.estimation)}
        />
        <Column
          data={page.buyers}
          href={href(agentImmobilier.paths.biens)}
          inverted
        />
      </div>
    </TemplateSection>
  );
}
