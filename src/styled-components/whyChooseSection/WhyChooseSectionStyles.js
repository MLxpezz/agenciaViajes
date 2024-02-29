import styled from "styled-components";

export const StyledSectionContainer = styled.section`
  position: relative;
  background-image: url("/public/img/travlec.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0 50px;
  z-index: 50;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const StyledHeader = styled.header`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  color: #fff;
  margin: auto;
  text-align: center;
  z-index: 100;

  h3 {
    font-size: 40px;
    font-weight: 400;
    margin: 0px 0 30px 0;
  }

  p {
    font-size: 20px;
    margin-bottom: 2em;
    line-height: 1.6;
  }

  hr {
    width: 100px;
    color: var(--primary_color);
    border: 1px solid var(--primary_color);
    margin-bottom: 40px;
  }
`;

export const StyledSection = styled.section`
  z-index: 100;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(300px, 350px));
  grid-template-rows: repeat(2, minmax(150px, 150px));
  gap: 20px;
  margin-bottom: 65px;
`;

export const StyledArticle = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;

  p {
    margin: auto;

    &:nth-child(1) {
      position: absolute;
      left: 0;
      top: 0;
      margin: 10px 0 0 10px;
      font-size: 33px;
      color: var(--primary_color);
      font-weight: 500;
    }

    &:nth-child(2) {
      font-size: 20px;
      margin-left: 45px;
      color: var(--primary_text_color);
      font-weight: bold;
      margin-bottom: 25px;
    }

    &:nth-child(3) {
      font-size: 16px;
      width: 70%;
      color: var(--secondary_text_color);
    }
  }
`;