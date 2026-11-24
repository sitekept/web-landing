import type { ReactNode } from "react";

import { SalonCoiffureShell } from "@/templates/salon-coiffure/shell";

/** Layout du template salon-coiffure (français). Le shell est partagé avec `/en/salon-coiffure`. */
export default function SalonCoiffureLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SalonCoiffureShell locale="fr">{children}</SalonCoiffureShell>;
}
