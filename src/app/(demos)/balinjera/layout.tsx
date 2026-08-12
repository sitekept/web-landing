import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balinjera | מסעדת באלינג׳רה",
  description:
    "מסעדת באלינג׳רה בתל אביב עם מטבח אתיופי מסורתי, אינג׳רה טרייה ומנות צבעוניות. Traditional Ethiopian cuisine in Tel Aviv.",
};

export default function BalinjeraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
