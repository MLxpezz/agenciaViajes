import { useContext } from "react";
import { context } from "../context/Context";
import { deleteSale } from "../javascript/requests";
import { StyledMain } from "../styled-components/services/styles";
import { StyledTable } from "../styled-components/clients/styles";

const Sale = () => {
  const { sales, setSales } = useContext(context);

  const delSale = (idSale) => {
    try {
      deleteSale(idSale);
      const updatedSales = sales.filter((sale) => {
        return sale.saleNumber !== idSale;
      });
      setSales(updatedSales);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledMain>
      <header>Ventas</header>
      {sales && sales.length > 0 ? (
        <StyledTable>
          <thead>
            <tr>
              <th>Fecha de venta</th>
              <th>Metodo de pago</th>
              <th>Servicio Vendido</th>
              <th>Paquete Vendido</th>
              <th>Vendedor</th>
              <th>Comprador</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {sales && sales.map((sale) => {
              return (
                <tr key={sale.saleNumber}>
                  <td>{`${sale.name} ${sale.surname}`}</td>
                  <td>{sale.cellPhone}</td>
                  <td>{sale.email}</td>
                  <td>{sale.nacionality}</td>
                  <td>
                    <button>
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      ) : (
        <h5>{`Aun no existe ninguna venta en la base de datos :(`}</h5>
      )}
    </StyledMain>
  );
};

export default Sale;
