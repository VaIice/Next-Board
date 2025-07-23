import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px; /* 1rem = 10px */
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: #FFF;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol, li {
    list-style: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  input, textarea {
    font: inherit;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font: inherit;
    font-weight: normal;
    margin: 0;
  }
`;

export default GlobalStyle;
