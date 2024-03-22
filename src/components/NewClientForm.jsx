import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useState } from "react";
import { createNewClient, updateClient } from "../javascript/requests";

const NewClientForm = ({ showform, dataClient, action,setClients }) => {
  const [dataForm, setDataForm] = useState({
    name: action === "edit" ? dataClient.name : "",
    surname: action === "edit" ? dataClient.surname : "",
    direction: action === "edit" ? dataClient.direction : "",
    dni: action === "edit" ? dataClient.dni : "",
    birthDate: action === "edit" ? dataClient.birthDate : "",
    nacionality: action === "edit" ? dataClient.nacionality : "",
    customerId: action === "edit" ? dataClient : "",
    cellPhone: action === "edit" ? dataClient.cellPhone : "",
    email: action === "edit" ? dataClient.email : "",
  });

  const handleRequests = {
    add: createNewClient,
    edit: updateClient,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedClients = [];
    try {
      const response = await handleRequests[action](dataForm, dataClient.customerId);
      showform(false);
      updatedClients.push(dataForm);
      setClients(updatedClients);
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

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>{action === "add" ? "Nuevo cliente" : "Editar cliente"}</h5>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={dataForm.name}
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="surname"
        value={dataForm.surname}
        placeholder="Apellido"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="direction"
        value={dataForm.direction}
        placeholder="Direccion"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        name="dni"
        value={dataForm.dni}
        placeholder="DNI"
        onChange={(e) => handleInput(e)}
      />
      <div>
        <label htmlFor="birth_date">Fecha de cumpleaños</label>
        <input
          type="date"
          name="birthDate"
          value={dataForm.birthDate}
          placeholder="Fecha de cumpleaños"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <input
        type="text"
        placeholder="Nacionalidad"
        name="nacionality"
        value={dataForm.nacionality}
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        placeholder="Telefono"
        name="cellPhone"
        value={dataForm.cellPhone}
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        placeholder="Correo electronico"
        name="email"
        value={dataForm.email}
        onChange={(e) => handleInput(e)}
      />
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
