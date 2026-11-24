import { PrivacyView, privacyMetadata } from "@/views/privacy";

export const metadata = privacyMetadata("fr");

export default function Page() {
  return <PrivacyView locale="fr" />;
}
