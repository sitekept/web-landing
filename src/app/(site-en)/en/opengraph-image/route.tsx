import { ImageResponse } from "next/og";

/**
 * Image de partage anglaise (Open Graph et Twitter), même dessin que
 * `src/app/opengraph-image/route.tsx`, texte en anglais.
 *
 * Route (`GET /en/opengraph-image`) plutôt que fichier de métadonnées
 * `opengraph-image.tsx` : sous un segment autre que la racine, Next suffixe
 * l'URL d'un hash (`/en/opengraph-image-1cwhjg`), et l'adresse stable que
 * déclarent `openGraphImagePath` (`page-metadata.ts`) et les métadonnées des
 * démos n'existerait pas. Prérendue au build.
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
            fontSize: 72,
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Professional website delivered in 48 hours
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
          No subscription required · 100% yours · from €500
        </div>
      </div>
    ),
    size
  );
}
