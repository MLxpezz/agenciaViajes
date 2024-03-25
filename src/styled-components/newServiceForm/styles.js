import styled from "styled-components";

export const StyledForm = styled.form`
  position: absolute;
  width: 550px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  gap: 10px;
  z-index: 100;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s;
  border: 1px solid var(--secondary_color);
  border-radius: 5px;
  color: var(--secondary_color);
  animation: slide 0.5s forwards;

  @keyframes slide {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  p {
    color: red;
    font-size: 14px;
  }

  h5 {
    font-size: 20px;
    color: var(--primary_color);
  }

  label {
    color: var(--secondary_text_color);
    font-size: 15px;
  }

  input,
  select {
    width: 100%;
    padding: 5px;
    color: var(--primary_color);
    font-weight: 600;
    outline: none;
    border: 1px solid var(--secondary_color);
    border-radius: 5px;

    &::placeholder {
      color: var(--primary_color);
      font-weight: 600;
    }
  }

  textarea {
    width: 100%;
    outline: none;
    border: 1px solid var(--secondary_color);
    border-radius: 5px;
    resize: none;
    margin-top: 10px;
    color: var(--primary_color);

    &::placeholder {
      color: var(--primary_color);
      font-weight: 600;
    }
  }

  button {
    width: 200px;
    padding: 5px;
    border: 1px solid var(--primary_color);
    border-radius: 5px;
    background-color: transparent;
    color: var(--primary_color);
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--primary_color);
      color: #fff;
    }
  }

  ul {
    width: 80%;
    color: var(--primary_color);
    list-style: none;

    li {
      border: 1px solid var(--primary_color);
      border-radius: 5px;
      margin: 5px 0;
      padding: 5px;
    }
  }

  div {
    width: 100%;

    label {
      color: var(--primary_color);
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      margin: 10px 0 0 0;
    }

    span {
      font-size: 15px;
    }
  }
`;

export const StyledDiv = styled.div`
  span {
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;

    &:nth-child(2) {
      float: right;
    }
  }
`;


export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 100px;
  }
`