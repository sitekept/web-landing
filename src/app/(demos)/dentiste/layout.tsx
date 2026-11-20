import type { ReactNode } from "react";

import { DentisteShell } from "@/templates/dentiste/shell";

/**
 * Layout du template dentiste (français). Le shell vit dans
 * `src/templates/dentiste/shell.tsx` et est partagé avec la version anglaise
 * (`(demos-en)/en/dentiste`) ; il décide seul d'afficher le sélecteur FR / EN.
 */
export default function DentisteLayout({ children }: { children: ReactNode }) {
  return <DentisteShell locale="fr">{children}</DentisteShell>;
}
