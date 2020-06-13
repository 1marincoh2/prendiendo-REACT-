import React, { useState } from 'react';

import { Nav, Button, Modal } from 'react-bootstrap';

const Navbar = () => {
	const [abrir, setAbrir] = useState(false);

	const Close = () => setAbrir(false);
	const Open = () => setAbrir(true);




	return (

		<div>
			<Button variant="primary" onClick={Open}>
				LinksPages
      </Button>

			<Modal show={abrir} onHide={Close} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Paginas</Modal.Title>
				</Modal.Header>
				<Nav activeKey="/">
					<Nav.Item>
						<Nav.Link href="/"><Button variant="primary">Home</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/about"><Button variant="secondary">About</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/peticiones"><Button variant="success">HomeAxios</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/TablasPage"><Button variant="warning">TablasPage</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/Contenedores"><Button variant="danger">Contenedores</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/funciones"><Button variant="info">Funciones</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/PuntoVenta"><Button variant="dark">PuntoDVenta</Button></Nav.Link>
					</Nav.Item>
					</Nav>

				<Modal.Body> 
				     <Nav.Item>
						<Nav.Link href="/formularios"><Button variant="outline-primary">Formularios</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/Inputtext"><Button variant="outline-secondary">Capturas</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/Arraymodificado"><Button variant="outline-success">ModificandoInfo</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/ArrayEditar"><Button variant="outline-warning">EditandoDatos</Button></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/NewPage"><Button variant="outline-danger">UsandoProps</Button></Nav.Link>
					</Nav.Item>

                 </Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={Close}>
						Close
          </Button>
					
        				</Modal.Footer>
			</Modal>



		</div>

	)
};
export default Navbar
