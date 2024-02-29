import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;

  &::before {
    content: "";
    background-image: url("img/home-01.jpg");
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 88%;
    z-index: -1;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fff;
  max-width: 500px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  list-style: none;
  color: var(--primary_color);

  li {
    padding: 10px 15px;

    &:nth-child(1) {
      background-color: var(--primary_color);
      color: #fff;
    }
    &:hover {
      background-color: var(--primary_color);
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: var(--primary_color);;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  padding: 1em 2em;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  background-color: rgba(0, 0, 0, 0.05);
  font-weight: bold;
  font-size: 14px;
  padding: 10px 10px;
  outline: none;
  border: none;
  color: var(--primary_color);

  &::placeholder {
    color: var(--primary_color);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  font-weight: bold;
  font-size: 14px;
  padding: 5px 10px;
  border: none;
  outline: none;
  color: var(--primary_color);
`;

export const StyledOption = styled.option`
    padding: 10px;
    width: 100%;
    margin: 10px;
`;

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  label {
    text-align: start;
    align-self: flex-start;
  }
`;

export const Text = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  color: #fff;
  font-size: 16px;

  p {
    &:nth-child(2) {
      font-size: 60px;
      margin-bottom: 10px;
      font-weight: 400;
    }

    &:nth-child(3) {
      font-size: 24px;
      margin-bottom: 10px;
      font-weight: 400;
    }
  }
`;