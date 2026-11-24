import type { ReactNode } from "react";

import { OsteopatheShell } from "@/templates/osteopathe/shell";

/** Layout du template ostéopathe en anglais (`/en/osteopathe`). */
export default function OsteopatheEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <OsteopatheShell locale="en">{children}</OsteopatheShell>;
}
