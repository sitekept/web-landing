import type { ReactNode } from "react";

import { SpaMassageShell } from "@/templates/spa-massage/shell";

/** Layout du template spa-massage en anglais (`/en/spa-massage`). */
export default function SpaMassageEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SpaMassageShell locale="en">{children}</SpaMassageShell>;
}
