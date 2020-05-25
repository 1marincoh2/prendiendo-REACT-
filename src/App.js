import React from 'react';
import logo from './logo.svg';
import './App.css';
import Juego from './juegos';
import Tarea from './tareas';
import Aprende from './aprender';
import Realiza from './realizar';
import Saludo from './saludos';

function App() {
  return (
    
    <div className="App">        
      <Realiza></Realiza>
      <header className="App-header">
      <Juego></Juego>
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Saludo></Saludo>
        <Tarea></Tarea>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Aprende></Aprende>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
