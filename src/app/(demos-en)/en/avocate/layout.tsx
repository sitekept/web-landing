import type { ReactNode } from "react";

import { AvocateShell } from "@/templates/avocate/shell";

/** Layout du template avocate en anglais (`/en/avocate`). */
export default function AvocateEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AvocateShell locale="en">{children}</AvocateShell>;
}
