import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useState } from "react";
import { createNewService } from "../javascript/requests";

const NewServiceForm = ({ showform }) => {
  const [dataForm, setDataForm] = useState({
    touristServiceName: "",
    touristService_type: "",
    destination_touristService: "",
    touristService_cost: "",
    date_touristService: "",
    brief_description: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewService(dataForm);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (inputContent) => {
    setDataForm((previouse) => ({
      ...previouse,
      [inputContent.target.name]: inputContent.target.value,
    }));
  };

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>Nuevo Servicio</h5>
      <input
        type="text"
        name="touristServiceName"
        placeholder="Nombre del servicio"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="touristService_type"
        placeholder="Tipo de servicio"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="destination_touristService"
        placeholder="Destino"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="number"
        name="touristService_cost"
        placeholder="Costo"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="date"
        name="date_touristService"
        onChange={(e) => handleInput(e)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Descripcion"
        name="brief_description"
        onChange={(e) => handleInput(e)}
      ></textarea>
      <button type="submit">Aceptar</button>
      <button
        onClick={() => {
          showform(false);
        }}
      >
        Cancelar
      </button>
    </StyledForm>
  );
};

export default NewServiceForm;
