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
