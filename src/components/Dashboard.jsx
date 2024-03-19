import {
  StyledAside,
  StyledSection,
  StyledUl,
} from "../styled-components/Dashboard/styles";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
`

const Dashboard = () => {
  return (
    <StyledContainer>
      <StyledAside>
        <StyledSection>
          <h5>Administrador</h5>
        </StyledSection>
        <StyledSection>
          <header>General</header>
          <StyledUl>
            <li>Inicio</li>
            <li>
              <Link
                to={"/servicios"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Servicios
              </Link>
            </li>
            <li><Link
                to={"/paquetes"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Paquetes
              </Link></li>
          </StyledUl>
        </StyledSection>
        <StyledSection>
          <header>Administracion</header>
          <StyledUl>
            <li>Clientes</li>
            <li>Empleados</li>
            <li>Ventas</li>
          </StyledUl>
        </StyledSection>
        <StyledSection>
          <header>Cuenta</header>
          <StyledUl>
            <li>Ver mi cuenta</li>
            <li>Cerrar sesión</li>
          </StyledUl>
        </StyledSection>
      </StyledAside>
      <Outlet />
    </StyledContainer>
  );
};

export default Dashboard;
