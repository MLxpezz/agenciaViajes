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
  gap: 20px;
  z-index: 100;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s;
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

  h5 {
    font-size: 20px;
    color: var(--primary_color);
  }

  label {
    color: var(--secondary_text_color);
    font-size: 15px;
  }

  input {
    width: 80%;
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
    width: 80%;
    outline: none;
    border: 1px solid var(--secondary_color);
    border-radius: 5px;
    resize: none;
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
`;