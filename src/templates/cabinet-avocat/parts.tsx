import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * `sizes` d'une photo qui occupe 5 colonnes sur 12 (grille de 12, écart de 3 rem)
 * à partir de `lg`, et toute la largeur du contenu en dessous. Suit la largeur
 * réelle : contenu = min(1280 px, écran − marges), marges 2 rem (`lg`), 1,5 rem
 * (`sm`) ou 1 rem.
 */
export const COL5_SIZES =
  "(min-width: 1344px) 505px, (min-width: 1024px) calc((5 * (100vw - 64px) - 2640px) / 12 + 192px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)";

/** Petit libellé en capitales espacées (tracking du token), teinte des sur-titres. */
export const LABEL =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

/** Lien de repli sur fond blanc : bordure d'encre au survol. */
export const LINK_OUTLINE =
  "bg-tpl-raised hover:border-tpl-ink hover:bg-tpl-raised";

/**
 * Introduction d'une page : titre `h1` et description à gauche (7 colonnes),
 * photo à droite (5 colonnes, 3/2). Sous `lg`, la photo passe après le texte.
 */
export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <TemplateSection density="compact" className="border-b border-tpl-line">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
        <TemplateHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="lg:col-span-7"
        />
        <div className="lg:col-span-5">
          <TemplateMedia
            src={image}
            alt={imageAlt}
            ratio="3/2"
            rounded="none"
            sizes={COL5_SIZES}
          />
        </div>
      </div>
    </TemplateSection>
  );
}

/**
 * Appel final des sous-pages et de l'accueil : un titre, une phrase, le bouton
 * de rendez-vous et le numéro de téléphone, sur fond beige.
 */
export function ClosingCta({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { closing, contact } = copy;

  return (
    <TemplateSection density="compact" tone="tint">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <TemplateHeading
          title={closing.title}
          description={closing.text}
          className="lg:col-span-8"
        />
        <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
          <TemplateLink
            href={templateHref(locale, cabinetAvocat.paths.consultation)}
            icon={false}
          >
            {closing.primary}
          </TemplateLink>
          <p className="text-tpl-sm text-tpl-ink-muted">
            {closing.callLabel}{" "}
            <a
              href={contact.phone.href}
              className="inline-flex min-h-11 items-center font-semibold whitespace-nowrap text-tpl-ink tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
            >
              {contact.phone.label}
            </a>
          </p>
        </div>
      </div>
    </TemplateSection>
  );
}
