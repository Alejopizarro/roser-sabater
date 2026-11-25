import type { Metadata } from "next";
import { Open_Sans, Bricolage_Grotesque } from "next/font/google";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { IS_INDEXABLE, SITE_NAME, SITE_URL } from "@/lib/site";
import JsonLd, { baseGraph } from "@/components/seo/json-ld";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fisioterapia de suelo pélvico en San Pedro Alcántara",
    template: "%s | Roser Sabater",
  },
  description:
    "Fisioterapeuta de suelo pélvico, embarazo y posparto en San Pedro Alcántara (Marbella). Valoración personalizada y trato cercano. Pide tu cita hoy.",
  applicationName: SITE_NAME,
  authors: [{ name: "Roser Sabater Moll" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: IS_INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${openSans.variable} ${bricolageGrotesque.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={baseGraph()} />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
