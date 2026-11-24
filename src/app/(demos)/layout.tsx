import type { ReactNode } from "react";
import { DemoBanner } from "@/components/demo-banner";
import {
  RootDocument,
  buildRootMetadata,
  rootViewport,
} from "@/components/root-document";

/**
 * Layout commun aux démonstrations de templates.
 *
 * `(demos)` est un groupe de routes : il n'apparaît pas dans les URLs, qui
 * restent `/dentiste`, `/boulangerie`, etc.
 *
 * Il existe pour rendre le bandeau de démonstration à un seul endroit, de
 * façon statique. La version précédente le déclenchait depuis le layout
 * racine via un en-tête posé par un middleware (supprimé depuis : le `noindex`
 * vient de `headers()` de next.config.ts), ce qui imposait un appel à
 * `headers()` — et basculait donc **toutes** les routes du site en rendu
 * dynamique, y compris les pages commerciales.
 *
 * C'est aussi un layout racine, en français : `lang="fr"` est fixé ici. Les
 * versions anglaises (`/en/<slug>`) ont leur propre racine, `(demos-en)`.
 */
export const metadata = buildRootMetadata("fr");
export const viewport = rootViewport;

export default function DemosLayout({ children }: { children: ReactNode }) {
  return (
    <RootDocument locale="fr">
      <DemoBanner />
      {children}
    </RootDocument>
  );
}
