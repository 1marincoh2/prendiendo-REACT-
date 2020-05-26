import React from 'react';
import './App.css';

import Mascota from './Componentes/Mascota';

function App() {

	const pests = [
		{n: 'animal', r: 'elefante'},
		{n: 'animal', r: 'pajaro'},
		{n: 'animal', r: 'gato'}
	]
	return (
		<div className="App">
			<ul>		
			
				{
					pests.map((pet) => (
						<li>{pet.r}</li>
					))
				}
			</ul>
			<table>
             <thead>
              <tr>
               <th><Mascota></Mascota></th>
			  </tr>
             </thead>
			 {
			 pests.map((pet) =>(
             <tbody>
				 
              <tr>
               <td>{pet.n}</td>
               <td>{pet.r}</td>
              </tr>
              
             </tbody>
			 ))
			}
            </table>
		</div>
	);
}

export default App;
