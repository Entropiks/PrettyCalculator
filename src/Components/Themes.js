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
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 150px 150px;
    grid-gap: 1rem;
    width: 500px;
    height: 400px;
    background-color: ${props => props.theme.calcWrapper};
  }

  .input-bill {
    width: 100%;
    display: flex;
    height: 50px;
  }

` 