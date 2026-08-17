import AboutMe from "@/components/about-me";
import ContactSection from "@/components/contact-section";
import DoubleSection from "@/components/double-section";
import HeroHome from "@/components/hero-home";
import Postparto from "@/components/postparto";
import PostpartoMobile from "@/components/postparto-mobile";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <AboutMe />
      <Services />
      <div className="hidden md:block">
        <Postparto />
      </div>
      <div className="md:hidden">
        <PostpartoMobile />
      </div>
      <DoubleSection />
      <ContactSection />
    </div>
  );
}
