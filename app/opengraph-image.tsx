import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagen para compartir en redes (1200×630), generada en el build
export const alt =
  "Roser Sabater Fisioterapia — suelo pélvico, embarazo y posparto en San Pedro Alcántara";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/hero-slider-1.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ position: "relative", display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "56px 64px",
            background:
              "linear-gradient(to bottom, rgba(20,10,13,0.05) 30%, rgba(20,10,13,0.8) 100%)",
            color: "white",
          }}
        >
          <div style={{ fontSize: 76, lineHeight: 1 }}>Roser Sabater</div>
          <div style={{ fontSize: 34, marginTop: 18, opacity: 0.95 }}>
            Fisioterapia de suelo pélvico, embarazo y posparto
          </div>
          <div style={{ fontSize: 26, marginTop: 10, opacity: 0.8 }}>
            San Pedro Alcántara · Marbella
          </div>
        </div>
      </div>
    ),
    size,
  );
}
