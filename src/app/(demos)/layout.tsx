import type { ReactNode } from "react";
import { DemoBanner } from "@/components/demo-banner";

/**
 * Layout commun aux démonstrations de templates.
 *
 * `(demos)` est un groupe de routes : il n'apparaît pas dans les URLs, qui
 * restent `/dentiste`, `/boulangerie`, etc.
 *
 * Il existe pour rendre le bandeau de démonstration à un seul endroit, de
 * façon statique. La version précédente le déclenchait depuis le layout
 * racine via un en-tête posé par le middleware, ce qui imposait un appel à
 * `headers()` — et basculait donc **toutes** les routes du site en rendu
 * dynamique, y compris les pages commerciales.
 */
export default function DemosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DemoBanner />
      {children}
    </>
  );
}
