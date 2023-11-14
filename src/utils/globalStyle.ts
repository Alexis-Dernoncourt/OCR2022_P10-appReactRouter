import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  #root {
    display: grid;
    grid-template-rows: repeat(minmax(10rem, 100%));
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
  }
`
