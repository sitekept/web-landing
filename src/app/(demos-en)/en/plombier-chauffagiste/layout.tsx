import type { ReactNode } from "react";

import { PlombierChauffagisteShell } from "@/templates/plombier-chauffagiste/shell";

/** Layout du template plombier-chauffagiste en anglais (`/en/plombier-chauffagiste`). */
export default function PlombierChauffagisteEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PlombierChauffagisteShell locale="en">{children}</PlombierChauffagisteShell>
  );
}
