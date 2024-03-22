import { useState, useEffect } from "react";
import { getAllClients, deleteClient } from "../javascript/requests";
import { StyledMain } from "../styled-components/services/styles";
import { AddButton, StyledTable } from "../styled-components/clients/styles";

const Clients = () => {
  const [showForm, setShowForm] = useState(false);
  const [NewClientForm, setNewClientForm] = useState(null);
  const [clients, setClients] = useState([]);
  const [clientToUpdate, setClientToUpdate] = useState({});
  const [action, setAction] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllClients();
        setClients(response);
        console.log(response);
      } catch (error) {
        console.log("No se pudo recuperar los clientes", error);
      }
    })();
  }, []);

  const addForm = () => {
    import("./NewClientForm")
      .then((module) => {
        setNewClientForm(() => module.default);
        setShowForm(!showForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delClient = (idClient) => {
    try {
      deleteClient(idClient);
      const updateClients = clients.filter((client) => {
        return client.customerId !== idClient;
      });
      setClients(updateClients);
    } catch (error) {
      console.log(error);
    }
  };

  const updClient = (data) => {
    addForm();
    setClientToUpdate(data);
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
      {NewClientForm && showForm && (
        <NewClientForm
          showform={setShowForm}
          dataClient={clientToUpdate}
          action={action}
          setClients={setClients}
        />
      )}
      <header>Clientes</header>
      <AddButton
        onClick={() => {
          addForm();
          setAction("add");
        }}
      >
        <span className="material-symbols-outlined">add_circle</span>
        Añadir nuevo cliente
      </AddButton>
      {(clients && clients.length > 0) ? (
        <StyledTable>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return (
                <tr key={client.customerId}>
                  <td>{`${client.name} ${client.surname}`}</td>
                  <td>{client.cellPhone}</td>
                  <td>{client.email}</td>
                  <td>
                    <button onClick={(e) => delClient(client.customerId)}>
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                    <button
                      onClick={(e) => {
                        updClient(transformDate(client));
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
        <h5>{`Aun no existe ningun cliente en la base de datos :(`}</h5>
      )}
    </StyledMain>
  );
};

export default Clients;
