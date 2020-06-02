import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Puntodeventa = () => {


    const [venta, setVenta] = useState([
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 36', precio: 135, cantidad: 1 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 28', precio: 119, cantidad: 2 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 30', precio: 155, cantidad: 1 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 38', precio: 111, cantidad: 2 },
        { nombre: 'Falda Azul Tela Tergal(sec/prepa) Talla 34', precio: 54, cantidad: 3 },
    ])



    const Totaldeproductos = () => {

        let ventatotal = 0

        for (var i = 0; i < venta.length; i++) {
            var multiplicar = venta[i].cantidad;
            ventatotal += multiplicar * venta[i].precio;

        }
        return ventatotal;
    };




    return (

        <Container fluid>

            <Row >
                {
                   venta.map((producto) => (
                    <Col style={{ border: '1px solid #D81B60', backgroundColor: '#FFD600' }} xl={8} >{producto.nombre},{producto.cantidad}x{producto.precio} 
                    <Row >
                            <Col style={{ border: '1px solid #D81B60', backgroundColor: '#7B1FA2' }} xl={4} >{Totaldeproductos()}</Col>
                    </Row>  
                       </Col>       
                                     ))

                }
            </Row>
        </Container>





    )
}

export default Puntodeventa;
