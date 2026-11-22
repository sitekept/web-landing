import type { ReactNode } from "react";

import { ExpertComptableShell } from "@/templates/expert-comptable/shell";

/** Layout du template expert-comptable en anglais (`/en/expert-comptable`). */
export default function ExpertComptableEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ExpertComptableShell locale="en">{children}</ExpertComptableShell>;
}
