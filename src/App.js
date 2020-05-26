import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nombre from './Componentes/Nombresperro';
import Nombre1 from './Componentes/Nombre1';
import Nombre2 from './Componentes/Nombre2';
import Nombre3 from './Componentes/Nombre3';
import Nombre4 from './Componentes/Nombre4';

import Mascota from './Componentes/Mascota';
import Animal from './Componentes/Animal';

function App() {
	const pests = [
		{n: 'animal', r: 'elefante'},
		{n: 'animal', r: 'pajaro'},
		{n: 'animal', r: 'gato'}
	]
	return (
		<div className="App">

			<Animal name={'cookie'} species={'Perro'}></Animal>
			<br/>
			<Mascota name={'cookie'} species={'Perro'}></Mascota>
			<br/>
			{
				pests.map((pet) => (
					<div>
						<Animal name={pet.n} species={pet.r}></Animal>
						<br/>
					</div>
				))
			}
		</div>
	);
}

export default App;
