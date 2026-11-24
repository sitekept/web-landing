import { TemplatesView, templatesMetadata } from "@/views/templates";

export const metadata = templatesMetadata("fr");

export default function Page() {
  return <TemplatesView locale="fr" />;
}
