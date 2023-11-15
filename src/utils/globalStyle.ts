import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: #ccc; */
  }
  html {
    font-size: 62.5%;
  }
  #root {
    width: 100%;
    /* display: grid; */
    /* grid-template-rows: repeat(1 minmax(10rem, 100%)); */
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
  }
  main {
    width: 100%;
  }
`
