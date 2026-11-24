import type { ReactNode } from "react";

import { ReparationMobileShell } from "@/templates/reparation-mobile/shell";

/** Layout du template réparation mobile (français). */
export default function ReparationMobileLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ReparationMobileShell locale="fr">{children}</ReparationMobileShell>;
}
