import { RealizationView, realizationMetadata } from "@/views/realization";

export const metadata = realizationMetadata("fr");

export default function Page() {
  return <RealizationView locale="fr" />;
}
