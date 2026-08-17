import type { Metadata } from "next";
import { Open_Sans, Bricolage_Grotesque } from "next/font/google";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
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
  title: "Roser Sabater - Fisioterapeuta especialista en suelo pélvico",
  description:
    "Recupera tu fuerza, movilidad y confianza con Roser Sabater, fisioterapeuta especializada en suelo pélvico. Tratamientos personalizados para mujeres en todas las etapas de la vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${bricolageGrotesque.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
