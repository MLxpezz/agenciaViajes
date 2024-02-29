import { StyledNav, Ul, Li } from "../styled-components/nav/NavStyles";


const Nav = () => {
  return (
    <StyledNav>
      <Ul>
        <Li>Inicio</Li>
        <Li>Hoteles</Li>
        <Li>Vuelos</Li>
        <Li>Rentar vehiculo</Li>
        <Li>Contacto</Li>
      </Ul>
      <Ul>
        <Li>Iniciar sesión</Li>
      </Ul>
    </StyledNav>
  );
};

export default Nav;
