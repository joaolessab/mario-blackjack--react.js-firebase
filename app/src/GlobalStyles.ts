import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto, Oxygen, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    -webkit-font-smoothing: antialiased;
    background-color: '#E5E5E5';
  }

  h1 {
    font-family: 'Mario';
    font-size: 60px;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }

  h2 {
    font-family: '8bit';
    font-size: 16px;
    color: black;
  }
`;