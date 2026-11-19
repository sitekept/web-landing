import type { ReactNode } from "react";

import { DentisteShell } from "./_views/shell";

/**
 * Layout du template dentiste (français). Le shell vit dans `_views/shell.tsx`
 * pour être partagé avec la version anglaise (tâche 1e : `/en/dentiste`).
 * `localeSwitch` passera à `true` quand la version anglaise existera.
 */
export default function DentisteLayout({ children }: { children: ReactNode }) {
  return (
    <DentisteShell locale="fr" localeSwitch={false}>
      {children}
    </DentisteShell>
  );
}
