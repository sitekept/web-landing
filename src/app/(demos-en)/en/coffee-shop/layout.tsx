import type { ReactNode } from "react";

import { CoffeeShopShell } from "@/templates/coffee-shop/shell";

/** Layout du template coffee-shop en anglais (`/en/coffee-shop`). */
export default function CoffeeShopEnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <CoffeeShopShell locale="en">{children}</CoffeeShopShell>;
}
