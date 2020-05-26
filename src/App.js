import React from 'react';
import './App.css';


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
		</div>
	);
}

export default App;
