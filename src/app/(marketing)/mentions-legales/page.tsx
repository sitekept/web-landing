import { LegalNoticeView, legalNoticeMetadata } from "@/views/legal-notice";

export const metadata = legalNoticeMetadata("fr");

export default function Page() {
  return <LegalNoticeView locale="fr" />;
}
