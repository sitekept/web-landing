import type { ReactNode } from "react";

import { AgentImmobilierShell } from "@/templates/agent-immobilier/shell";

/** Layout du template agent immobilier en anglais (`/en/agent-immobilier`). */
export default function AgentImmobilierEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AgentImmobilierShell locale="en">{children}</AgentImmobilierShell>;
}
