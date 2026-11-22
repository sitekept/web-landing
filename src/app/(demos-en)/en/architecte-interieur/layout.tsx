import type { ReactNode } from "react";

import { ArchitecteInterieurShell } from "@/templates/architecte-interieur/shell";

/** Layout du template architecte-interieur en anglais (`/en/architecte-interieur`). */
export default function ArchitecteInterieurEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ArchitecteInterieurShell locale="en">{children}</ArchitecteInterieurShell>
  );
}
