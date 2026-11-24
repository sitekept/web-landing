import { PricingView, pricingMetadata } from "@/views/pricing";

export const metadata = pricingMetadata("en");

export default function Page() {
  return <PricingView locale="en" />;
}
