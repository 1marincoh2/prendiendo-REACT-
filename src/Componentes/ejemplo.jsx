import React from 'react';	 

const pests = [
	{n: 'animal', r: 'elefante'},
	{n: 'animal', r: 'pajaro'},
	{n: 'animal', r: 'gato'}
]
           {
	          <ul>		
			
				{
				    pests.map((pet) => (
						<li>{pet.r}</li>
					))
				}
	          </ul>
		{
		<table>
          <thead>
              <tr>
               <th></th>
			  </tr>
          </thead>
		  <tbody>
			 {
			 pests.map((pet) =>(
            				 
              <tr>
               <td>{pet.n}</td>
               <td>{pet.r}</td>
              </tr>
              
             
			 ))
			}
		  </tbody>
	}    </table>
}
export default ejemplo