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
import { context } from "../context/Context";
import { deletePackage } from "../javascript/requests";

const Packages = () => {
  const [NewPackageForm, setNewPackageForm] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const[arrCosts, setArrCosts] = useState([]);
  const [NewSaleForm, setNewSaleForm] = useState(null);
  const { services, packages, setPackages, packagesCopy } = useContext(context);
  const [packageToBuy, setPackageToBuy] = useState({});
  const [packageToUpdate, setpackageToUpdate] = useState({});

  useEffect(() => {
    // Establecer el array original al inicio
    setPackages(packages);
  }, [packages]);

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

  const delService = (idPackage) => {
    try {
      deletePackage(idPackage);
    } catch (error) {
      console.log(error);
    }
  };

  const updService = (packageToUpdate) => {
    addForm();
    setpackageToUpdate(packageToUpdate);
  };

  const searchName = (packageName) => {
    const filteredPackages = packagesCopy.filter((pack) => {
      return pack.name.toLowerCase().startsWith(packageName);
    });
    setPackages(filteredPackages);
  };

  return (
    <StyledMain>
      {NewPackageForm && showForm && (
        <NewPackageForm
          showform={setShowForm}
          arrCosts={setArrCosts}
          packageToUpdate={packageToUpdate}
        />
      )}
      {NewSaleForm && showForm && (
        <NewSaleForm
          showform={setShowForm}
          serviceToBuy={packageToBuy}
          cost={0}
        />
      )}
      <header>Paquetes</header>
      {services && services.length > 0 ? (
        <StyledDivTwo>
          <StyledDivThree>
            <label htmlFor="destino">Filtro por nombre:</label>
            <input
              type="text"
              placeholder="Destino"
              name="destino"
              onChange={(e) => searchName(e.target.value)}
            />
            <SearchButton>
              <span className="material-symbols-outlined">search</span>
            </SearchButton>
            <AddButton onClick={addForm}>
              <span className="material-symbols-outlined">add_circle</span>
              Añadir nuevo paquete
            </AddButton>
          </StyledDivThree>
        </StyledDivTwo>
      ) : (
        <h5>
          No hay servicios todavia, no puedes crear paquetes sin servicios.
        </h5>
      )}
      <StyledSection>
        {packages &&
          packages.map((pack, id) => {
            return (
              <StyledArticle key={id}>
                <button
                  onClick={() => {
                    delService(pack.touristPackageCode);
                  }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <button
                  onClick={() => {
                    updService(pack);
                    setAction("edit");
                  }}
                >
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <StyledDiv>
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </StyledDiv>
                <p>{pack.name}</p>
                <p>Servicios incluidos:</p>
                <ul>
                  {pack.servicesIncluded.map((p) => {
                    return (
                      <li key={p.touristServiceCode}>{<p>{`${p.name}`}</p>}</li>
                    );
                  })}
                </ul>
                <p>Precio: ${arrCosts[id]}.00</p>
                <button
                  onClick={() => {
                    addSale();
                    setPackageToBuy(pack);
                  }}
                >
                  Comprar
                </button>
              </StyledArticle>
            );
          })}
      </StyledSection>
    </StyledMain>
  );
};

export default Packages;
