import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
}

:root {
  --primary_color: #f78536;
  --secondary_color: #f46b45;
  --primary_text_color: #5a5a5a;
  --secondary_text_color: #848484;
  --card_services_back-color: #f1f1f1;
  --text_services_color: #7f7f7f;
  --footer_background: #393e46;
  --background_testimonial: #f1f1f1;
  --text_color_testimonial: #d45113;
}
`;