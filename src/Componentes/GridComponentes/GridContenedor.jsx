import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';


function GridContenedor() {
    return (
  
        
     <Container>

  <Row style={{ borderColor: 'black' }}>
    <Col style={{ borderColor: 'black' }} xs lg>largo</Col>
    <Col style={{ borderColor: 'black' }} xs lg>largo</Col>
    <Col style={{ borderColor: 'black' }} xs sm={8}>mediano</Col>
    <Col style={{ borderColor: 'black' }} xs sm={8}>mediano</Col>
  </Row>
  
</Container>

        

	)
}

export default GridContenedor;
