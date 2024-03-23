import { createContext, useState, useEffect } from "react";
import { getAllServices, getAllClients, getAllEmployees } from "../javascript/requests";

export const context = createContext();

const Context = ({ children }) => {
  const [services, setServices] = useState([]);
  const [servicesCopy, setServicesCopy] = useState([]);

  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      const responseServices = await getAllServices();
      const responseClients = await getAllClients();
      const responseEmployees = await getAllEmployees();
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
        setEmployees
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
