import type { ReactNode } from "react";

import { DentisteShell } from "@/templates/dentiste/shell";

/** Layout du template dentiste en anglais (`/en/dentiste`). */
export default function DentisteEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DentisteShell locale="en">{children}</DentisteShell>;
}
