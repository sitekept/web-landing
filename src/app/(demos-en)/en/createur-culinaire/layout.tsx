import type { ReactNode } from "react";

import { CreateurCulinaireShell } from "@/templates/createur-culinaire/shell";

/** Layout du template créateur culinaire en anglais (`/en/createur-culinaire`). */
export default function CreateurCulinaireEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CreateurCulinaireShell locale="en">{children}</CreateurCulinaireShell>
  );
}
