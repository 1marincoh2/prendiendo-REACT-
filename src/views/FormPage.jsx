import React from 'react';
import Formulario from '../Componentes/FormulariosComponents/formulario';
import FormularioPassword from '../Componentes/FormulariosComponents/FormularioPassword';
import FormularioPrueba from '../Componentes/FormulariosComponents/FormularioPrueba';


function FormPage() {

	return (
		<>
			<Formulario></Formulario>
			<FormularioPassword></FormularioPassword>
			<FormularioPrueba></FormularioPrueba>
		</>
	);
}

export default FormPage;
