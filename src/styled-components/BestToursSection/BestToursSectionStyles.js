import styled from "styled-components";

export const StyledSection = styled.section`
  height: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(300px, 350px));
  grid-template-rows: repeat(2, minmax(300px, 300px));
  gap: 25px;
`;

export const StyledArticle = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  z-index: 100;

  &::after {
    opacity: 1;
    visibility: visible;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 8;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  &:hover {
    box-shadow: 0px 18px 71px -10px rgba(0, 0, 0, 0.75);
  }

  &:hover::after {
    box-shadow: inset 0px -34px 98px 8px rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 20px;
  padding: 20px;
  z-index: 100;

  p {
    color: #fff;

    &:nth-child(1) {
      font-size: 30px;
      font-weight: 500;
    }

    &:nth-child(2) {
      font-size: 16px;
    }

    &:nth-child(3) {
      font-size: 30px;
      font-weight: bold;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--primary_color);
      border: 2px solid var(--primary_color);
    }
  }
`;

export const StyledHeader = styled.header`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  margin: auto;
  text-align: center;

  h3 {
    font-size: 40px;
    font-weight: 400;
    color: #5a5a5a;
    margin: 30px 0 30px 0;
  }

  p {
    font-size: 20px;
    margin-bottom: 1.5em;
    color: #848484;
  }

  hr {
    width: 100px;
    color: var(--primary_color);
    border: 1px solid var(--primary_color);
    margin-bottom: 40px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 55px auto;
  background-color: transparent;
  border: 2px solid var(--primary_color);
  color: var(--primary_color);
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: var(--primary_color);
  }
`;