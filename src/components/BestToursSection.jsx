import { StyledHeader, StyledSection, StyledArticle, StyledDiv, StyledButton } from "../styled-components/BestToursSection/BestToursSectionStyles";


const BestToursSection = () => {
  return (
    <>
      <StyledHeader>
        <h3>Los mejores tours</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <hr />
      </StyledHeader>
      <StyledSection>
        <StyledArticle>
          <img src="img/place-3.jpg" alt="" />
          <StyledDiv>
            <p>Rome</p>
            <p>2 nights + flight</p>
            <p>$1,000</p>
            <button>
              Book now
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </StyledDiv>
        </StyledArticle>
        <StyledArticle>
          <img src="img/place-3.jpg" alt="" />
          <StyledDiv>
            <p>Rome</p>
            <p>2 nights + flight</p>
            <p>$1,000</p>
            <button>
              Book now
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </StyledDiv>
        </StyledArticle>
        <StyledArticle>
          <img src="img/place-3.jpg" alt="" />
          <StyledDiv>
            <p>Rome</p>
            <p>2 nights + flight</p>
            <p>$1,000</p>
            <button>
              Book now
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </StyledDiv>
        </StyledArticle>
        <StyledArticle>
          <img src="img/place-3.jpg" alt="" />
          <StyledDiv>
            <p>Rome</p>
            <p>2 nights + flight</p>
            <p>$1,000</p>
            <button>
              Book now
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </StyledDiv>
        </StyledArticle>
        <StyledArticle>
          <img src="img/place-3.jpg" alt="" />
          <StyledDiv>
            <p>Rome</p>
            <p>2 nights + flight</p>
            <p>$1,000</p>
            <button>
              Book now
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </StyledDiv>
        </StyledArticle>
        <StyledArticle>
          <img src="img/place-3.jpg" alt="" />
          <StyledDiv>
            <p>Rome</p>
            <p>2 nights + flight</p>
            <p>$1,000</p>
            <button>
              Book now
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </StyledDiv>
        </StyledArticle>
      </StyledSection>
      <StyledButton>
          Ver todas las ofertas
          <span class="material-symbols-outlined">chevron_right</span>
        </StyledButton>
    </>
  );
};

export default BestToursSection;
