import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { HomeHandover } from "./home-handover";
import { HomeLedger } from "./home-ledger";
import { HomeOffer } from "./home-offer";
import { HomeProof } from "./home-proof";
import { ClosingCta } from "./parts";

/** Accueil : hero à feuille de compte, missions, avis, partage des tâches, appel final. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(expertComptable, locale);
  const hero = copy.home.hero;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <TemplateSection className="border-b border-tpl-line">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <TemplateHeading
              as="h1"
              eyebrow={hero.eyebrow}
              title={hero.title}
              description={hero.description}
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TemplateLink href={href(expertComptable.paths.contact)}>
                {copy.cta.quote}
              </TemplateLink>
              <TemplateLink
                href={href(expertComptable.paths.honoraires)}
                variant="outline"
                icon={false}
              >
                {copy.cta.fees}
              </TemplateLink>
            </div>
            <ul className="mt-10 border-t-2 border-tpl-ink">
              {hero.facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-3 border-b border-tpl-line py-3 text-tpl-sm"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <HomeLedger locale={locale} />
        </div>
      </TemplateSection>
      <HomeOffer locale={locale} />
      <HomeProof locale={locale} />
      <HomeHandover locale={locale} />
      <ClosingCta locale={locale} />
    </>
  );
}
