import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Employees from "./components/Employees";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Clients from "./components/Clients";

function App() {
  return (
    <Context>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/servicios" element={<Services />}/>
          <Route path="/paquetes" element={<Packages />}/>
          <Route path="/clientes" element={<Clients />}/>
          <Route path="/empleados" element={<Employees />}/>
        </Route>
      </Routes>
    </Context>
  );
}

export default App;
