import React from 'react';
import GridContenedor from '../Componentes/GridComponentes/GridContenedor';
import GridAnime from '../Componentes/GridComponentes/GridAnime';
import GridStudent from '../Componentes/GridComponentes/GridStudents';
import GridPractica from '../Componentes/GridComponentes/GridPractica';


function GridPage() {

    return (
        <div>
				<GridContenedor></GridContenedor>
				<GridAnime></GridAnime>
				<GridStudent></GridStudent>
				<GridPractica></GridPractica>
		</div>
	)
}

export default GridPage;
