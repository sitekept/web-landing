import type { ReactNode } from "react";

import { CreateurCulinaireShell } from "@/templates/createur-culinaire/shell";

/** Layout du template créateur culinaire (français). */
export default function CreateurCulinaireLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CreateurCulinaireShell locale="fr">{children}</CreateurCulinaireShell>
  );
}
