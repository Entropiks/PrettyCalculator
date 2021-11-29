import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode, GlobalStyles } from './Components/Themes';

// Styled component
const ToggleButton = styled.div``;

function App() {

  const [theme, setTheme] = useState('dark');
  const [userInput, setUserInput] = useState([]);
  const [total, setTotal] = useState('Enter something...');

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
    setUserInput(userInput + e.target.value);
  }

  function handleCalculate(e) {
    
    // I know eval isn't safe but this is an offline calculator app, its fine...
    setTotal(eval(userInput)); 
    if (userInput === '') {
      setUserInput('Enter something...')
    }
  }

  function handleClear() {
    setTotal('Enter something...');
    setUserInput('');
  }  
  

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
    <GlobalStyles/>
      <div className="app-wrapper"> 
        <header>
          <h1>C A L C</h1>
          <ToggleButton> 
            <button onClick={() => themeToggler()} />
          </ToggleButton>
        </header>
        <div className="total-wrapper">
          {total}
          <input className="total" placeholder="" value={userInput}/> 
        </div>
        <div className="calc-wrapper">
          { makeButtons() }
          <button onClick={handleButtonClick} value="+">+</button>
          <button onClick={handleButtonClick} value="-">-</button>
          <button onClick={handleButtonClick} value="/">/</button>
          <button onClick={handleButtonClick} value=".">.</button>
          <button onClick={handleButtonClick} value="*">*</button>
          <button onClick={handleButtonClick} value="del">del</button> 
        </div>
        <div className="clear-equal">
          <button className="clear-button" onClick={handleClear}>Clear</button>
          <button className="equals-button" onClick={handleCalculate}>=</button>
        </div>
      </div>  
    </ThemeProvider>
  );
}

export default App;
