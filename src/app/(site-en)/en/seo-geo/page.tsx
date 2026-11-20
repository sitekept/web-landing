import { SeoGeoView, seoGeoMetadata } from "@/views/seo-geo";

export const metadata = seoGeoMetadata("en");

export default function Page() {
  return <SeoGeoView locale="en" />;
}
