import type { ReactNode } from "react";

import { PhotographeShell } from "@/templates/photographe/shell";

/** Layout du template photographe (français), partagé avec la version anglaise. */
export default function PhotographeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PhotographeShell locale="fr">{children}</PhotographeShell>;
}
