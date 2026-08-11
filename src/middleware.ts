import { NextResponse, type NextRequest } from "next/server";
import { isDemoPathname } from "@/lib/public-template-routes";

/**
 * Les pages de démonstration de templates (/boulangerie, /dentiste, ...) et
 * leurs sous-pages sont servies en `noindex, follow`.
 *
 * Elles représentent l'essentiel du volume d'URLs du site pour un contenu
 * quasi-dupliqué d'une démo à l'autre, et se présentent comme de vraies
 * entreprises. Les laisser indexées diluait l'autorité du domaine sur des
 * pages sans valeur commerciale propre.
 *
 * `follow` et non `nofollow` : les liens de ces pages — en particulier le lien
 * de retour vers sitekept.com — continuent de transmettre leur valeur.
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
