import type { ReactNode } from "react";

import { BoulangerieShell } from "@/templates/boulangerie/shell";

/** Layout du template boulangerie (français), partagé avec la version anglaise. */
export default function BoulangerieLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <BoulangerieShell locale="fr">{children}</BoulangerieShell>;
}
