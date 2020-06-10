import React from 'react';	 


function ejemplo() {

	const pests = [
		{n: 'animal', r: 'elefante'},
		{n: 'animal', r: 'pajaro'},
		{n: 'animal', r: 'gato'}
	]
	

	return (

		<div>
          <ul>		
			{
				pests.map((pet) => (
					<li key={pet.r}>{pet.r}</li>
				))
			}
		  </ul>
	
	<table>
	  <thead>
		  <tr>
		   <th></th>
		  </tr>
	  </thead>
	  <tbody>
	    {
		 pests.map((pet) =>(
						 
		  <tr key={pet.r}>
		   <td>{pet.n}</td>
		   <td>{pet.r}</td>
		  </tr>			 
		 ))
		}
	  </tbody>
   </table>

	    </div>
	)
}			
	export default ejemplo;