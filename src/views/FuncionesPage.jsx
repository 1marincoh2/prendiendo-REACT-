import React from 'react';
import SwitchComponent from '../Componentes/FuncionesComponents/SwitchComponent';
import IfComponent from '../Componentes/FuncionesComponents/IfComponent';
import OperadoresComponent from '../Componentes/FuncionesComponents/OperadoresComponent';
import ArrayComponent from '../Componentes/FuncionesComponents/ArrayComponent';

function FuncionesPage() {

    return (
        <div className="Switch">
			<SwitchComponent></SwitchComponent>
			<IfComponent></IfComponent>
			<OperadoresComponent></OperadoresComponent>
			<ArrayComponent></ArrayComponent>
		</div>
	);
}

export default FuncionesPage;
