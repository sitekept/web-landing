import {
  MetierView,
  getMetierStaticParams,
  metierMetadata,
} from "@/views/metier";

interface MetierPageProps {
  params: Promise<{ metier: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getMetierStaticParams("en");
}

export async function generateMetadata({ params }: MetierPageProps) {
  const { metier } = await params;
  return metierMetadata("en", metier);
}

export default async function MetierLandingPage({ params }: MetierPageProps) {
  const { metier } = await params;
  return <MetierView locale="en" slug={metier} />;
}
