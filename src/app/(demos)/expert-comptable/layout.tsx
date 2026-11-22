import type { ReactNode } from "react";

import { ExpertComptableShell } from "@/templates/expert-comptable/shell";

/** Layout du template expert-comptable (français). Le shell est partagé avec `/en/expert-comptable`. */
export default function ExpertComptableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ExpertComptableShell locale="fr">{children}</ExpertComptableShell>;
}
