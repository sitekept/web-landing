import type { ReactNode } from "react";

import { MenageNettoyageShell } from "@/templates/menage-nettoyage/shell";

/**
 * Layout du template ménage-nettoyage (français). Le shell vit dans
 * `src/templates/menage-nettoyage/shell.tsx` et est partagé avec la version
 * anglaise (`(demos-en)/en/menage-nettoyage`).
 */
export default function MenageNettoyageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <MenageNettoyageShell locale="fr">{children}</MenageNettoyageShell>;
}
