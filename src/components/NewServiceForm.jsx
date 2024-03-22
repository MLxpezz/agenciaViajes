import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useState } from "react";
import { createNewService } from "../javascript/requests";

const NewServiceForm = ({ showform }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    type: "",
    destination: "",
    cost: "",
    date: "",
    briefDescription: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createNewService(dataForm);
      console.log(response);
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
        name="name"
        placeholder="Nombre del servicio"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="type"
        placeholder="Tipo de servicio"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="destination"
        placeholder="Destino"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="number"
        name="cost"
        placeholder="Costo"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="date"
        name="date"
        onChange={(e) => handleInput(e)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Descripcion"
        name="briefDescription"
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
