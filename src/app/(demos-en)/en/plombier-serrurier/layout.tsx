import type { ReactNode } from "react";

import { PlombierSerrurierShell } from "@/templates/plombier-serrurier/shell";

/** Layout du template plombier-serrurier en anglais (`/en/plombier-serrurier`). */
export default function PlombierSerrurierEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PlombierSerrurierShell locale="en">{children}</PlombierSerrurierShell>
  );
}
