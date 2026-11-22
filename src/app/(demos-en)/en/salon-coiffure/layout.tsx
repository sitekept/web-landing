import type { ReactNode } from "react";

import { SalonCoiffureShell } from "@/templates/salon-coiffure/shell";

/** Layout du template salon-coiffure en anglais (`/en/salon-coiffure`). */
export default function SalonCoiffureEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SalonCoiffureShell locale="en">{children}</SalonCoiffureShell>;
}
