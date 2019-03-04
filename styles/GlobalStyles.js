import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: sans-serif;
  }

  body {
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
  }
`;

export default GlobalStyles;
