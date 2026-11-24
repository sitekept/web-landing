import type { ReactNode } from "react";

import { AgenceImmobiliereShell } from "@/templates/agence-immobiliere/shell";

/** Layout du template agence immobilière (français), partagé avec la version anglaise. */
export default function AgenceImmobiliereLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AgenceImmobiliereShell locale="fr">{children}</AgenceImmobiliereShell>
  );
}
