import type { ReactNode } from "react";

import { OrdinateurShell } from "@/templates/ordinateur/shell";

/**
 * Layout du template ordinateur (français). Le shell vit dans
 * `src/templates/ordinateur/shell.tsx` et est partagé avec la version anglaise
 * (`(demos-en)/en/ordinateur`) ; il décide seul d'afficher le sélecteur FR / EN.
 */
export default function OrdinateurLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <OrdinateurShell locale="fr">{children}</OrdinateurShell>;
}
