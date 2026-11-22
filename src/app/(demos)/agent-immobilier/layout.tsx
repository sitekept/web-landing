import type { ReactNode } from "react";

import { AgentImmobilierShell } from "@/templates/agent-immobilier/shell";

/** Layout du template agent immobilier (français), partagé avec la version anglaise. */
export default function AgentImmobilierLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AgentImmobilierShell locale="fr">{children}</AgentImmobilierShell>;
}
