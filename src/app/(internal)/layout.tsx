import type { ReactNode } from "react";
import {
  RootDocument,
  buildRootMetadata,
  rootViewport,
} from "@/components/root-document";

/** Layout racine des pages internes (catalogue admin), en français. */
export const metadata = buildRootMetadata("fr");
export const viewport = rootViewport;

export default function InternalLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="fr">{children}</RootDocument>;
}
