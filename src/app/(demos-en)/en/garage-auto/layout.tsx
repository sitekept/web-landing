import type { ReactNode } from "react";

import { GarageAutoShell } from "@/templates/garage-auto/shell";

/** Layout du template garage auto (anglais, `/en/garage-auto`). Le shell est partagé entre les deux langues. */
export default function GarageAutoEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <GarageAutoShell locale="en">{children}</GarageAutoShell>;
}
