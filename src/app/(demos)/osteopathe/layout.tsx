import type { ReactNode } from "react";

import { OsteopatheShell } from "@/templates/osteopathe/shell";

/** Layout du template ostéopathe (français), partagé avec la version anglaise. */
export default function OsteopatheLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <OsteopatheShell locale="fr">{children}</OsteopatheShell>;
}
