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
import { useState } from "react";

const Packages = () => {
  const [NewPackageForm, setNewPackageForm] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
    </StyledMain>
  );
};

export default Packages;
