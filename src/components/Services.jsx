import { useState, useEffect, useContext } from "react";
import { context } from "../context/Context";
import {
  StyledMain,
  StyledArticle,
  StyledDiv,
  StyledDivTwo,
  StyledDivThree,
  StyledSection,
  SearchButton,
  AddButton,
} from "../styled-components/services/styles";
import { deleteService } from "../javascript/requests";

const Services = () => {
  const [NewServiceForm, setNewServiceForm] = useState(null);
  const [NewSaleForm, setNewSaleForm] = useState(null);
  const [serviceToUpdate, setServiceToUpdate] = useState({});
  const [action, setAction] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { services, setServices, servicesCopy } = useContext(context);
  const [serviceToBuy, setServiceToBuy] = useState({});

  useEffect(() => {
    // Establecer el array original al inicio
    setServices(services);
  }, [services]);

  // Función para manejar el clic en los botones de categoría
  const filterCategory = (category) => {
    const filteredServices = servicesCopy.filter(
      (service) => service.type === category
    );
    setServices(filteredServices);
  };

  const filterDate = (date) => {
    const filteredServices = servicesCopy
      .map((service) => {
        const dateToString = service.date[1].toString();
        if (service.date[1] < 10 && !dateToString.startsWith(0)) {
          service.date[1] = `0${service.date[1]}`;
        }

        return {
          ...service,
          date: service.date.join("-"),
        };
      })
      .filter((service) => {
        return service.date === date;
      });
    setServices(filteredServices);
  };

  const transformDate = (service) => {
    const UpdatedDate = service.date.map((pieceOfDate) => {
      if (pieceOfDate < 10 && !pieceOfDate.toString().startsWith(0)) {
        pieceOfDate = `0${pieceOfDate}`;
      }
      return pieceOfDate.toString();
    });

    const serviceUpdatedDate = { ...service, date: UpdatedDate.join("-") };

    return serviceUpdatedDate;
  };

  const filterDestination = (destination) => {
    const filteredServices = servicesCopy.filter(
      (service) => service.destination === destination
    );
    setServices(filteredServices);
  };

  const searchDestination = (destination) => {
    const filteredServices = servicesCopy.filter((service) => {
      return service.destination.toLowerCase().startsWith(destination);
    });
    setServices(filteredServices);
  };

  const addForm = () => {
    import("./NewServiceForm")
      .then((module) => {
        setNewServiceForm(() => module.default);
        setShowForm(!showForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addSale = () => {
    import("./NewFormSale")
      .then((module) => {
        setNewSaleForm(() => module.default);
        setShowForm(!showForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delService = async (idService) => {
    try {
      const response = await deleteService(idService);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updService = (service) => {
    addForm();
    setServiceToUpdate(service);
  };

  return (
    <StyledMain>
      {NewSaleForm && showForm && <NewSaleForm showform={setShowForm} serviceToBuy={serviceToBuy}/>}
      {NewServiceForm && showForm && <NewServiceForm showform={setShowForm} dataService={serviceToUpdate} action={action}/>}
      <header>Servicios</header>
      <StyledDivTwo>
        <p>Filtrar por categoria:</p>
        <ul>
          <li>
            <button onClick={(e) => filterCategory(e.target.textContent)}>
              Vuelo
            </button>
          </li>
          <li>
            <button onClick={(e) => filterCategory(e.target.textContent)}>
              Hotel
            </button>
          </li>
          <li>
            <button onClick={(e) => filterCategory(e.target.textContent)}>
              Renta de auto
            </button>
          </li>
        </ul>
        <p>Filtrar por Destino:</p>
        <ul>
          <li>
            <button onClick={(e) => filterDestination(e.target.textContent)}>
              España
            </button>
          </li>
          <li>
            <button onClick={(e) => filterDestination(e.target.textContent)}>
              Nueva York
            </button>
          </li>
          <li>
            <button onClick={(e) => filterDestination(e.target.textContent)}>
              Rio de Janeiro
            </button>
          </li>
          <li>
            <button onClick={(e) => filterDestination(e.target.textContent)}>
              Paris
            </button>
          </li>
          <li>
            <button onClick={(e) => filterDestination(e.target.textContent)}>
              Japon
            </button>
          </li>
        </ul>
        <StyledDivThree>
          <label htmlFor="destino">Otro destino:</label>
          <input
            type="text"
            placeholder="Destino"
            name="destino"
            onChange={(e) => searchDestination(e.target.value)}
          />
          <SearchButton>
            <span className="material-symbols-outlined">search</span>
          </SearchButton>
          <label htmlFor="date_touristService">Fecha del servicio:</label>
          <input
            type="date"
            name="date"
            onChange={(e) => filterDate(e.target.value)}
          />
          <AddButton onClick={() => {
            addForm();
            setAction("add");
          }}>
            <span className="material-symbols-outlined">add_circle</span>
            Añadir nuevo servicio
          </AddButton>
        </StyledDivThree>
      </StyledDivTwo>
      <StyledSection>
        {services &&
          services.map((service, id) => {
            return (
              <StyledArticle key={id}>
                <button
                  onClick={() => {
                    delService(service.touristServiceCode);
                  }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <button onClick={() => {
                  updService(transformDate(service));
                  setAction("edit");
                }}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <StyledDiv>
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </StyledDiv>
                <p>{service.type}</p>
                <p>{`Destino: ${service.destination}`}</p>
                <p>{`Precio: ${service.cost}`}</p>
                <p>{`Fecha: ${service.date}`}</p>
                <p>{`Descripcion: ${service.briefDescription}`}</p>
                <button onClick={() => {
                  addSale();
                  setServiceToBuy(service);
                }}>Comprar</button>
              </StyledArticle>
            );
          })}
      </StyledSection>
    </StyledMain>
  );
};

export default Services;
