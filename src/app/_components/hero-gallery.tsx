import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { publicTemplates } from "@/content/templates/registry";
import {
  getLocalizedText,
  homeContent,
  type SiteLocale,
} from "@/content/site-content";
import { linkLocalizer } from "@/lib/localized-routes";

type GalleryTemplate = (typeof publicTemplates)[number];

/*
 * Galerie du hero : les captures des templates publics défilent en boucle sur
 * un panneau bleu. Desktop : deux colonnes en sens opposés. Mobile : une bande
 * horizontale. Chaque piste est rendue deux fois (la copie est `aria-hidden`)
 * et translate de -50 % : l'espace entre cartes est un padding interne à
 * chaque carte, pour que les deux moitiés aient exactement la même taille.
 * CSS seul, aucun JS client. Pause au survol et au focus, aucune animation
 * sous `prefers-reduced-motion`.
 */
const PAUSE =
  "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]";

// Largeur utile d'une carte : (440 - 2 × 12 de padding - 12 d'écart) / 2 ≈ 200 px
// en colonnes, 200 px dans la bande mobile.
const CARD_SIZES = "200px";

function GalleryCard({
  template,
  locale,
  duplicate,
}: {
  template: GalleryTemplate;
  locale: SiteLocale;
  duplicate: boolean;
}) {
  const href = linkLocalizer(locale);
  const name = template.gallery.copy[locale].name;
  const path = href(`/${template.slug}`);

  return (
    <Link
      href={path}
      tabIndex={duplicate ? -1 : undefined}
      className="block overflow-hidden rounded-md bg-white ring-1 ring-white/40 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
    >
      <span
        aria-hidden="true"
        className="flex h-5 items-center gap-1 bg-slate-100 px-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="ml-1.5 truncate font-mono text-[10px] text-slate-500">
          {path}
        </span>
      </span>
      <span className="relative block aspect-[4/3] bg-slate-100">
        <Image
          src={template.gallery.screenshot}
          alt=""
          fill
          sizes={CARD_SIZES}
          loading="lazy"
          className="object-cover object-top"
        />
      </span>
      <span className="block truncate px-3 py-2 text-xs font-medium text-slate-800">
        {name}
      </span>
    </Link>
  );
}

function Track({
  templates,
  locale,
  className,
  itemClassName,
}: {
  templates: readonly GalleryTemplate[];
  locale: SiteLocale;
  className: string;
  itemClassName: string;
}) {
  return (
    <ul className={clsx("flex", PAUSE, className)}>
      {[false, true].flatMap((duplicate) =>
        templates.map((template) => (
          <li
            key={`${duplicate ? "copy" : "main"}-${template.slug}`}
            aria-hidden={duplicate || undefined}
            className={clsx(
              "shrink-0",
              itemClassName,
              duplicate && "motion-reduce:hidden"
            )}
          >
            <GalleryCard
              template={template}
              locale={locale}
              duplicate={duplicate}
            />
          </li>
        ))
      )}
    </ul>
  );
}

export function HeroGallery({ locale }: { locale: SiteLocale }) {
  const half = Math.ceil(publicTemplates.length / 2);
  const firstColumn = publicTemplates.slice(0, half);
  const secondColumn = publicTemplates.slice(half);

  return (
    <nav
      aria-label={getLocalizedText(homeContent.hero.galleryLabel, locale)}
      className="group overflow-hidden rounded-2xl bg-blue-600"
    >
      {/* Mobile et tablette : une bande horizontale. */}
      <div className="py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] lg:hidden">
        <Track
          templates={publicTemplates}
          locale={locale}
          className="w-max animate-hero-x motion-reduce:animate-none"
          itemClassName="w-[200px] pr-3"
        />
      </div>

      {/* Desktop : deux colonnes en sens opposés. */}
      <div className="hidden h-[560px] gap-3 px-3 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] lg:flex">
        <Track
          templates={firstColumn}
          locale={locale}
          className="min-w-0 flex-1 flex-col animate-hero-up motion-reduce:animate-none"
          itemClassName="pb-3"
        />
        <Track
          templates={secondColumn}
          locale={locale}
          className="min-w-0 flex-1 flex-col animate-hero-down motion-reduce:animate-none"
          itemClassName="pb-3"
        />
      </div>
    </nav>
  );
}
