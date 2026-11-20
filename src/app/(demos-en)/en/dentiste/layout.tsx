import type { ReactNode } from "react";

import { DentisteShell } from "@/app/(demos)/dentiste/_views/shell";

/** Layout du template dentiste en anglais (`/en/dentiste`). */
export default function DentisteEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DentisteShell locale="en" localeSwitch>
      {children}
    </DentisteShell>
  );
}
