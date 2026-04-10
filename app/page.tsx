import AboutMe from "@/components/about-me";
import ContactSection from "@/components/contact-section";
import DoubleSection from "@/components/double-section";
import HeroHome from "@/components/hero-home";
import Postparto from "@/components/postparto";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <AboutMe />
      <Services />
      <Postparto />
      <DoubleSection />
      <ContactSection />
    </div>
  );
}
