import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  padding: 25px;
  position: relative;

  header {
    font-size: 40px;
    color: var(--primary_text_color);
    margin-bottom: 25px;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin: 40px 0;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const StyledArticle = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: var(--background_testimonial);

  button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid var(--primary_color);
    border-radius: 4px;
    padding: 10px 20px;
    color: var(--primary_color);
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #fff;
      background-color: var(--primary_color);
    }
  }

  p {
    width: 80%;
    text-align: center;

    &:nth-child(2) {
      color: var(--primary_color);
      font-size: 18px;
      font-weight: 600;
    }

    &:nth-child(4) {
      color: var(--text_services_color);
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary_color);
  font-size: 40px;
  color: var(--primary_color);
  width: 80px;
  height: 80px;
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`;

export const StyledDivTwo = styled.div`
  width: 100%;

  ul {
    margin: 10px 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    li {
      background-color: var(--primary_color);
      border-radius: 5px;
      padding: 0 10px;
    }

    button {
      background: none;
      border: none;
      color: #fff;
      padding: 0 10px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

export const StyledDivThree = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  button {
    background-color: transparent;
    border: none;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 5px;
  }
`;

export const SearchButton = styled.button`
    position: absolute;
    right: 5px;
    top: 31px;
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary_color);
    cursor: pointer;
`;