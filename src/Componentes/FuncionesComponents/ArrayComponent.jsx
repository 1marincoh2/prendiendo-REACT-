import React, { useState } from 'react';

const ArrayComponent = () => {

  
    
	const [compras, setArray] = useState([
		{producto: 'tortilla', precio: 20},
		{producto: 'refresco', precio: 33},
		{producto: 'huevo', precio: 3},
		{producto: 'pan', precio: 5},
		{producto: 'mantequilla', precio: 10},
		{producto: 'jabon Ace', precio: 43},
	])

	const totalCompra = () => {
		let total = 0
	   for(let i of compras)  total+=i.precio;
	   return total;	
	}	
		  
	
		
      function totalCompra2() {

		 var total= 0
		
		for(var i = 0; i <= compras.length; i++){
			total+=  compras[i].precio;
				
				   
		}
		return total;	

	}

	return (
		<div style={{border: '1px solid blue'}}>
			
			total de la compra: {totalCompra()}
			<br/>
			total de la compra: {totalCompra2()}
            
		</div>)	
      
};		


export default ArrayComponent;
