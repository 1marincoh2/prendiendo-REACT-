import React from 'react';

import { Nav } from 'react-bootstrap';

const Navbar = () => {

	return (

	<div>

<Nav activeKey="/">
  <Nav.Item>
    <Nav.Link href="/">home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">about</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/peticiones">homeaxios</Nav.Link>
  </Nav.Item>
	<Nav.Item>
		<Nav.Link href="/TablasPage">TablasPage</Nav.Link>
	</Nav.Item>
  <Nav.Item>
		<Nav.Link href="/Contenedores">Contenedores</Nav.Link>
	</Nav.Item>
	<Nav.Item>
		<Nav.Link href="/funciones">Funciones</Nav.Link>
	</Nav.Item>
	<Nav.Item>
		<Nav.Link href="/objetos">Objetos</Nav.Link>
	</Nav.Item>
 </Nav>



	</div>

	)
};
export default Navbar
