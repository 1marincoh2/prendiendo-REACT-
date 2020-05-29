import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GridContenedor() {
    return (
  
        
     <Container fluid>

  <Row >
    <Col style={{backgroundColor: 'black'}}  xl={12}>largo</Col>
    <Col style={{backgroundColor: 'red'}}  xl={12} xs={6}>largo</Col>
    <Col style={{backgroundColor: 'blue'}} xl={6} xs={6}>mediano</Col>
    <Col style={{backgroundColor: 'green'}} xl={6} sm={12}>mediano</Col>
  </Row>
  
   </Container>

        

	)
}

export default GridContenedor;
