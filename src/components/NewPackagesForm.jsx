import { StyledForm } from "../styled-components/newServiceForm/styles";

const NewPackageForm = ({showform}) => {

  const onSubmit = async (e) => {
    e.preventDefault();
    
  };

  const handleInput = (inputContent) => {

  };

  return (
    <StyledForm action="" onSubmit={onSubmit}>
      <h5>Nuevo Paquete</h5>
      <button type="submit">Aceptar</button>
      <button onClick={() => showform(false)}>Cancelar</button>
    </StyledForm>
  );
};

export default NewPackageForm;
