import { NextResponse, type NextRequest } from "next/server";
import { isDemoPathname, DEMO_HEADER } from "@/lib/public-template-routes";

/**
 * Traitement des pages de démonstration de templates (/boulangerie, /dentiste,
 * ..., sous-pages comprises).
 *
 * 1. `X-Robots-Tag: noindex, follow` en en-tête de RÉPONSE. Ces pages
 *    représentent l'essentiel du volume d'URLs du site pour un contenu
 *    quasi-dupliqué d'une démo à l'autre : les laisser indexées diluait
 *    l'autorité du domaine. `follow` et non `nofollow`, pour que le lien de
 *    retour du bandeau continue de transmettre sa valeur.
 *
 * 2. Un marqueur en en-tête de REQUÊTE, lu par le layout racine pour afficher
 *    le bandeau de démonstration. Il doit être posé sur la requête — un
 *    en-tête de réponse n'est pas visible depuis `headers()` dans un composant
 *    serveur.
 */
export function middleware(request: NextRequest) {
  const isDemo = isDemoPathname(request.nextUrl.pathname);

  const requestHeaders = new Headers(request.headers);
  // Nettoie une éventuelle valeur envoyée par le client, qui pourrait sinon
  // faire apparaître le bandeau sur une page commerciale.
  requestHeaders.delete(DEMO_HEADER);

  if (isDemo) {
    requestHeaders.set(DEMO_HEADER, "1");
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (isDemo) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
