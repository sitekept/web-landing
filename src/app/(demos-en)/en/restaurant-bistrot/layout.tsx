import type { ReactNode } from "react";

import { RestaurantBistrotShell } from "@/templates/restaurant-bistrot/shell";

/**
 * Layout du template restaurant-bistrot (anglais). Le shell vit dans
 * `src/templates/restaurant-bistrot/shell.tsx` et est partagé avec l'autre langue.
 */
export default function RestaurantBistrotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RestaurantBistrotShell locale="en">{children}</RestaurantBistrotShell>
  );
}
