import { RealizationView, realizationMetadata } from "@/views/realization";

export const metadata = realizationMetadata("en");

export default function Page() {
  return <RealizationView locale="en" />;
}
