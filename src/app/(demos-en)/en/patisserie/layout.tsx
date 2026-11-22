import type { ReactNode } from "react";

import { PatisserieShell } from "@/templates/patisserie/shell";

/** Layout du template patisserie en anglais (`/en/patisserie`). */
export default function PatisserieEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PatisserieShell locale="en">{children}</PatisserieShell>;
}
