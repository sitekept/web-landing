import { HomeView, homeMetadata } from "@/views/home";

export const metadata = homeMetadata("fr");

export default function HomePage() {
  return <HomeView locale="fr" />;
}
