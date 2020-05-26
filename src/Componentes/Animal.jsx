import React from 'react';

const Animal = (props) => {
	return <div>
		Nombre: {props.name}
		<br/>
		Especie: {props.species}
	</div>
};

export default Animal
