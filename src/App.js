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
			{
            	
				pests.map((pet) => (
					<div>
							
			          <ul>
						  <il>{pet.r}</il>
					 </ul>
                                                                       
						<br/>
					</div>
				))
			}
		</div>
	);
}

export default App;
