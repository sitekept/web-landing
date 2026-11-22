import type { ReactNode } from "react";

import { GarageAutoShell } from "@/templates/garage-auto/shell";

/** Layout du template garage auto (français). Le shell est partagé entre les deux langues. */
export default function GarageAutoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <GarageAutoShell locale="fr">{children}</GarageAutoShell>;
}
