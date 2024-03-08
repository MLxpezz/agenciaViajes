import Nav from "./components/Nav";
import Section from "./components/Section";
import BestToursSection from "./components/BestToursSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServicesSection  from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import ClientsViewSection from "./components/ClientsViewSection";
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
      <ClientsViewSection />
      <Footer />
    </>
  );
}

export default App;
