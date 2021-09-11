import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  h2 {
    margin: 0px;
    background-color: red;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`