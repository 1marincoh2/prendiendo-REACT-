import React from 'react';
import './App.css';
import { createRouter } from 'the-react-router'
import Navbar from './Componentes/Navbar';
import HomePage from './views/HomePage';
import AbautPage from './views/AbautPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AxiosPage from './views/AxiosPage';

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
			path: '/axios',
			component: AbautPage
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
