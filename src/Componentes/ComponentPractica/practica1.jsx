import React from 'react';



function practica1 () {

    const string1  ={
     
      objeto: ['casa', 'caro', 'tele', 'radio', 'ventilador', 'mesa','silla','baño'],
        
    }
    
   const list=string1()
       
        return (
          <div>
          	    { list.map((obj) =>
  <li>{obj}</li>
                )}
             <table>
	  <thead>
		  <tr>
		   <th></th>
		  </tr>
	  </thead>
	  <tbody>
	    {
		 list.map((obj) =>(
						 
		  <tr>
		   <td>{obj}</td>
		   
		  </tr>			 
		 ))
		}
	  </tbody>
   </table>
             </div>
        )

}   
export default practica1;
