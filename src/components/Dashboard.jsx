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
`;

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
            <li>
              <Link to={"/"} style={{ color: "#fff", textDecoration: "none" }}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to={"/servicios"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to={"/paquetes"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Paquetes
              </Link>
            </li>
          </StyledUl>
        </StyledSection>
        <StyledSection>
          <header>Administracion</header>
          <StyledUl>
            <li>
              <Link
                to={"/clientes"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                to={"/empleados"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Empleados
              </Link>
            </li>
            <li>
              <Link
                to={"/ventas"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Ventas
              </Link>
            </li>
          </StyledUl>
        </StyledSection>
      </StyledAside>
      <Outlet />
    </StyledContainer>
  );
};

export default Dashboard;
