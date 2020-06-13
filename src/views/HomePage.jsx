import React from 'react';
import Ejemplo from '../Componentes/ejemplo';
import Practica1 from '../Componentes/ComponentPractica/practica1';
import Mascota from '../Componentes/Mascota';
import PropsCards from '../Componentes/ComponentPractica/PropsCards';

function HomePage() {

	return (
		<div className="HomePage">
			HomePage
			<PropsCards
				titulo="Nuevas Actividades"
				subtitulo="Aprendiendo props"
				texto="importanto componentes con props"
				texto1="realizar props con arrays"
				texto2="concluciones"
			></PropsCards>

			<Mascota name="boby" species="perro" ></Mascota>
			<Ejemplo></Ejemplo>
			<Practica1></Practica1>

		</div>
	);
}

export default HomePage;