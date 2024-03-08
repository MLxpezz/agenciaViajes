import styled from "styled-components";

const StyledSectionContainer = styled.section`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(46, 45, 47, 0.68), rgb(2, 2, 2)), url("img/cover_bg_2.jpg");
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  padding: 80px 0 50px;
  z-index: 50;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;

const StyledHeader = styled.header`
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

const StyledDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 60%;
  gap: 20px;
  margin-bottom: 85px;
  overflow-x: hidden;
`;

const StyledDiv = styled.div`
  background-color: var(--background_testimonial);
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px 30px 30px 130px;
  font-size: 16px;
  color: var(--secondary_text_color);
  line-height: 1.6;
  font-weight: 300;

  picture {
    position: absolute;
    width: 80px;
    border-radius: 500%;
    overflow: hidden;
    left: 20px;

  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  p {
    text-align: left;
  }

  h3 {
    color: var(--text_color_testimonial);
  }
`;

const ClientsViewSection = () => {
  return (
    <StyledSectionContainer>
      <StyledHeader>
        <h3>Reseñas de clientes</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est
          facilis maiores, perspiciatis accusamus asperiores sint consequuntur
          debitis.
        </p>
        <hr />
      </StyledHeader>
      <StyledDivContainer>
        <StyledDiv>
          <picture>
            <img src="img/ot-1.jpg" alt="" />
          </picture>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
          </p>
          <h3>WILLIAMSON - Tourist</h3>
        </StyledDiv>
        <StyledDiv>
          <picture>
            <img src="img/ot-1.jpg" alt="" />
          </picture>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
          </p>
          <h3>WILLIAMSON - Tourist</h3>
        </StyledDiv>
      </StyledDivContainer>
    </StyledSectionContainer>
  );
};

export default ClientsViewSection;
