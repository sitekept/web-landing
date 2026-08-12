import { NextResponse, type NextRequest } from "next/server";
import { isDemoPathname } from "@/lib/public-template-routes";

/**
 * Pose `X-Robots-Tag: noindex, follow` sur les pages de démonstration de
 * templates (/boulangerie, /dentiste, ..., sous-pages comprises).
 *
 * Ces pages représentent l'essentiel du volume d'URLs du site pour un contenu
 * quasi-dupliqué d'une démo à l'autre : les laisser indexées diluait
 * l'autorité du domaine. `follow` et non `nofollow`, pour que le lien de
 * retour du bandeau continue de transmettre sa valeur.
 *
 * Le bandeau de démonstration, lui, est rendu par src/app/(demos)/layout.tsx
 * et ne dépend plus d'aucun en-tête : le faire transiter par le middleware
 * imposait un appel à `headers()` dans le layout racine, qui basculait toutes
 * les routes du site en rendu dynamique.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (isDemoPathname(request.nextUrl.pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
