import {
  StyledForm,
  StyledDiv,
} from "../styled-components/newServiceForm/styles";
import { useContext, useState } from "react";
import { context } from "../context/Context";
import { createNewSale } from "../javascript/requests";

const NewFormSale = ({ showForm, serviceToBuy }) => {
  const [yetClient, setYetClient] = useState(false);
  const [newClient, setNewClient] = useState(false);
  const { employees, clients } = useContext(context);
  const [dataForm, setDataForm] = useState({
    totalAmount: serviceToBuy.cost ? serviceToBuy.cost : 0,
    paymentMethod: "",
    customer: {},
    employee: {},
    tourist_service: serviceToBuy.type ? serviceToBuy : "",
    tourist_package: null,
  });

  const handleInput = (inputContent) => {
    setDataForm((previouse) => ({
      ...previouse,
      [inputContent.target.name]: inputContent.target.value,
    }));
  };

  const handleSelect = (select) => {
    const useListFormName = {
      customer: clients,
      employee: employees,
    };

    const selectedPerson = useListFormName[select.name].find((person) => {
      const id =
        select.name === "customer" ? person.customerId : person.employeeId;
      return id === Number(select.value);
    });

    setDataForm((previous) => ({
      ...previous,
      [select.name]: selectedPerson,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(dataForm);
    try {
      const response = await createNewSale(dataForm);
      console.log(response);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <h5>Datos de compra</h5>
      <input
        type="text"
        name="paymentMethod"
        value={dataForm.paymentMethod}
        placeholder="Metodo de pago"
        onChange={(e) => handleInput(e)}
      />
      <select
        name="employee"
        onChange={(e) => {
          handleSelect(e.target);
        }}
      >
        <option hidden value="employee">
          Empleado que realiza la compra
        </option>
        {employees.map((employee) => {
          return (
            <option
              key={employee.employeeId}
              value={employee.employeeId}
            >{`${employee.name} ${employee.surname}`}</option>
          );
        })}
      </select>
      <div>
        <span>
          Nombre del servicio: <b>{serviceToBuy.name}</b>
        </span>
        <br />
        <span>
          Destino: <b>{serviceToBuy.destination}</b>
        </span>
        <br />
        <span>
          Fecha:{" "}
          <b>{`${serviceToBuy.date[0]}-${serviceToBuy.date[1]}-${serviceToBuy.date[2]}`}</b>
        </span>
      </div>
      <StyledDiv>
        <span
          onClick={() => {
            setYetClient(!yetClient);
            setNewClient(false);
          }}
        >
          Ya eres cliente?
        </span>
        <span
          onClick={() => {
            setNewClient(!newClient);
            setYetClient(false);
          }}
        >
          Nuevo cliente
        </span>
        {yetClient && (
          <select
            name="customer"
            onChange={(e) => {
              handleSelect(e.target);
            }}
          >
            <option value="customer">Clientes</option>
            {clients.map((client) => {
              return (
                <option
                  key={client.customerId}
                  value={client.customerId}
                >{`${client.name} ${client.surname} - ${client.birthDate}`}</option>
              );
            })}
          </select>
        )}
        {newClient && (
          <div>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="text" placeholder="Direccion" />
            <input type="text" placeholder="DNI" />
            <input type="date" placeholder="fecha de cumpleaños" />
            <input type="text" placeholder="Nacionalidad" />
            <input type="text" placeholder="Telefono" />
            <input type="email" placeholder="Email" />
          </div>
        )}
      </StyledDiv>
      <span>
        <b>Total a pagar: ${serviceToBuy.cost}.00</b>
      </span>
      <button>Aceptar</button>
      <button
        onClick={() => {
          showForm(false);
        }}
      >
        Cancelar
      </button>
    </StyledForm>
  );
};

export default NewFormSale;
