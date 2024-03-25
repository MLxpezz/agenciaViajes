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
    brief_description: action === "edit" ? dataService.briefDescription : "",
  });
  const [errorInput, setErrorInput] = useState({
    name: "",
    type: "",
    destination: "",
    cost: "",
    date: "",
    brief_description: "",
  });

  const handleRequests = {
    add: createNewService,
    edit: updateService,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!isValidInput(e.target)) return;
    try {
      await handleRequests[action](
        dataForm,
        dataService.touristServiceCode
      );
      showform(false);
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

  const isValidInput = (inputs) => {
    let isValid = true;

    for (const input of inputs) {
      if (input.value.trim() === "" && input.tagName !== "BUTTON") {
        const inputName = input.placeholder;
        setErrorInput((previous) => ({
          ...previous,
          [input.name]:
            input.name === "date"
              ? `El campo ${inputName} es obligatorio y debe ser pasada.`
              : `El campo ${inputName} es obligatorio.`,
        }));
        isValid = false;
      } else {
        setErrorInput((previous) => ({
          ...previous,
          [input.name]: ``,
        }));
      }
    }

    return isValid;
  };

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>{action === "edit" ? "Editar Servicio" : "Nuevo Servicio"}</h5>
      <div>
        <input
          type="text"
          name="name"
          value={dataForm.name}
          placeholder="Nombre del servicio"
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.name}</p>
      </div>
      <div>
        <input
          type="text"
          name="type"
          value={dataForm.type}
          placeholder="Tipo de servicio"
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.type}</p>
      </div>
      <div>
        <input
          type="text"
          name="destination"
          value={dataForm.destination}
          placeholder="Destino"
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.destination}</p>
      </div>
      <div>
        <input
          type="number"
          name="cost"
          value={dataForm.cost}
          placeholder="Costo"
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.cost}</p>
      </div>
      <div>
        <input
          type="date"
          value={dataForm.date}
          placeholder="Fecha"
          name="date"
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.date}</p>
      </div>
      <div>
        <textarea
          cols="30"
          rows="10"
          value={dataForm.brief_description}
          placeholder="Descripcion"
          name="brief_description"
          onChange={(e) => handleInput(e)}
        ></textarea>
        <p>{errorInput.brief_description}</p>
      </div>
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
