import { templateHref, type TemplateLocale } from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";
import { cn } from "@/lib/utils";

import {
  BLOCK_TITLE,
  PORTRAIT,
  ProjectFacts,
  TextLink,
  photoSizes,
  type Project,
} from "./parts";

/**
 * Un projet : titre et résumé, fiche chiffrée, puis deux photos (paysage et
 * portrait). `mirror` inverse l'ordre des photos d'un projet à l'autre.
 */
export function ProjectBlock({
  project,
  locale,
  mirror,
}: {
  project: Project;
  locale: TemplateLocale;
  mirror: boolean;
}) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { paths } = architecteInterieur;
  const hasPage = !project.href.includes("#");

  return (
    <article id={project.id}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
        <div>
          <p className="text-tpl-sm font-semibold text-tpl-ink-muted">
            {project.kind}
          </p>
          <h2 className={`${BLOCK_TITLE} mt-1`}>{project.title}</h2>
          <p className="mt-4 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6">
            {hasPage ? (
              <TextLink href={templateHref(locale, project.href)}>
                {project.cta}
              </TextLink>
            ) : null}
            <TextLink href={templateHref(locale, paths.contact)}>
              {copy.projets.similar}
            </TextLink>
          </div>
        </div>
        <div>
          <ProjectFacts project={project} labels={copy.projects.factLabels} />
        </div>
      </div>
      <div
        className={cn(
          "mt-8 grid items-start gap-6 lg:gap-12",
          mirror
            ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
            : "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
        )}
      >
        <div className={mirror ? "lg:order-2" : undefined}>
          <TemplateMedia
            src={project.imageMain.src}
            alt={project.imageMain.alt}
            ratio="3/2"
            rounded="none"
            sizes={photoSizes(7)}
          />
        </div>
        <div className={mirror ? "lg:order-1" : undefined}>
          <TemplateMedia
            src={project.imageSide.src}
            alt={project.imageSide.alt}
            ratio="4/5"
            rounded="none"
            sizes={photoSizes(5)}
            className={PORTRAIT}
          />
        </div>
      </div>
    </article>
  );
}
