import React from 'react';	 
	 
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
        </table>

export default ejemplo