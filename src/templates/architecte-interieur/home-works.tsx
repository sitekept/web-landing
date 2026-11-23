import {
  TemplateHeading,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import {
  BLOCK_TITLE,
  PORTRAIT,
  TextLink,
  photoSizes,
  type Project,
} from "./parts";

/** Réalisation : photo cliquable, nature du projet, titre, résumé, repères. */
function WorkTile({
  project,
  locale,
  sizes,
  ratio,
}: {
  project: Project;
  locale: TemplateLocale;
  sizes: string;
  ratio: "3/2" | "4/5";
}) {
  const href = templateHref(locale, project.href);

  return (
    <article>
      <TemplateMedia
        src={project.imageMain.src}
        alt={project.imageMain.alt}
        ratio={ratio}
        rounded="none"
        sizes={sizes}
        className={ratio === "4/5" ? PORTRAIT : undefined}
      />
      <p className="mt-5 text-tpl-sm font-semibold text-tpl-ink-muted">
        {project.kind}
      </p>
      <h3 className={`${BLOCK_TITLE} mt-1`}>{project.title}</h3>
      <p className="mt-3 max-w-tpl-measure text-tpl-sm text-pretty text-tpl-ink-muted">
        {project.summary}
      </p>
      <p className="mt-3 text-tpl-sm font-medium tabular-nums">
        {project.surface} · {project.duration}
      </p>
      <TextLink href={href}>{project.cta}</TextLink>
    </article>
  );
}

/** Réalisations : un grand projet à gauche, deux plus petits à droite. */
export function HomeWorks({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { works } = copy.home;
  const [first, second, third] = copy.projects.items;
  const { paths } = architecteInterieur;

  return (
    <TemplateSection density="compact" tone="tint">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <TemplateHeading title={works.title} description={works.description} />
        <TextLink href={templateHref(locale, paths.projets)}>
          {works.all}
        </TextLink>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
        <div>
          <WorkTile
            project={first}
            locale={locale}
            ratio="4/5"
            sizes={photoSizes(7)}
          />
        </div>
        <div className="grid grid-cols-1 gap-10">
          {[second, third].map((project) => (
            <WorkTile
              key={project.id}
              project={project}
              locale={locale}
              ratio="3/2"
              sizes={photoSizes(5)}
            />
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
