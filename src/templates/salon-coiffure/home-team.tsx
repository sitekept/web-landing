import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Équipe : trois stylistes en liste à gauche, photo des outils à droite (7/5). */
export function TeamSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { team } = copy.home;
  const { paths } = salonCoiffure;

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <TemplateHeading title={team.title} description={team.description} />
          <ul className="mt-10">
            {copy.stylists.items.map((member) => (
              <li
                key={member.name}
                className="grid gap-x-6 gap-y-1 border-t border-tpl-line py-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {member.name}
                    <span className="font-normal text-tpl-ink-muted">
                      {" · "}
                      {member.role}
                    </span>
                  </h3>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {member.days}
                  </p>
                </div>
                <TemplateLink
                  href={templateHref(locale, paths.reservation)}
                  variant="ghost"
                  shape="pill"
                  className="justify-start sm:-mr-5 sm:justify-center"
                >
                  {member.book}
                </TemplateLink>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <TemplateLink
              href={templateHref(locale, paths.stylists)}
              variant="inverse"
              shape="pill"
            >
              {team.link}
            </TemplateLink>
          </div>
        </div>
        <div className="lg:col-span-5">
          <TemplateMedia
            src={team.image.src}
            alt={team.image.alt}
            ratio="4/3"
            sizes="(min-width: 1280px) 495px, (min-width: 1024px) 41vw, 100vw"
          />
        </div>
      </div>
    </TemplateSection>
  );
}

/** Réalisations : trois portraits, celui du milieu décalé vers le bas. */
export function WorkSection({ locale }: { locale: TemplateLocale }) {
  const { work } = getTemplateCopy(salonCoiffure, locale).home;

  return (
    <TemplateSection
      tone="raised"
      title={work.title}
      description={work.description}
    >
      <ul className="grid gap-x-6 gap-y-10 md:grid-cols-3">
        {work.items.map((item, index) => (
          <li key={item.caption} className={index === 1 ? "md:mt-12" : ""}>
            <figure>
              <TemplateMedia
                src={item.src}
                alt={item.alt}
                ratio="4/5"
                sizes="(min-width: 1280px) 395px, (min-width: 768px) 30vw, 100vw"
              />
              <figcaption className="mt-4">
                <span className="block font-semibold">{item.caption}</span>
                <span className="block text-tpl-sm text-tpl-ink-muted">
                  {item.meta}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <TemplateLink
          href={templateHref(locale, salonCoiffure.paths.lookbook)}
          variant="outline"
          shape="pill"
        >
          {work.link}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
