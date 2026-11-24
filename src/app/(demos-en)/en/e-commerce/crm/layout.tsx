import type { ReactNode } from "react";

import { ECommerceCrmShell } from "@/templates/e-commerce/crm-shell";

/** Layout de l'espace gestion du template e-commerce (anglais). */
export default function ECommerceCrmEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ECommerceCrmShell locale="en">{children}</ECommerceCrmShell>;
}
