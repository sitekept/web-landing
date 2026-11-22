import type { ReactNode } from "react";

import { CabinetAvocatShell } from "@/templates/cabinet-avocat/shell";

/** Layout du template cabinet-avocat (français). Le shell est partagé avec `/en/cabinet-avocat`. */
export default function CabinetAvocatLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <CabinetAvocatShell locale="fr">{children}</CabinetAvocatShell>;
}
