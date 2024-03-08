import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--footer_background);
`;

export const StyledSection = styled.section`
  background-image: url("img/bg-footer.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0 50px;
  font-size: 12px;
  color: #8e8e8e;
  background-color: #393e46;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;

  h3 {
    grid-column: span 6;
    margin-bottom: 70px;
    font-size: 40px;
    font-weight: 400;
    color: var(--primary_color);
  }
`;

export const StyledDiv = styled.div`
  text-align: start;
  height: 100%;
  width: 100%;

  &:nth-child(2) {
    grid-column: 2/3;
  }

  &:nth-child(4) {
    grid-column: 4/5;
  }

  p {
    color: var(--primary_color);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 35px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;

    li {
      font-size: 14px;
      text-align: start;
    }
  }
`;

export const StyledArticle = styled.article`
  div {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;