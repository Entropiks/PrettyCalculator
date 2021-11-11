import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode, GlobalStyles } from './Components/Themes';

// Styled component
const ToggleButton = styled.div``;


function App() {

  // Theme state
  const [theme, setTheme] = useState('light');
  // Calculation answer state
  const [tip, setTip] = useState(0);

  const themeToggler = () => {
    if (theme === 'light' ? setTheme('dark') : setTheme('light'));
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles/>
      <h1>T I P C A L C U L A T O R</h1>
      <div className="calc-wrapper">
        {/* Grid position 1 */}
        <ToggleButton> 
          <button onClick={() => themeToggler()}>Toggle</button>
        </ToggleButton>
        {/* Grid position 2 */}
        <input className="input-bill" placeholder="bill"/>
        <div>position 3</div>
        <div>position 4</div>
        <div>position 5</div>
        <div>position 6</div>
        <div>position 7</div>
        <div>position 8</div>
        <div>position 9</div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
