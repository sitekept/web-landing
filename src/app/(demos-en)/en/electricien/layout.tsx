import type { ReactNode } from "react";

import { ElectricienShell } from "@/templates/electricien/shell";

/** Layout du template électricien en anglais (`/en/electricien`). */
export default function ElectricienEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ElectricienShell locale="en">{children}</ElectricienShell>;
}
