import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useState } from "react";
import { createNewClient, updateClient } from "../javascript/requests";

const NewClientForm = ({ showform, dataClient, action }) => {
  const [dataForm, setDataForm] = useState({
    name: action === "edit" ? dataClient.name : "",
    surname: action === "edit" ? dataClient.surname : "",
    direction: action === "edit" ? dataClient.direction : "",
    dni: action === "edit" ? dataClient.dni : "",
    birth_date: action === "edit" ? dataClient.birthDate : "",
    nacionality: action === "edit" ? dataClient.nacionality : "",
    customerId: action === "edit" ? dataClient : "",
    cell_phone: action === "edit" ? dataClient.cellPhone : "",
    email: action === "edit" ? dataClient.email : "",
  });
  const [errorInput, setErrorInput] = useState({
    name: "",
    surname: "",
    direction: "",
    dni: "",
    birthDate: "",
    nacionality: "",
    cellPhone: "",
    email: "",
  });

  const handleRequests = {
    add: createNewClient,
    edit: updateClient,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!isValidInput(e.target)) return;
    try {
      const response = await handleRequests[action](dataForm, dataClient.customerId);
      showform(false);
      console.log(response);
    } catch (error) {
      console.log("Ocurrio un error al intentar crear el cliente", error);
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
      <h5>{action === "add" ? "Nuevo cliente" : "Editar cliente"}</h5>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={dataForm.name}
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.name}</p>
      </div>
      <div>
      <input
        type="text"
        name="surname"
        value={dataForm.surname}
        placeholder="Apellido"
        onChange={(e) => handleInput(e)}
      />
      <p>{errorInput.surname}</p>
      </div>
      <div>
      <input
        type="text"
        name="direction"
        value={dataForm.direction}
        placeholder="Direccion"
        onChange={(e) => handleInput(e)}
      />
      <p>{errorInput.direction}</p>
      </div>
      <div>
      <input
        type="text"
        name="dni"
        value={dataForm.dni}
        placeholder="DNI"
        onChange={(e) => handleInput(e)}
      />
      <p>{errorInput.dni}</p>
      </div>
      <div>
        <label htmlFor="birth_date">Fecha de cumpleaños</label>
        <input
          type="date"
          name="birth_date"
          value={dataForm.birth_date}
          placeholder="Fecha de cumpleaños"
          onChange={(e) => handleInput(e)}
        />
        <p>{errorInput.birthDate}</p>
      </div>
      <div>
      <input
        type="text"
        placeholder="Nacionalidad"
        name="nacionality"
        value={dataForm.nacionality}
        onChange={(e) => handleInput(e)}
      />
      <p>{errorInput.nacionality}</p>
      </div>
      <div>
      <input
        type="text"
        placeholder="Telefono"
        name="cell_phone"
        value={dataForm.cell_phone}
        onChange={(e) => handleInput(e)}
      />
      <p>{errorInput.cellPhone}</p>
      </div>
      <div>
      <input
        type="text"
        placeholder="Correo electronico"
        name="email"
        value={dataForm.email}
        onChange={(e) => handleInput(e)}
      />
      <p>{errorInput.email}</p>
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

export default NewClientForm;
