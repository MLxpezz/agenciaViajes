import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useContext, useState } from "react";
import { context } from "../context/Context";
import { createNewPackage } from "../javascript/requests";

const NewPackageForm = ({ showform }) => {
  const [listServices, setListServices] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [packageCost, setPackageCost] = useState(0);
  const { services } = useContext(context);

  const onSubmit = async (e) => {
    e.preventDefault();
    const dataPackage = {
      packageName: packageName,
      list_services_included: listServices,
      package_cost: packageCost,
    }
    console.log(dataPackage);
    // await createNewPackage(dataPackage);
  };

  const handleSelect = (inputContent) => {
    let selectedService = {};
    services.forEach((service) => {
      if (service.touristService_code === Number(inputContent)) {
        selectedService = service;
      }
    });
    setListServices([...listServices, selectedService]);
    setPackageCost(packageCost + selectedService.touristService_cost);
  };

  const handleInput = (packName) => {
    setPackageName(packName);
  }

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>Nuevo Paquete</h5>
      <input type="text" value={packageName} placeholder="Nombre del paquete" onChange={(e) => setPackageName(e.target.value)}/>
      <select
        name="vuelo"
        id=""
        onChange={(e) => {
          handleSelect(e.target.value);
        }}
      >
        <option hidden value="vuelos">
          Vuelos
        </option>
        {services
          .filter((service) => {
            return service.touristService_type.toLowerCase() === "vuelo";
          })
          .map((service) => {
            return (
              <option
                key={service.touristService_code}
                value={service.touristService_code}
              >{`${service.touristService_type} con destino a ${service.destination_touristService}, precio: ${service.touristService_cost}`}</option>
            );
          })}
      </select>
      <select
        name="hotel"
        id=""
        onChange={(e) => {
          handleSelect(e.target.value);
        }}
      >
        <option hidden value="Hoteles">
          Hoteles
        </option>
        {services
          .filter((service) => {
            return service.touristService_type.toLowerCase() === "hotel";
          })
          .map((service) => {
            return (
              <option
                value={service.touristService_code}
                key={service.touristService_code}
              >{`${service.touristService_type} con destino a ${service.destination_touristService}, precio: ${service.touristService_cost}`}</option>
            );
          })}
      </select>
      <select
        name="renta de auto"
        id=""
        onChange={(e) => {
          handleSelect(e.target.value);
        }}
      >
        <option value="Renta de autos">Renta de auto</option>
        {services
          .filter((service) => {
            return (
              service.touristService_type.toLowerCase() === "renta de auto"
            );
          })
          .map((service) => {
            return (
              <option
                value={service.touristService_code}
                key={service.touristService_code}
              >{`${service.touristService_type} con destino a ${service.destination_touristService}, precio: ${service.touristService_cost}`}</option>
            );
          })}
      </select>
      <p>{`Costo total de el paquete: $${packageCost}.00`}</p>
      <ul>
        {listServices.map((service, index) => {
          return (
            <li key={index}>
              <p>
                {`${service.touristService_type} con destino a ${service.destination_touristService} y un precio de $${service.touristService_cost}`}
              </p>
            </li>
          );
        })}
      </ul>
      <button type="submit">Aceptar</button>
      <button onClick={() => showform(false)}>Cancelar</button>
    </StyledForm>
  );
};

export default NewPackageForm;
