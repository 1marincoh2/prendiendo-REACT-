import React from 'react';
import './App.css';
import { createRouter } from 'the-react-router'
import Navbar from './Componentes/Navbar';
import HomePage from './views/HomePage';
import AbautPage from './views/AbautPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AxiosPage from './views/AxiosPage';
import TablePage from './views/TablePage';
import GridPage from './views/GridPage';
import FuncionesPage from './views/FuncionesPage';
import ArrayPage from './views/ArrayPage';
import FormPage from './views/FormPage';
import Formtextpage from './views/Formtextpage';
import Arraymodififcado from './views/Arraymodificado';
import ArrayEditar from './views/ArrayEditar';


const routes = {
	routes: [
		{
			path: '/',
			exact: true,
			component: HomePage
		},
		{
			path: '/about',
			component: AbautPage
		},

		{
			path: '/peticiones',
			component: AxiosPage
		},

		{
			path: '/TablasPage',
			component: TablePage
		},

        {
			path: '/Contenedores',
			component: GridPage
		},
		{
			path: '/funciones',
			component: FuncionesPage
		},
        {
			path: '/PuntoVenta',
			component: ArrayPage
		},
		{
			path: '/formularios',
			component: FormPage
		},

		{
			path: '/Inputtext',
			component: Formtextpage
		},

		{
			path: '/Arraymodificado',
			component: Arraymodififcado
		},
		{
			path: '/ArrayEditar',
			component: ArrayEditar
		},

	]
}
const [Router, Routes] = createRouter(routes)

function App() {
	return (
		<Router>
			<div>
				<Navbar/>
			</div>
			<Routes/>
		</Router>
	);
}

export default App;
