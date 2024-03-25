import { StyledMain } from "../styled-components/services/styles";
import { AddButton, StyledTable } from "../styled-components/clients/styles";
import { useState, useContext } from "react";
import { context } from "../context/Context";
import { deleteEmployee } from "../javascript/requests";

const Employees = () => {
  const [showForm, setShowForm] = useState(false);
  const [NewEmployeeForm, setNewEmployeeForm] = useState(null);
  const [employeeToUpdate, setEmployeeToUpdate] = useState({});
  const [action, setAction] = useState("");

  const { employees, setEmployees } = useContext(context);

  const addForm = () => {
    import("./NewEmployeeForm")
      .then((module) => {
        setNewEmployeeForm(() => module.default);
        setShowForm(!showForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delClient = (idEmployee) => {
    try {
      deleteEmployee(idEmployee);
      const updateEmployees = employees.filter((employee) => {
        return employee.employeeId !== idEmployee;
      });
      setEmployees(updateEmployees);
    } catch (error) {
      console.log(error);
    }
  };

  const updClient = (data) => {
    addForm();
    setEmployeeToUpdate(data);
  };

  const transformDate = (client) => {
    const UpdatedDate = client.birthDate.map((pieceOfDate) => {
      if (pieceOfDate < 10 && !pieceOfDate.toString().startsWith(0)) {
        pieceOfDate = `0${pieceOfDate}`;
      }
      return pieceOfDate.toString();
    });

    const clientUpdatedDate = { ...client, birthDate: UpdatedDate.join("-") };

    return clientUpdatedDate;
  };

  return (
    <StyledMain>
      {NewEmployeeForm && showForm && (
        <NewEmployeeForm
          showform={setShowForm}
          dataEmployee={employeeToUpdate}
          action={action}
          setEmployee={setEmployees}
        />
      )}
      <header>Empleados</header>
      <AddButton
        onClick={() => {
          addForm();
          setAction("add");
        }}
      >
        <span className="material-symbols-outlined">add_circle</span>
        Añadir nuevo Empleado
      </AddButton>
      {employees && employees.length > 0 ? (
        <StyledTable>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Fecha de cumpleaños</th>
              <th>Rol</th>
              <th>Salario</th>
              <th>acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.employeeId}>
                  <td>{`${employee.name} ${employee.surname}`}</td>
                  <td>{employee.cellPhone}</td>
                  <td>{employee.email}</td>
                  {employee.birthDate && (
                    <td>{`${employee.birthDate[0]}-${employee.birthDate[1]}-${employee.birthDate[2]}`}</td>
                  )}
                  <td>{employee.role}</td>
                  <td>{`$${employee.salary}.00`}</td>
                  <td>
                    <button onClick={(e) => delClient(employee.employeeId)}>
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                    <button
                      onClick={(e) => {
                        updClient(transformDate(employee));
                        setAction("edit");
                      }}
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      ) : (
        <h5>{`Aun no existe ningun Empleado en la base de datos :(`}</h5>
      )}
    </StyledMain>
  );
};

export default Employees;
