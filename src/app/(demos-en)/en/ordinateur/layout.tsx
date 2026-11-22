import type { ReactNode } from "react";

import { OrdinateurShell } from "@/templates/ordinateur/shell";

/** Layout du template ordinateur en anglais (`/en/ordinateur`). */
export default function OrdinateurEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <OrdinateurShell locale="en">{children}</OrdinateurShell>;
}
