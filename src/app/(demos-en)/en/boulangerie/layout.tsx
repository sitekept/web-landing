import type { ReactNode } from "react";

import { BoulangerieShell } from "@/templates/boulangerie/shell";

/** Layout du template boulangerie en anglais (`/en/boulangerie`). */
export default function BoulangerieEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <BoulangerieShell locale="en">{children}</BoulangerieShell>;
}
