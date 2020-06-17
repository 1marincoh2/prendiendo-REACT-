import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';


const Puntodeventa = () => {


    const [venta, setVenta] = useState([
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 36', precio: 1350, cantidad: 2.00 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 28', precio: 119, cantidad: 2.00 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 30', precio: 155, cantidad: 1.00 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 38', precio: 111, cantidad: 2.00 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 34', precio: 54, cantidad: 3.00 },
    ])



    const Totaldeproductos = () => {

        let ventatotal = 0

        for (var i = 0; i < venta.length; i++) {
            var multiplicar = venta[i].cantidad;
            ventatotal += multiplicar * venta[i].precio;

        }
        return ventatotal;
    };

    const TotalxProducto = (cantidad, precio) => {

        const subtotal = cantidad * precio

        return subtotal;
    }









    return (

        <Container fluid>

            <Row >


                <Col style={{ border: '1px solid #D81B60' }} xl={8} >
                    <Table >
                        <thead>
                            <tr>

                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Importe</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                venta.map((producto) => (
                                    <tr>

                                        <td>{producto.nombre}</td>
                                        <td>{producto.cantidad}pza(s)x${producto.precio}</td>
                                        <td>${TotalxProducto(producto.precio, producto.cantidad)}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                </Col>


                <Col style={{ border: '1px solid #D81B60' }} xl={4} >

                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>TOTAL</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>

                                <td>{Totaldeproductos()}</td>
                            </tr>


                        </tbody>
                    </Table>

                </Col>




            </Row>
        </Container>





    )
};

export default Puntodeventa;
