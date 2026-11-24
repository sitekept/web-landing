import type { ReactNode } from "react";

import { MenageNettoyageShell } from "@/templates/menage-nettoyage/shell";

/** Layout du template ménage-nettoyage en anglais (`/en/menage-nettoyage`). */
export default function MenageNettoyageEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <MenageNettoyageShell locale="en">{children}</MenageNettoyageShell>;
}
