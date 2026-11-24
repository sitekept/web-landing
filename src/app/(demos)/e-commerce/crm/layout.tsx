import type { ReactNode } from "react";

import { ECommerceCrmShell } from "@/templates/e-commerce/crm-shell";

/** Layout de l'espace gestion du template e-commerce (français). */
export default function ECommerceCrmLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ECommerceCrmShell locale="fr">{children}</ECommerceCrmShell>;
}
