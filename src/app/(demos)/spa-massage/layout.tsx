import type { ReactNode } from "react";

import { SpaMassageShell } from "@/templates/spa-massage/shell";

/** Layout du template spa-massage (français), partagé avec la version anglaise. */
export default function SpaMassageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SpaMassageShell locale="fr">{children}</SpaMassageShell>;
}
