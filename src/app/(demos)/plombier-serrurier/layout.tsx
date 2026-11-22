import type { ReactNode } from "react";

import { PlombierSerrurierShell } from "@/templates/plombier-serrurier/shell";

/** Layout du template plombier-serrurier (français). Le shell est partagé avec `/en/plombier-serrurier`. */
export default function PlombierSerrurierLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PlombierSerrurierShell locale="fr">{children}</PlombierSerrurierShell>
  );
}
