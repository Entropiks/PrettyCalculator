import { createGlobalStyle } from "styled-components"

export const darkMode = {
  body: '#3b4664',
  fontColor: '#fff',
  calcWrapper: 'red',
  themeButton: 'fff',
  equalsButton: '#d14031',
  clearButton: '#647199',
  button: '#e9e3db',
  appWrapper: '#242c44'
}

export const lightMode = {
  body: '#fff',
  fontColor: '#000',
  calcWrapper: 'blue',
  themeButton: '000',
  equalsButton: '#c85402',
  clearButton: '#fff',
  button: '#000',
  appWrapper: '#000'
}

export const GlobalStyles = createGlobalStyle`
  .app-wrapper {
    width: 300px;
    padding: 20px;
    border-radius: 7px;
    background-color: ${props => props.theme.appWrapper};
  }
  
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
    grid-template-areas:  
    background-color: ${props => props.theme.calcWrapper};
  }

  button {
    border: none;
    padding: 5px;
    margin: 5px;
    background-color: ${props => props.theme.button};
    box-shadow: 0px 3px 1px #646268;
  }

  .equals-button {
    border: none;
    background-color: ${props => props.theme.equalsButton};
    box-shadow: 0px 3px 1px maroon;
  }

  .input-bill {
    width: 100%;
    display: flex;
    height: 50px;
  }

  .total-wrapper {
    margin-bottom: 5px;
    padding: 0px 5px;
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
    padding: 0px 5px;
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

  .clear-button {
    border: none;
    box-shadow: 0px 3px 1px #232d46;
    background-color: ${props => props.theme.clearButton }
  }

` 