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
		
	const [Bebidas, setBebidas] = useState([
		{producto: 'coca-cola', costo: 31 , costo1: 29},
		{producto: 'cerveza', costo: 37, costo1: 35 },
		{producto: 'pepsi', costo: 32, costo1: 30},
		{producto: 'big-cola', costo: 15, costo1: 13},
		{producto: 'agua', costo: 10, costo1: 8},
		{producto: 'jugos', costo: 20, costo1: 18},
	])


	const totalBebida = () => {
		let total = 0
	   for(let i of Bebidas)  total+=i.costo;
	   return total;	
	}	

	const totalBebida1 = () => {
		let total = 0
	   for(let i of Bebidas)  total+=i.costo1;
	   return total;	
	}	

	function totalBebida2() {

		var total= 0
	   
	   for(var i = 0; i < Bebidas.length; i++){
		   total+=  Bebidas[i].costo;
			   
				  
	   }
	   return total;	

	   

   }



   function totalBebida3() {

	var total= 0
   
   for(var i = 0; i < Bebidas.length; i++){
	   total+=  Bebidas[i].costo1;
		   
			  
   }
   return total;	



}


	const totalCompra = () => {
		let total = 0
	   for(let i of compras)  total+=i.precio;
	   return total;	
	}	
		  
	
		
      function totalCompra2() {

		 var total= 0
		
		for(var i = 0; i < compras.length; i++){
			total+=  compras[i].precio;
				
				   
		}
		return total;	



	}

	return (
		<div style={{border: '1px solid blue'}}>
			
			total de la compra: {totalCompra()}
			<br/>
			total de la compra: {totalCompra2()}
            <br/>
			total de la compra: {totalBebida()}
            <br/>
			total de la compra: {totalBebida1()}
            <br/>
			total de la compra: {totalBebida2()}
            <br/>
			total de la compra: {totalBebida3()}
            
		</div>)	
      
};		


export default ArrayComponent;
