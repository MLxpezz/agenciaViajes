import Nav from "./components/Nav";
import Section from "./components/Section";
import BestToursSection from "./components/BestToursSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServicesSection  from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styled-components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Section />
      <BestToursSection />
      <WhyChooseSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
    </>
  );
}

export default App;
