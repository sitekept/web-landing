import type { ReactNode } from "react";

import { PatisserieShell } from "@/templates/patisserie/shell";

/** Layout du template patisserie (français), partagé avec la version anglaise. */
export default function PatisserieLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PatisserieShell locale="fr">{children}</PatisserieShell>;
}
