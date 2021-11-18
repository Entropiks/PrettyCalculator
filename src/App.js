import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode, GlobalStyles } from './Components/Themes';

// Styled component
const ToggleButton = styled.div``;


function App() {

  const [theme, setTheme] = useState('light');
  const [userInput, setUserInput] = useState([]);
  const [total, setTotal] = useState(0);

  const themeToggler = () => {
    if (theme === 'light' ? setTheme('dark') : setTheme('light'));
  }

  const calcButtons = [];
  const makeButtons = () => {
    for (let i = 0; i < 10; i++) {
      calcButtons.push(
        <button onClick={handleButtonClick} key={i} value={i}>{i}</button>
      )
    }
    return calcButtons;
  }

  function handleButtonClick(e) {
    console.log(e.target.value);
    setUserInput(e.target.value);
  }
  
  

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles/>   
      <header>
        <h1>C A L C U L A T O R</h1>
        <ToggleButton> 
          <button onClick={() => themeToggler()}>Toggle</button>
        </ToggleButton>
      </header>
      <input className="total" placeholder="Total" value={userInput}/> 
      <div className="calc-wrapper">
        { makeButtons() }
        <button onClick={handleButtonClick} value="+">+</button>
        <button onClick={handleButtonClick} value="-">-</button>
        <button onClick={handleButtonClick} value="/">/</button>
        <button onClick={handleButtonClick} value=".">.</button>
        <button onClick={handleButtonClick} value="*">*</button>
        <button onClick={handleButtonClick} value="del">del</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
