import { TermsView, termsMetadata } from "@/views/terms";

export const metadata = termsMetadata("fr");

export default function Page() {
  return <TermsView locale="fr" />;
}
