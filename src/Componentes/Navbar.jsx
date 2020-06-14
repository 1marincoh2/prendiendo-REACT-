import React, {useState} from 'react';

import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

const NavbarUno = () => {
    const textSearch = useSelector(state => state);
    const dispatch = useDispatch();

    const [captura, setCaptura] = useState('');


    return (

        <div>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Aprendiendo React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/peticiones">HomeAxios</NavDropdown.Item>
                            <NavDropdown.Item href="/TablasPage">TablasPage</NavDropdown.Item>
                            <NavDropdown.Item href="/Contenedores">Contenedores</NavDropdown.Item>
                            <NavDropdown.Item href="/funciones">Funciones</NavDropdown.Item>
                            <NavDropdown.Item href="/PuntoVenta">Punto De Venta</NavDropdown.Item>
                            <NavDropdown.Item href="/formularios">Formularios</NavDropdown.Item>
                            <NavDropdown.Item href="/Inputtext">Capturas</NavDropdown.Item>
                            <NavDropdown.Item href="/Arraymodificado">ModificandoInfo</NavDropdown.Item>
                            <NavDropdown.Item href="/ArrayEditar">EditandoDatos</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/NewPage">UsandoProps</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search"
                                     onChange={e => setCaptura(e.target.value)}
                                     className="mr-sm-2"/>
                        <Button variant="outline-success"
                                onClick={() => {
                                    dispatch({
                                        type: "Search",
                                        payload: captura
                                    })
                                }}

                        >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>


    )
};
export default NavbarUno
