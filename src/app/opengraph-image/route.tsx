import { ImageResponse } from "next/og";

/**
 * Image de partage française (Open Graph et Twitter), `GET /opengraph-image`.
 * Même dessin que `(site-en)/en/opengraph-image/route.tsx`, texte en français.
 *
 * Route et non fichier de métadonnées `opengraph-image.tsx` à la racine de
 * `app/` : ce fichier est lu par Next avant tout layout, donc avant
 * `metadataBase` (posé par `buildRootMetadata` dans chaque layout racine de
 * groupe). Next résolvait alors son URL relative sans base, avec l'avertissement
 * « metadataBase property in metadata export is not set » au build (une fois
 * par processus de génération). L'adresse reste stable, et `openGraphImagePath`
 * (`page-metadata.ts`) la déclare dans les métadonnées de chaque page, rendue
 * absolue par `metadataBase`. Prérendue au build.
 */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#60a5fa",
            fontWeight: 600,
          }}
        >
          Sitekept
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 76,
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Site professionnel livré en 48 h
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            color: "#94a3b8",
            fontWeight: 400,
          }}
        >
          Sans abonnement imposé · 100 % à vous · à partir de 500 €
        </div>
      </div>
    ),
    size
  );
}
