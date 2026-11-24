import type { ReactNode } from "react";

import { AgenceImmobiliereShell } from "@/templates/agence-immobiliere/shell";

/** Layout du template agence immobilière en anglais (`/en/agence-immobiliere`). */
export default function AgenceImmobiliereLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AgenceImmobiliereShell locale="en">{children}</AgenceImmobiliereShell>
  );
}
