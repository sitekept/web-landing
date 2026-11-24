import type { ReactNode } from "react";

import { FleuristeShell } from "@/templates/fleuriste/shell";

/** Layout du template fleuriste en anglais (`/en/fleuriste`). */
export default function FleuristeEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <FleuristeShell locale="en">{children}</FleuristeShell>;
}
