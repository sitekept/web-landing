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
  return getMetierStaticParams("fr");
}

export async function generateMetadata({ params }: MetierPageProps) {
  const { metier } = await params;
  return metierMetadata("fr", metier);
}

export default async function MetierLandingPage({ params }: MetierPageProps) {
  const { metier } = await params;
  return <MetierView locale="fr" slug={metier} />;
}
