// Datos únicos del negocio — deben coincidir EXACTAMENTE con la ficha de Google.
// Cualquier URL, metadato o dato estructurado del sitio sale de aquí.

export const SITE_URL = "https://www.rosersabaterfisioterapia.com";
export const SITE_NAME = "Roser Sabater Fisioterapia";

export const BUSINESS = {
  name: SITE_NAME,
  professional: "Roser Sabater Moll",
  jobTitle:
    "Fisioterapeuta especializada en suelo pélvico, embarazo y posparto",
  telephone: "+34 650 94 25 60",
  telephoneHref: "tel:+34650942560",
  whatsappUrl: "https://wa.me/34650942560",
  address: {
    streetAddress: "C. de San Javier, 16, 4B",
    postalCode: "29670",
    addressLocality: "San Pedro Alcántara",
    addressRegion: "Málaga",
    addressCountry: "ES",
  },
  geo: { latitude: 36.4868982, longitude: -4.9949471 },
  mapsUrl: "https://maps.google.com/?cid=1499650818900617584",
  areaServed: [
    "San Pedro Alcántara",
    "Marbella",
    "Nueva Andalucía",
    "Estepona",
    "Benahavís",
  ],
  languages: ["es", "en"],
} as const;

export const PROFILES = {
  instagram: "https://www.instagram.com/rosersabaterfisioterapia/",
  doctoralia: "https://www.doctoralia.es/perfil/roser-sabater-moll-2",
  // TODO: URL de la página de Facebook "Roser Sabater fisioterapia"
  facebook: "",
  // TODO: URL del perfil de LinkedIn de Roser Sabater
  linkedin: "",
} as const;

// TODO: sustituir por el Place ID de la ficha de Google. Mientras esté vacío,
// el enlace "Déjanos tu reseña en Google" no se muestra.
export const GOOGLE_PLACE_ID = "";
export const GOOGLE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : null;

// Solo se indexa producción. En previews de Vercel (VERCEL_ENV=preview) se
// fuerza noindex; en local (sin VERCEL_ENV) se comporta como producción.
export const IS_INDEXABLE =
  !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

// Fecha de la última modificación real del contenido de cada página.
// Actualízala cuando cambie el contenido de la página.
export const PAGES = [
  { path: "/", lastModified: "2026-11-25", priority: 1 },
  { path: "/servicios", lastModified: "2026-11-25", priority: 0.9 },
  { path: "/sobre-mi", lastModified: "2026-11-25", priority: 0.8 },
  { path: "/contacto", lastModified: "2026-11-25", priority: 0.7 },
] as const;

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "" : path}`;
