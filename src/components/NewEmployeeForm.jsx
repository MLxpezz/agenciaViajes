import { StyledForm } from "../styled-components/newServiceForm/styles";
import { useState } from "react";
import { createNewEmployee, updateEmployee } from "../javascript/requests";

const NewEmployeeForm = ({ showform, dataEmployee, action,setEmployee }) => {
  const [dataForm, setDataForm] = useState({
    name: action === "edit" ? dataEmployee.name : "",
    surname: action === "edit" ? dataEmployee.surname : "",
    direction: action === "edit" ? dataEmployee.direction : "",
    dni: action === "edit" ? dataEmployee.dni : "",
    birthDate: action === "edit" ? dataEmployee.birthDate : "",
    nacionality: action === "edit" ? dataEmployee.nacionality : "",
    employeeId: action === "edit" ? dataEmployee.employeeId : "",
    cellPhone: action === "edit" ? dataEmployee.cellPhone : "",
    email: action === "edit" ? dataEmployee.email : "",
    salary: action === "edit" ? dataEmployee.salary : "",
    role: action === "edit" ? dataEmployee.role : ""
  });

  const handleRequests = {
    add: createNewEmployee,
    edit: updateEmployee,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedEmployees = [];
    try {
      const response = await handleRequests[action](dataForm, dataEmployee.employeeId);
      showform(false);
      updatedEmployees.push(dataForm);
      setEmployee(updatedEmployees);
      console.log(response);
    } catch (error) {
      console.log("Ocurrio un error al intentar crear el empleado", error);
    }
  };

  const handleInput = (inputContent) => {
    setDataForm((previouse) => ({
      ...previouse,
      [inputContent.target.name]: inputContent.target.value,
    }));
  };

  const handleSelect = (selectContent) => {
    setDataForm((previouse) => ({
        ...previouse,
        role: selectContent.value,
      }));
  }

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>{action === "add" ? "Nuevo Empleado" : "Editar Empleado"}</h5>
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
      <select name="rol" value={dataForm.role} onChange={(e) => handleSelect(e.target)}>
        <option hidden value="rol">Rol</option>
        <option value="Administrador">Administrador</option>
        <option value="Empleado">Empleado</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        value={dataForm.salary}
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

export default NewEmployeeForm;
