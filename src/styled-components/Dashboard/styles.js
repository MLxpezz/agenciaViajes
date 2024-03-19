import styled from "styled-components";

export const StyledAside = styled.aside`
  min-height: 100vh;
  max-height: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  background-color: var(--primary_color);
`;

export const StyledSection = styled.section`
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 20px 25px;
  gap: 15px;

  header {
    color: #fff;
    font-weight: 600;
  }

  h5 {
    font-size: 18px;
  }

  &:nth-child(1) {
    align-items: center;
    padding: 20px;

    picture {
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        border-radius: 50%;
        height: 100px;
        object-fit: contain;
      }
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;
