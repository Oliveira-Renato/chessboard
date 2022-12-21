import { createGlobalStyle } from 'styled-components';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%;
    background: #FFFFFC;
  }
  body, input, button, textarea {
    font: 400 1.6rem 'Roboto', sans-serif;
  }
`