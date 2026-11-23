import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS, LIME_BUTTON } from "./parts";

/**
 * Accueil sur fond graphite : promesse à gauche (7 colonnes), photo de
 * portable ouvert à droite (5), trois engagements en filet sous le texte.
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.hero;
  const anchor = (id: string) =>
    templateHref(locale, `${ordinateur.paths.home}#${id}`);

  return (
    <TemplateSection id={ANCHORS.home} tone="inverse" density="compact">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <TemplateHeading
            as="h1"
            id="accueil-titre"
            title={
              <>
                {page.title}{" "}
                <span className="text-tpl-eyebrow">{page.accent}</span>
              </>
            }
            description={page.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={anchor(ANCHORS.contact)}
              icon={false}
              className={LIME_BUTTON}
            >
              {page.primary}
            </TemplateLink>
            <TemplateLink
              href={copy.phone.href}
              variant="outline"
              icon={false}
              className="border-tpl-ink/40 tabular-nums"
            >
              {page.secondary}
            </TemplateLink>
          </div>
          <ul className="mt-12 grid gap-6 border-t border-tpl-line pt-8 sm:grid-cols-3">
            {page.facts.map((fact) => {
              const Icon = ICONS[fact.icon];

              return (
                <li key={fact.title}>
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-tpl-eyebrow"
                  />
                  <p className="mt-3 font-semibold">{fact.title}</p>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {fact.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/5"
            sizes="(min-width: 1344px) 505px, (min-width: 1024px) 36vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            priority
            className="shadow-tpl-lg max-lg:aspect-[3/2]"
          />
        </div>
      </div>
    </TemplateSection>
  );
}
