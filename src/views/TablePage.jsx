import React from 'react';
import TableEjemplo from '../Componentes/TableComponents/TableEjemplo';
import TableList from '../Componentes/TableComponents/TableList';
import TableAnimes from '../Componentes/TableComponents/TableAnimes';
import TableStudents from '../Componentes/TableComponents/TableStudents';

function TablePage() {

    return (
        <div>
				<TableEjemplo></TableEjemplo>
				<TableList></TableList>
				<TableAnimes></TableAnimes>
				<TableStudents></TableStudents>
		</div>
	)
}

export default TablePage;
