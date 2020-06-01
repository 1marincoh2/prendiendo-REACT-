import React from 'react';


const OperadoresComponent = () => {

	const suma = () => {
		let total = 0;
		let valor = 2;
		let valor2 = 5;
		total = valor + valor2;
		return total;
	}

	const sumarmas = () => {
		let total = 0;
		let valor = 1;
		valor++;
		total = valor
		return total;
	}

	const sumar = () => {
		let total = 10;
		let valor = 1;
		total = total + valor
		return total;
	}

	const resta = () => {
		let total = 0;
		let valor = 2;
		let valor2 = 5;
		total = valor - valor2;
		return total;
	}

	const restamas = () => {
		let total = 0;
		let valor = 5;
		valor--;
		total = valor
		return total;
	}

	const multiplicacion = () => {
		let total = 0;
		let valor = 2;
		let valor2 = 5;
		total = valor * valor2;
		return total;
	}

	const divicion = () => {
		let total = 0;
		let valor = 420;
		let valor2 = 20;
		total = valor / valor2;
		return total;
	}

	return (
		<div style={{border: '1px solid orange'}}>
			suma: {suma()}
			<br/>
			sumar: {sumar()}
			<br/>
			suma mas: {sumarmas()}
			<br/>
			resta: {resta()}
			<br/>
			resta mas: {restamas()}

			<br/>
			multiplicacion: {multiplicacion()}

			<br/>
			division: {divicion()}
		</div>
	)
};

export default OperadoresComponent