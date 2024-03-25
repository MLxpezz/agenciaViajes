const url = "https://tourismagency-production.up.railway.app"

export const createNewService = async (dataService) => {
  try {
    const data = await fetch(`${url}/create`, {
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
    const data = await fetch(`${url}/tourist_service/delete/${idService}`, {
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
    const data = await fetch(`${url}/tourist_service/edit/${idService}`, {
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
    const data = await fetch(`${url}/tourist_service/get/all`);

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
    const data = await fetch(`${url}/tourist_package/get/all`);

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
    const data = await fetch(`${url}/tourist_package/create`, {
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

export const deletePackage = async (idPackage) => {
  try {
    const data = await fetch(`${url}/tourist_package/delete/${idPackage}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al eliminar el paquete", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const getAllClients = async () => {
  try {
    const data = await fetch(`${url}/customer/get/all`);

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
    const data = await fetch(`${url}/customer/create`, {
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
    const data = await fetch(`${url}/customer/delete/${idClient}`, {
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
    const data = await fetch(`${url}/customer/edit/${id}`, {
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
    const data = await fetch(`${url}/employee/get/all`);

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
    const data = await fetch(`${url}/employee/create`, {
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
    const data = await fetch(`${url}/employee/delete/${idClient}`, {
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
    const data = await fetch(`${url}/employee/edit/${id}`, {
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

export const getAllSales = async () => {
  try {
    const data = await fetch(`${url}/sale/get/all`);

    if(!data.ok) {
        throw new Error("Ocurrio un error al recuperar las ventas", data.json());
    }

    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const createNewSale = async (dataSale) => {
  try {
    const data = await fetch(`${url}/sale/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataSale),
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al crear la venta", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};

export const deleteSale = async (idSale) => {
  try {
    const data = await fetch(`${url}/sale/delete/${idSale}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error("Ocurrio un error al eliminar la venta", data.json());
    }

    return data.text();
  } catch (error) {
    console.log(error);
  }
};