import type { ReactNode } from "react";

import { CoffeeShopShell } from "@/templates/coffee-shop/shell";

/**
 * Layout du template coffee-shop (français). Le shell vit dans
 * `src/templates/coffee-shop/shell.tsx` et est partagé avec la version anglaise
 * (`(demos-en)/en/coffee-shop`) ; il décide seul d'afficher le sélecteur FR / EN.
 */
export default function CoffeeShopLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <CoffeeShopShell locale="fr">{children}</CoffeeShopShell>;
}
