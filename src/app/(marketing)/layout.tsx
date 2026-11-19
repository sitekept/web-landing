import type { ReactNode } from "react";
import { buildRootMetadata, rootViewport } from "@/components/root-document";
import { SiteShell } from "@/components/site-shell";

/** Layout racine du site commercial en français, servi sans préfixe. */
export const metadata = buildRootMetadata("fr");
export const viewport = rootViewport;

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
