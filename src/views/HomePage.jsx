import React from 'react';
import Ejemplo from '../Componentes/ejemplo';
import Practica1 from '../Componentes/ComponentPractica/practica1';
import Mascota from '../Componentes/Mascota';

function HomePage() {

    return (
        <div className="HomePage">
				HomePage
				<Mascota name="buldog" species="perro" ></Mascota>
				<Ejemplo></Ejemplo>
				<Practica1></Practica1>
				
		</div>
	);
}

export default HomePage;