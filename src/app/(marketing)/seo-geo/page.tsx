import { SeoGeoView, seoGeoMetadata } from "@/views/seo-geo";

export const metadata = seoGeoMetadata("fr");

export default function Page() {
  return <SeoGeoView locale="fr" />;
}
