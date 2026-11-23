import type { ReactNode } from "react";

import { TemplateMedia } from "@/components/template-kit/media";

/**
 * Bloc héros de l'accueil : même construction que `TemplateHeroMedia` (photo
 * pleine largeur, voile dégradé des tokens `inverse`, contenu en `data-tone`
 * inverse), avec un `sizes` propre. Sur un téléphone la boîte (un écran moins le bandeau de démonstration) est bien
 * plus haute que large : avec `object-cover`, le fichier utile fait environ
 * 3,3 fois la largeur de l'écran, ce que le `sizes` du kit (200 vw) ne couvre pas.
 */
export function BistrotHero({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <div
      data-tone="inverse"
      className="relative flex min-h-[calc(100svh-4.5rem)] w-full flex-col overflow-hidden bg-tpl-inverse text-tpl-ink [--tpl-ink-muted:color-mix(in_oklch,var(--tpl-ink)_90%,var(--tpl-surface))] sm:min-h-[calc(100svh-2.5rem)]"
    >
      <TemplateMedia
        src={src}
        alt={alt}
        ratio="fill"
        rounded="none"
        priority
        sizes="(min-width: 1024px) 100vw, (min-width: 640px) 200vw, 340vw"
        className="absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-tpl-inverse/88 to-tpl-inverse/78"
      />
      <div className="relative flex w-full flex-1 flex-col">{children}</div>
    </div>
  );
}
