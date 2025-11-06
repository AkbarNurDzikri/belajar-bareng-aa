import { ContactUs } from "./components/contact-us";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { GallerySection } from "./components/gallery-section";
import { HeaderSection } from "./components/header-section";
import { HeroSection } from "./components/hero-section";
import { StudyGroupSection } from "./components/study-group-section";

export const HomePage = () => {
  return (
    <div className="">
      <HeaderSection />
      <HeroSection />
      <StudyGroupSection />
      <GallerySection />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
};
