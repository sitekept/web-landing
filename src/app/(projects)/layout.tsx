import type { ReactNode } from "react";
import {
  RootDocument,
  buildRootMetadata,
  rootViewport,
} from "@/components/root-document";

/** Layout racine des projets hébergés sur le domaine (/je), en français. */
export const metadata = buildRootMetadata("fr");
export const viewport = rootViewport;

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="fr">{children}</RootDocument>;
}
