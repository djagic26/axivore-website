import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Axivore — Precision · Disruption · Direction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0C0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(160,154,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(160,154,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://axivore.io/icon.png"
          width={120}
          height={120}
          alt="Axivore"
          style={{ marginBottom: 40, objectFit: "contain" }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Axivore
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#A09AFF",
            letterSpacing: "4px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Precision · Disruption · Direction
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#4A4866",
            display: "flex",
          }}
        >
          axivore.io
        </div>
      </div>
    ),
    { ...size }
  );
}
