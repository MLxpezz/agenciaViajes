import { StyledForm, StyledUl, StyledDiv, StyledInput, InputContainer, StyledButton, StyledSelect, StyledOption } from "../styled-components/section/SectionStyles";

const ServicesForm = () => {
    return (
        <StyledForm>
        <StyledUl>
          <li>Vuelos</li>
          <li>Hoteles</li>
          <li>Paquetes</li>
        </StyledUl>
        <StyledDiv>
          <InputContainer>
            <label htmlFor="from">Desde:</label>
            <StyledInput type="text" placeholder="Mexico city" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="to">Hacia:</label>
            <StyledInput type="text" placeholder="Tokyo, Japan" />
          </InputContainer>
        </StyledDiv>
        <StyledDiv>
          <InputContainer>
            <label htmlFor="from">Fecha de salida:</label>
            <StyledInput type="date" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="from">Fecha de regreso:</label>
            <StyledInput type="date" />
          </InputContainer>
        </StyledDiv>
        <StyledDiv>
          <InputContainer>
            <label htmlFor="from">Clase:</label>
            <StyledSelect>
              <StyledOption value="economic">Economica</StyledOption>
              <StyledOption value="first class">Primera clase</StyledOption>
              <StyledOption value="business">Negocios</StyledOption>
            </StyledSelect>
          </InputContainer>
        </StyledDiv>
        <StyledDiv>
          <InputContainer>
            <label htmlFor="from">Adultos:</label>
            <StyledInput type="number" placeholder="1" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="from">Niños:</label>
            <StyledInput type="number" placeholder="1" />
          </InputContainer>
        </StyledDiv>
        <StyledButton>Buscar vuelos</StyledButton>
      </StyledForm>
    );

};

export default ServicesForm;