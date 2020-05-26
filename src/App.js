import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nombre from './Componentes/Nombresperro';
import Nombre1 from './Componentes/Nombre1';
import Nombre2 from './Componentes/Nombre2';
import Nombre3 from './Componentes/Nombre3';
import Nombre4 from './Componentes/Nombre4';

function App() {
  return (
    
      
    <div className="App">        
         <Nombre></Nombre> 
      <header className="App-header">
      <Nombre1></Nombre1>
      <Nombre2></Nombre2>
        <img src={logo} className="App-logo" alt="logo" />
        <Nombre3></Nombre3>
        <p>
        
        
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
          <Nombre4></Nombre4>
        </a>
      </header>
    </div>
  );
}

export default App;