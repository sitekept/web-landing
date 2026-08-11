import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sitekept — site professionnel livré en 48 h, sans abonnement";

export default function OpengraphImage() {
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
