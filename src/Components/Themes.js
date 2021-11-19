import { createGlobalStyle } from "styled-components"

export const darkMode = {
  body: '#000',
  fontColor: '#fff',
  calcWrapper: 'red',
  themeButton: 'fff'
}

export const lightMode = {
  body: '#fff',
  fontColor: '#000',
  calcWrapper: 'blue',
  themeButton: '000'
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
    grid-template-columns: repeat(4, 1fr); 
    background-color: ${props => props.theme.calcWrapper};
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
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  header button {
    display: flex;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.themeButton }
  }

  .clear-equal {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

` 