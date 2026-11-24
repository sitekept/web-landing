import type { ReactNode } from "react";

import { ECommerceShell } from "@/templates/e-commerce/shell";

/**
 * Layout de la boutique e-commerce (anglais). Groupe `(boutique)` : la boutique
 * et l'espace gestion (`crm/`) ont chacun leur shell.
 */
export default function ECommerceShopEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ECommerceShell locale="en">{children}</ECommerceShell>;
}
