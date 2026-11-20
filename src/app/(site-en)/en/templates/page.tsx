import { TemplatesView, templatesMetadata } from "@/views/templates";

export const metadata = templatesMetadata("en");

export default function Page() {
  return <TemplatesView locale="en" />;
}
