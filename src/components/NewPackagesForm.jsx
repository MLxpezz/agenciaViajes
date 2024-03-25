import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useContext, useState } from "react";
import { context } from "../context/Context";
import { createNewPackage } from "../javascript/requests";

const NewPackageForm = ({ showform, setCostPackage, cost }) => {
  const [listServices, setListServices] = useState([]);
  const [packageName, setPackageName] = useState("");
  const { services } = useContext(context);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataPackage = {
        name: packageName,
        services_included: listServices,
      };
      const response = await createNewPackage(dataPackage);
      const costResponse = JSON.parse(response);
      console.log(costResponse.packageCost);
      setCostPackage(cost + costResponse.packageCost);
      console.log(cost);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (inputContent) => {
    let selectedService = {};
    services.forEach((service) => {
      if (service.touristServiceCode === Number(inputContent)) {
        selectedService = service;
      }
    });
    setListServices([...listServices, selectedService]);
  };

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>Nuevo Paquete</h5>
      <input
        type="text"
        value={packageName}
        placeholder="Nombre del paquete"
        onChange={(e) => setPackageName(e.target.value)}
      />
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
            return service.type.toLowerCase() === "vuelo";
          })
          .map((service) => {
            return (
              <option
                key={service.touristServiceCode}
                value={service.touristServiceCode}
              >{`${service.type} con destino a ${service.destination}, precio: ${service.cost}`}</option>
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
            return service.type.toLowerCase() === "hotel";
          })
          .map((service) => {
            return (
              <option
                value={service.touristServiceCode}
                key={service.touristServiceCode}
              >{`${service.type} con destino a ${service.destination}, precio: ${service.cost}`}</option>
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
        <option hidden value="Renta de autos">
          Renta de auto
        </option>
        {services
          .filter((service) => {
            return service.type.toLowerCase() === "renta de auto";
          })
          .map((service) => {
            return (
              <option
                value={service.touristServiceCode}
                key={service.touristServiceCode}
              >{`${service.type} con destino a ${service.destination}, precio: ${service.cost}`}</option>
            );
          })}
      </select>
      {listServices.length > 0 && <span>Lista de servicios:</span>}
      <ul>
        {listServices.map((service, index) => {
          return (
            <li key={index}>
              <p>
                {`${service.type} con destino a ${service.destination} y un precio de $${service.cost}`}
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
