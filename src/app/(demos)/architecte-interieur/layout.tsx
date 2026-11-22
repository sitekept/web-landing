import type { ReactNode } from "react";

import { ArchitecteInterieurShell } from "@/templates/architecte-interieur/shell";

/** Layout du template architecte-interieur (français). Le shell est partagé avec `/en/architecte-interieur`. */
export default function ArchitecteInterieurLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ArchitecteInterieurShell locale="fr">{children}</ArchitecteInterieurShell>
  );
}
