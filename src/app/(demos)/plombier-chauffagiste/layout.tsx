import type { ReactNode } from "react";

import { PlombierChauffagisteShell } from "@/templates/plombier-chauffagiste/shell";

/** Layout du template plombier-chauffagiste (français). Le shell est partagé avec `/en/plombier-chauffagiste`. */
export default function PlombierChauffagisteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PlombierChauffagisteShell locale="fr">
      {children}
    </PlombierChauffagisteShell>
  );
}
