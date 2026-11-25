import {
  BUSINESS,
  PROFILES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

export const BUSINESS_ID = `${SITE_URL}/#negocio`;
export const PERSON_ID = `${SITE_URL}/#roser-sabater`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Solo perfiles con URL real (los TODO vacíos se omiten)
const businessSameAs = [
  PROFILES.instagram,
  PROFILES.doctoralia,
  PROFILES.facebook,
].filter(Boolean);
const personSameAs = [PROFILES.linkedin, PROFILES.instagram].filter(Boolean);

// Servicios que ofrece la clínica (catálogo del negocio)
export const SERVICE_NAMES = [
  "Valoración y tratamiento de suelo pélvico",
  "Fisioterapia en el embarazo",
  "Recuperación posparto",
  "Tratamiento de la diástasis abdominal",
  "Tratamiento de la incontinencia urinaria",
  "Tratamiento de cicatrices",
  "Radiofrecuencia",
  "Masaje para embarazadas",
  "Pilates para embarazadas y posparto",
  "Consulta online",
] as const;

export function baseGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physiotherapist",
        "@id": BUSINESS_ID,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: BUSINESS.telephone,
        image: absoluteUrl("/hero-slider-1.jpg"),
        logo: absoluteUrl("/logo-apilado.svg"),
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Tarjeta de crédito, tarjeta de débito, pago NFC",
        address: {
          "@type": "PostalAddress",
          ...BUSINESS.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        areaServed: BUSINESS.areaServed.map((name) => ({
          "@type": "City",
          name,
        })),
        hasMap: BUSINESS.mapsUrl,
        sameAs: businessSameAs,
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        knowsLanguage: BUSINESS.languages,
        isAccessibleForFree: false,
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Accesible en silla de ruedas",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Sala de lactancia",
            value: true,
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de fisioterapia",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Primera visita de fisioterapia",
              price: "60",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Primera visita de fisioterapia",
                provider: { "@id": BUSINESS_ID },
              },
            },
            ...SERVICE_NAMES.map((name) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name,
                provider: { "@id": BUSINESS_ID },
              },
            })),
          ],
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: BUSINESS.professional,
        jobTitle: BUSINESS.jobTitle,
        worksFor: { "@id": BUSINESS_ID },
        url: absoluteUrl("/sobre-mi"),
        image: absoluteUrl("/about-formacion.jpg"),
        knowsLanguage: BUSINESS.languages,
        ...(personSameAs.length ? { sameAs: personSameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "es",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Inicio", path: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      }),
    ),
  };
}

export default function JsonLd({ data }: { data: JsonLdNode }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
