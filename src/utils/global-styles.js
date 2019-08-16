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
  font-size: 24px;
  box-sizing: border-box;
  color: var(--primary-accent);
}


#root {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
}

.main-content {
  width: 100vw;
  height: 100vh;
}

.welcome-title, .call-to-action {
  text-align: center;
}

.content-section {
}

`;

export default GlobalStyles;
