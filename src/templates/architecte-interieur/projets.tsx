import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { CtaBand } from "./parts";
import { ProjectBlock } from "./projets-block";

/** Projets : trois réalisations, chacune avec deux photos et sa fiche chiffrée. */
export function ProjetsView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const page = copy.projets;

  return (
    <>
      <TemplateSection density="compact" tone="surface">
        <TemplateHeading
          as="h1"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className="mt-14 space-y-20 lg:space-y-24">
          {copy.projects.items.map((project, index) => (
            <ProjectBlock
              key={project.id}
              project={project}
              locale={locale}
              mirror={index % 2 === 1}
            />
          ))}
        </div>
      </TemplateSection>
      <CtaBand
        locale={locale}
        title={page.contact.title}
        text={page.contact.text}
      />
    </>
  );
}
