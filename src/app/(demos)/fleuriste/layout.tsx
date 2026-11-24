import type { ReactNode } from "react";

import { FleuristeShell } from "@/templates/fleuriste/shell";

/** Layout du template fleuriste (français), partagé avec la version anglaise. */
export default function FleuristeLayout({ children }: { children: ReactNode }) {
  return <FleuristeShell locale="fr">{children}</FleuristeShell>;
}
