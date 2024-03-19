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

    return data.json();
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
