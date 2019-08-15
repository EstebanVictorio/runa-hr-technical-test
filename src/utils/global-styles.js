import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --dark: #20232a;
  --primary-accent: skyblue;
  --secondary-accent: whitesmoke;
}


html, body {
  margin: 0;
  padding: 0;
}


#root {
  background-color: var(--dark);
  width: 100vw;
  height: 100vh;
}

`;

export default GlobalStyles;
