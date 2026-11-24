import { PricingView, pricingMetadata } from "@/views/pricing";

export const metadata = pricingMetadata("fr");

export default function Page() {
  return <PricingView locale="fr" />;
}
