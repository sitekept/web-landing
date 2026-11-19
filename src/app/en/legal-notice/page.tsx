import { LegalNoticeView, legalNoticeMetadata } from "@/views/legal-notice";

export const metadata = legalNoticeMetadata("en");

export default function Page() {
  return <LegalNoticeView locale="en" />;
}
