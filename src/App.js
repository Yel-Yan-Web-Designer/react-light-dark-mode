import React, {useState} from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  const [darkMode, setDarkMode] = useState(true);


  //toggle dark mode
  function toggleDarkMode () {
    setDarkMode(prevstate => !prevstate);
  }
  
  return (
    <div className="App">
        <Nav
          darkMode = {darkMode}
          toggleDarkMode = {toggleDarkMode}
        />
        <Main
          darkMode = {darkMode}
        />
    </div>
  );
}

export default App;
