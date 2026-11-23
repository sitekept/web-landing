import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { AgentsTeam } from "./agents-team";
import { ClosingBand } from "./parts";

/** Agents : titre et photo de clés, une carte par agent (initiale, rôle, quartiers), méthode d'équipe. */
export function AgentsView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.agents;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <TemplateSection density="compact">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.hero.eyebrow}
              title={page.hero.title}
              description={page.hero.description}
            />
            <div className="mt-8">
              <TemplateLink href={href(agenceImmobiliere.paths.quartiers)}>
                {copy.cta.seeDistricts}
              </TemplateLink>
            </div>
          </div>
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="4/3"
            sizes="(min-width: 1024px) 512px, calc(93.5vw - 45px)"
            priority
          />
        </div>
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.list.eyebrow}
        title={page.list.title}
      >
        <ul role="list" className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {page.list.items.map((agent) => (
            <li key={agent.name} className="flex">
              <article className="flex w-full flex-col rounded-tpl border border-tpl-line bg-tpl-surface p-7">
                <span
                  aria-hidden="true"
                  className="flex size-14 items-center justify-center rounded-tpl-pill bg-tpl-inverse font-tpl-display text-tpl-xl text-tpl-inverse-ink"
                >
                  {agent.name.charAt(0)}
                </span>
                <h3 className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {agent.name}
                </h3>
                <p className="mt-1 text-tpl-sm font-semibold text-tpl-accent">
                  {agent.role}
                </p>
                <p className="mt-4 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                  {page.list.sectorLabel}
                </p>
                <p className="text-tpl-sm">{agent.sector}</p>
                <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
                  {agent.text}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-tpl-sm">
                  {agent.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <TemplateLink
                    href={href(agenceImmobiliere.paths.contact)}
                    variant="outline"
                    size="sm"
                  >
                    {agent.cta}
                  </TemplateLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <AgentsTeam locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
