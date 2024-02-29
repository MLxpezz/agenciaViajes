import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(350px, 350px));
  grid-template-rows: repeat(2, minmax(300px, 300px));
  gap: 20px;
  margin-bottom: 80px;
`;

export const StyledArticle = styled.article`
  width: 100%;
  height: 100%;
  background-color: var(--card_services_back-color);
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    &:nth-child(3) {
      font-size: 15px;
      color: var(--text_services_color);
      letter-spacing: 1px;
      line-height: 27px;
      margin: 0;
    }

    &:nth-child(2) {
      color: var(--primary_color);
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 1px;
      margin: 0 0 12px 0;
      text-transform: uppercase;
      transition: all 0.3s ease 0s;
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