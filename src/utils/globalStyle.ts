import { createGlobalStyle } from 'styled-components'
import { screen, typos } from './styleConfig'

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
  body, button, a {
    font-family: 'Montserrat', sans-serif;
    font-size: ${typos.xs + typos.unit};
    line-height: 2.56rem;
    
    @media(min-width: ${screen.xl}px) {
      font-size: ${typos.sm + typos.unit} !important;
      line-height: 3.42rem;
    }
  }
  main {
    width: 100%;
  }
`
