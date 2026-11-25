import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

// Imagen OG generada por app/opengraph-image.tsx (1200×630)
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Roser Sabater Fisioterapia — suelo pélvico, embarazo y posparto en San Pedro Alcántara",
};

// Metadatos por página: title exacto, description, canonical autorreferenciado
// y Open Graph / Twitter coherentes. La imagen OG la aporta app/opengraph-image.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
