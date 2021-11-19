import { createGlobalStyle } from "styled-components"

export const darkMode = {
  body: '#000',
  fontColor: '#fff',
  calcWrapper: '#777777'
}

export const lightMode = {
  body: '#fff',
  fontColor: '#000',
  calcWrapper: '#c7c7c7'
}

export const GlobalStyles = createGlobalStyle`
  
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
  }

  .calc-wrapper {
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 4fr; 
    grid-template-rows: 4fr 4fr 4fr 4fr; 
    grid-template-areas: 
      "calcbutton"
      "calcbutton"
      "calcbutton"
      "calcbutton"; 
    // background-color: ${props => props.theme.calcWrapper};
  }

  .cal-wrapper div {
    padding: 5px;
  }

  .input-bill {
    width: 100%;
    display: flex;
    height: 50px;
  }

  .total {
    width: 100%;
    box-sizing: border-box;
  }

  header {
    // we should add props here for the theme
    display: flex;
    align-items: center;
  }

` 