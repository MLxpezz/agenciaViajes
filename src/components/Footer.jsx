import { StyledFooter, StyledDiv, StyledSection, StyledArticle } from "../styled-components/footer/FooterStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSection>
        <h3>Viajes</h3>
        <StyledDiv>
          <article>
            <p>Contactanos</p>
            <ul>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
            </ul>
          </article>
        </StyledDiv>
        <StyledDiv>
          <p>Contactanos</p>
          <article>
            <ul>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
            </ul>
          </article>
        </StyledDiv>
        <StyledDiv>
          <p>Contactanos</p>
          <article>
            <ul>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
              <li>Tour a Nueva York</li>
            </ul>
          </article>
        </StyledDiv>
        <StyledDiv>
          <p>Contactanos</p>
          <StyledArticle>
            <div>
              <a>
                <img src="img/gallery-01.jpg" alt="" />
              </a>
              <a>
                <img src="img/gallery-01.jpg" alt="" />
              </a>
              <a>
                <img src="img/gallery-01.jpg" alt="" />
              </a>
              <a>
                <img src="img/gallery-01.jpg" alt="" />
              </a>
              <a>
                <img src="img/gallery-01.jpg" alt="" />
              </a>
              <a>
                <img src="img/gallery-01.jpg" alt="" />
              </a>
            </div>
          </StyledArticle>
        </StyledDiv>
      </StyledSection>
    </StyledFooter>
  );
};

export default Footer;
