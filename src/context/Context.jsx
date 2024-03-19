import { createContext, useState, useEffect } from "react";
import { getAllServices } from "../javascript/requests";

export const context = createContext();

const Context = ({children}) => {
    const [services ,setServices] = useState([]);
    const [servicesCopy, setServicesCopy] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAllServices();
            setServices(response);
            setServicesCopy(response);
        })();
    }, []);

    return (
        <context.Provider value={{services, setServices, servicesCopy, setServicesCopy}}>
            {children}
        </context.Provider>
    );
};

export default Context;