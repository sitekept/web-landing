import type { ReactNode } from "react";
import { buildRootMetadata, rootViewport } from "@/components/root-document";
import { SiteShell } from "@/components/site-shell";

/** Layout racine du site commercial en anglais, servi sous /en. */
export const metadata = buildRootMetadata("en");
export const viewport = rootViewport;

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
