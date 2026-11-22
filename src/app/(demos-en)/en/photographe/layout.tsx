import type { ReactNode } from "react";

import { PhotographeShell } from "@/templates/photographe/shell";

/** Layout du template photographe en anglais (`/en/photographe`). */
export default function PhotographeEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PhotographeShell locale="en">{children}</PhotographeShell>;
}
