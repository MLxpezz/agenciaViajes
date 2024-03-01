import styled from "styled-components";

export const StyledUl = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, minmax(200px, 1fr));

  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    grid-column: span 2;
    background-image: none;
    background-color: var(--primary_color);
    font-size: 40px;
    color: #fff;

    button {
        border: 1px solid #fff;
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        background-color: transparent;
        padding: 5px 7px;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
    }
  }
`;

export const StyledLi = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("img/place-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    box-shadow: inset 0px -5px 98px -5px rgba(0, 0, 0, 0.75);
    font-weight: bold;
    letter-spacing: 2px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 8;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: all 1s;
  }

  &::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    border: 1px solid #fff;
    z-index: 12;
    opacity: 0;
    transition: all 0.3s;
  }

  p {
    z-index: 12;
    position: relative;
  }

  button {
    z-index: 12;
  }

`;