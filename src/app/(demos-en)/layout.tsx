import type { ReactNode } from "react";
import { DemoBanner } from "@/components/demo-banner";
import {
  RootDocument,
  buildRootMetadata,
  rootViewport,
} from "@/components/root-document";

/**
 * Layout commun aux démonstrations de templates en anglais (`/en/<slug>`).
 *
 * Pendant de `(demos)` : layout racine avec `lang="en"` fixé statiquement et
 * bandeau de démonstration anglais, dont le lien de retour pointe vers `/en`.
 * Il partage le segment `en` avec `(site-en)`, qui sert le site commercial
 * anglais (`/en`, `/en/templates`, `/en/<métier>`…) avec son `SiteShell` : les
 * routes de démo sont des segments statiques, plus spécifiques que le
 * `[metier]` dynamique de `(site-en)`.
 */
export const metadata = buildRootMetadata("en");
export const viewport = rootViewport;

export default function DemosEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RootDocument locale="en">
      <DemoBanner locale="en" />
      {children}
    </RootDocument>
  );
}
