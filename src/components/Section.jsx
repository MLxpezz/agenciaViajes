import { StyledSection, Text } from "../styled-components/section/SectionStyles";
import ServicesForm from "./ServicesForm";


const Section = () => {
  return (
    <StyledSection>
      <ServicesForm />
      <Text>
        <p>Bienvenido a xxxxxxxxxx</p>
        <p>Viajemos por el mundo juntos</p>
        <p>Con más de 1200 destinos para conocer</p>
      </Text>
    </StyledSection>
  );
};

export default Section;
