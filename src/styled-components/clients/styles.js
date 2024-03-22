import styled from "styled-components";

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--primary_color);
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  color: var(--primary_color);

  thead {
    background-color: var(--primary_color);
    color: #fff;
  }

  button {
    background: none;
    border: none;
    color: var(--primary_color);
    margin: 0 10px;
    cursor: pointer;
  }
`;