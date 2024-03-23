export const createNewService = async (dataService) => {
  try {
    const data = await fetch(`http://localhost:8080/tourist_service/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataService),
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al crear el servicio", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const deleteService = async (idService) => {
  try {
    const data = await fetch(`http://localhost:8080/tourist_service/delete/${idService}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al eliminar el servicio", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const updateService = async (service, idService) => {
  try {
    const data = await fetch(`http://localhost:8080/tourist_service/edit/${idService}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(service)
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al actualizar el servicio", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const getAllServices = async () => {
  try {
    const data = await fetch(`http://localhost:8080/tourist_service/get/all`);

    if(!data.ok) {
        throw new Error("Ocurrio un error al recuperar los servicios", data.json());
    }

    return data.json();
  } catch (error) {
    console.log(error);
  }
};


export const getAllPackages = async () => {
  try {
    const data = await fetch(`http://localhost:8080/tourist_package/get/all`);

    if(!data.ok) {
        throw new Error("Ocurrio un error al recuperar los paquetes", data.json());
    }

    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const createNewPackage = async (dataPackage) => {
  try {
    const data = await fetch(`http://localhost:8080/tourist_package/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataPackage),
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al crear el paquete", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const getAllClients = async () => {
  try {
    const data = await fetch(`http://localhost:8080/customer/get/all`);

    if(!data.ok) {
        throw new Error("Ocurrio un error al recuperar los clientes", data.json());
    }

    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const createNewClient = async (dataClient) => {
  try {
    const data = await fetch(`http://localhost:8080/customer/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataClient),
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al crear el cliente", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (idClient) => {
  try {
    const data = await fetch(`http://localhost:8080/customer/delete/${idClient}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al eliminar el cliente", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const updateClient = async (dataClient, id) => {
  try {
    const data = await fetch(`http://localhost:8080/customer/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataClient)
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al editar el cliente", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const getAllEmployees = async () => {
  try {
    const data = await fetch(`http://localhost:8080/employee/get/all`);

    if(!data.ok) {
        throw new Error("Ocurrio un error al recuperar los empleados", data.json());
    }

    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const createNewEmployee = async (dataClient) => {
  try {
    const data = await fetch(`http://localhost:8080/employee/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataClient),
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al crear el empleado", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (idClient) => {
  try {
    const data = await fetch(`http://localhost:8080/employee/delete/${idClient}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al eliminar el empleado", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (dataEmployee, id) => {
  try {
    const data = await fetch(`http://localhost:8080/employee/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataEmployee)
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al editar el empleado", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};