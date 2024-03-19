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
import { getAllServices } from "../javascript/requests";

const Services = () => {
  const [NewServiceForm, setNewServiceForm] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const {services, setServices, servicesCopy} = useContext(context);

  useEffect(() => {
    // Establecer el array original al inicio
    setServices(services);
  }, [services]);

  // Función para manejar el clic en los botones de categoría
  const filterCategory = (category) => {
    const filteredServices = servicesCopy.filter(
      (service) => service.touristService_type === category
    );
    setServices(filteredServices);
  };

  const filterDate = (date) => {

    const dateToArr = date.split('-').map(pieceOfDate => {
      return Number(pieceOfDate);
    }).join(',');
    console.log(dateToArr);

    const filteredServices = servicesCopy.filter(
      (service) => {
        service.date_touristService === dateToArr;
      }
    );

    setServices(filteredServices);
  };

  const filterDestination = (destination) => {
    const filteredServices = servicesCopy.filter(
      (service) => service.destination_touristService === destination
    );
    setServices(filteredServices);
  };

  const searchDestination = (destination) => {
    const filteredServices = servicesCopy.filter(service => {
      return service.destination_touristService.toLowerCase().startsWith(destination);
    });
    setServices(filteredServices);
  }

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

  return (
    <StyledMain>
      {NewServiceForm && showForm && <NewServiceForm showform={setShowForm} />}
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
          <input type="text" placeholder="Destino" name="destino" onChange={(e) => searchDestination(e.target.value)}/>
          <SearchButton>
            <span className="material-symbols-outlined">search</span>
          </SearchButton>
          <label htmlFor="date_touristService">Fecha del servicio:</label>
          <input type="date" name="date_touristService" onChange={(e) => filterDate(e.target.value)}/>
          <AddButton onClick={addForm}>
            <span className="material-symbols-outlined">add_circle</span>
            Añadir nuevo servicio
          </AddButton>
        </StyledDivThree>
      </StyledDivTwo>
      <StyledSection>
        {services.map((service, id) => {
          return (
            <StyledArticle key={id}>
              <StyledDiv>
                <span className="material-symbols-outlined">rocket_launch</span>
              </StyledDiv>
              <p>{service.touristService_type}</p>
              <p>{`Destino: ${service.destination_touristService}`}</p>
              <p>{`Precio: ${service.touristService_cost}`}</p>
              <p>{`Fecha: ${service.date_touristService}`}</p>
              <p>{`Descripcion: ${service.brief_description}`}</p>
              <button>Comprar</button>
            </StyledArticle>
          );
        })}
      </StyledSection>
    </StyledMain>
  );
};

export default Services;
