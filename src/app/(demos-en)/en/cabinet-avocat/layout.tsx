import type { ReactNode } from "react";

import { CabinetAvocatShell } from "@/templates/cabinet-avocat/shell";

/** Layout du template cabinet-avocat en anglais (`/en/cabinet-avocat`). */
export default function CabinetAvocatEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <CabinetAvocatShell locale="en">{children}</CabinetAvocatShell>;
}
