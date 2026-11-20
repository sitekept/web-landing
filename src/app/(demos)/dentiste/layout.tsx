import type { ReactNode } from "react";

import { DentisteShell } from "./_views/shell";

/**
 * Layout du template dentiste (français). Le shell vit dans `_views/shell.tsx`
 * et est partagé avec la version anglaise (`(demos-en)/en/dentiste`) ; le
 * sélecteur FR / EN est actif des deux côtés.
 */
export default function DentisteLayout({ children }: { children: ReactNode }) {
  return (
    <DentisteShell locale="fr" localeSwitch>
      {children}
    </DentisteShell>
  );
}
