import {
  StyledMain,
  StyledArticle,
  StyledDiv,
  StyledDivThree,
  SearchButton,
  StyledDivTwo,
  StyledSection,
  AddButton,
} from "../styled-components/services/styles";
import { useState, useContext, useEffect } from "react";
import { getAllPackages } from "../javascript/requests";

const Packages = () => {
  const [NewPackageForm, setNewPackageForm] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllPackages();
        setPackages(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const addForm = () => {
    import("./NewPackagesForm")
      .then((module) => {
        setNewPackageForm(() => module.default);
        setShowForm(!showForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledMain>
      {NewPackageForm && showForm && <NewPackageForm showform={setShowForm} />}
      <header>Paquetes</header>
      <StyledDivTwo>
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
            name="date_touristService"
            onChange={(e) => filterDate(e.target.value)}
          />
          <AddButton onClick={addForm}>
            <span className="material-symbols-outlined">add_circle</span>
            Añadir nuevo paquete
          </AddButton>
        </StyledDivThree>
      </StyledDivTwo>
      <StyledSection>
        {packages &&
          packages.map((pack, id) => {
            return (
              <StyledArticle key={id}>
                <StyledDiv>
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </StyledDiv>
                <p>{pack.packageName}</p>
                <p>Servicios incluidos:</p>
                <ul>
                  {pack.list_services_included.map((p) => {
                    return (
                      <li key={p.touristService_code}>
                        {<p>{`${p.touristServiceName}`}</p>}
                      </li>
                    );
                  })}
                </ul>
                <p>{`Precio: ${pack.package_cost}`}</p>
                <button>Comprar</button>
              </StyledArticle>
            );
          })}
      </StyledSection>
    </StyledMain>
  );
};

export default Packages;
