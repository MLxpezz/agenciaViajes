import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useState } from "react";
import { createNewService, updateService } from "../javascript/requests";

const NewServiceForm = ({ showform, dataService, action }) => {
  const [dataForm, setDataForm] = useState({
    name: action === "edit" ? dataService.name : "",
    type: action === "edit" ? dataService.type : "",
    destination: action === "edit" ? dataService.destination : "",
    cost: action === "edit" ? dataService.cost : "",
    date: action === "edit" ? dataService.date : "",
    briefDescription: action === "edit" ? dataService.briefDescription : "",
  });

  const handleRequests = {
    add: createNewService,
    edit: updateService,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleRequests[action](
        dataForm,
        dataService.touristServiceCode
      );
      showform(false);
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
      <h5>{action === "edit" ? "Editar Servicio" : "Nuevo Servicio"}</h5>
      <input
        type="text"
        name="name"
        value={dataForm.name}
        placeholder="Nombre del servicio"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="type"
        value={dataForm.type}
        placeholder="Tipo de servicio"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="destination"
        value={dataForm.destination}
        placeholder="Destino"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="number"
        name="cost"
        value={dataForm.cost}
        placeholder="Costo"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="date"
        value={dataForm.date}
        name="date"
        onChange={(e) => handleInput(e)}
      />
      <textarea
        cols="30"
        rows="10"
        value={dataForm.briefDescription}
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
