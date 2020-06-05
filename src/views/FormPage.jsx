import React from 'react';
import Formulario from '../Componentes/FormulariosComponents/formulario';
import FormularioPassword from '../Componentes/FormulariosComponents/FormularioPassword';
import FormularioPrueba from '../Componentes/FormulariosComponents/FormularioPrueba';
import FormularioRadio from "../Componentes/FormulariosComponents/FormularioRadio";
import FormularioSelect from "../Componentes/FormulariosComponents/FormularioSelect";
import FormComponent from "../Componentes/FormulariosComponents/FormComponent";


function FormPage() {

	return (
		<>
			<Formulario></Formulario>
			<FormularioPassword></FormularioPassword>
			<FormularioPrueba></FormularioPrueba>
			<FormularioRadio></FormularioRadio>
			<FormularioSelect></FormularioSelect>
			<FormComponent></FormComponent>
		</>
	);
}

export default FormPage;
