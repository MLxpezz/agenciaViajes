import { createContext, useState, useEffect } from "react";
import {
  getAllServices,
  getAllClients,
  getAllEmployees,
  getAllSales,
} from "../javascript/requests";

export const context = createContext();

const Context = ({ children }) => {
  const [services, setServices] = useState([]);
  const [servicesCopy, setServicesCopy] = useState([]);

  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async () => {
      const responseServices = await getAllServices();
      const responseClients = await getAllClients();
      const responseEmployees = await getAllEmployees();
      const responseSales = await getAllSales();

      setSales(responseSales);
      setServices(responseServices);
      setServicesCopy(responseServices);

      setClients(responseClients);

      setEmployees(responseEmployees);
    })();
  }, []);

  return (
    <context.Provider
      value={{
        services,
        setServices,
        servicesCopy,
        setServicesCopy,
        clients,
        setClients,
        employees,
        setEmployees,
        sales,
        setSales,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
