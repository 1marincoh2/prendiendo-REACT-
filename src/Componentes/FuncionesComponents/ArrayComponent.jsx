import React, { useState } from 'react';

const ArrayComponent = () => {


	const [compras, setArray] = useState([
		{producto: 'tortilla', precio: 20, pagado: true},
		{producto: 'refresco', precio: 33, pagado: false},
		{producto: 'huevo', precio: 3, pagado: true},
		{producto: 'pan', precio: 5, pagado: false},
		{producto: 'mantequilla', precio: 10, pagado: true},
		{producto: 'jabon Ace', precio: 43, pagado: true},
	])

	const [Bebidas, setBebidas] = useState([
		{producto: 'coca-cola', costo: 31, costo1: 29, vendido: true},
		{producto: 'cerveza', costo: 37, costo1: 35, vendido: true},
		{producto: 'pepsi', costo: 32, costo1: 30, vendido: true},
		{producto: 'big-cola', costo: 15, costo1: 13, vendido: false},
		{producto: 'agua', costo: 10, costo1: 8, vendido: true},
		{producto: 'jugos', costo: 20, costo1: 18, vendido: false},
	])


	const totalBebida = () => {
		let total = 0
		for (let i of Bebidas) total += i.costo;
		return total;
	}

	const totalBebida1 = () => {
		let total = 0
		for (let i of Bebidas) total += i.costo1;
		return total;
	}

	function totalBebida2() {

		var total = 0

		for (var i = 0; i < Bebidas.length; i++) {
			total += Bebidas[i].costo;


		}
		return total;


	}


	function totalBebida3() {

		var total = 0

		for (var i = 0; i < Bebidas.length; i++) {
			total += Bebidas[i].costo1;


		}
		return total;


	}


	const totalCompra = () => {
		let total = 0
		for (let i of compras) total += i.precio;
		return total;
	}


	function totalCompra2() {

		var total = 0

		for (var i = 0; i < compras.length; i++) {
			total += compras[i].precio;


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
