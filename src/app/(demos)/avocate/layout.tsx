import type { ReactNode } from "react";

import { AvocateShell } from "@/templates/avocate/shell";

/** Layout du template avocate (français). Le shell est partagé avec `/en/avocate`. */
export default function AvocateLayout({ children }: { children: ReactNode }) {
  return <AvocateShell locale="fr">{children}</AvocateShell>;
}
