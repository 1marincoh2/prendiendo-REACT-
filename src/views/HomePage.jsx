import React from 'react';
import Ejemplo from '../Componentes/ejemplo';
import Practica1 from '../Componentes/ComponentPractica/practica1';
import Mascota from '../Componentes/Mascota';
import PropsCards from '../Componentes/ComponentPractica/PropsCards';


function HomePage() {

	return (

		<div style={{border: '1px solid #D81B60'}} class="container">
				HomePage
		<div class="row align-items-start">
		  <div style={{border: '1px solid #D81B60'}}  class="col">
		  <PropsCards
				titulo="Nuevas Actividades"
				subtitulo="Aprendiendo props"
				texto="importanto componentes con props"
				texto1="realizar props con arrays"
				texto2="concluciones"
			></PropsCards>

		  </div>
		  <div style={{border: '1px solid #D81B60'}}  class="col">
		  <Mascota name="boby" species="perro" ></Mascota>
		  </div>
		  <div style={{border: '1px solid #D81B60'}}  class="col">
		  <Ejemplo></Ejemplo>
		  </div>
		</div>
		<div class="row align-items-center">
		  <div class="col-sm-12 col-md-12 col-lg-12">
		  <Practica1></Practica1>

		  </div>
		  
		</div>
		
	  </div>

		
	);
}

export default HomePage;