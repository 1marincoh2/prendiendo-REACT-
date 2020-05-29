import React from 'react';
import GridContenedor from '../Componentes/GridComponentes/GridContenedor';
import GridAnime from '../Componentes/GridComponentes/GridAnime';
import GridStudent from '../Componentes/GridComponentes/GridStudents';


function GridPage() {

    return (
        <div>
				<GridContenedor></GridContenedor>
				<GridAnime></GridAnime>
				<GridStudent></GridStudent>
		</div>
	)
}

export default GridPage;
