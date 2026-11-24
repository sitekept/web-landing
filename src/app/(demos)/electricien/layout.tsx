import type { ReactNode } from "react";

import { ElectricienShell } from "@/templates/electricien/shell";

/** Layout du template électricien (français). Le shell est partagé avec `/en/electricien`. */
export default function ElectricienLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ElectricienShell locale="fr">{children}</ElectricienShell>;
}
