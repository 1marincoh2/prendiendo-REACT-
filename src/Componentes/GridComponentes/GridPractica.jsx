import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GridPractica() {
    return (


     <Container fluid >       
     

<Row >
  
  <Col xl={12} xs={12} style={{border: '1px solid #D81B60', backgroundColor: '#AB47BC', height: '320px'}}  >largo
  <Row xl={6} xs={12}>
  <Col xl={4} style={{border: '1px solid #004D40', backgroundColor: '#A7FFEB', height: '320px' }}   >largo</Col>
  <Col xl={8}style={{border: '1px solid #D81B60',backgroundColor: '#AFB42B', height: '320px' }}  >mediano
  
  <Row >
  <Col xl={4} xs={6} style={{border: '1px solid #D81B60', backgroundColor: '#E040FB', height: '125px'}} >mediano</Col>
  <Col xl={4} xs={6} style={{border: '1px solid #D81B60', backgroundColor: '#E040FB', height: '125px'}} >mediano</Col>
  <Col xl={4} xs={6 }style={{border: '1px solid #D81B60', backgroundColor: '#E040FB', height: '125px'}} >mediano</Col>
  <Col xl={12} xs={6}style={{border: '1px solid #D81B60', backgroundColor: '#4A148C', height: '125px'}}  >mediano</Col>
  </Row>
  
  <Row >
   <Col xl={6} xs={12} style={{border: '1px solid #D81B60',  backgroundColor:'#4A148C', height: '125px'}} >mediano</Col>
  <Col xl={6} xs={12}  style={{border: '1px solid #D81B60',  backgroundColor:'#4A148C', height: '125px'}} >mediano</Col>
  </Row>
  </Col>
  </Row>
  </Col>
  
   
</Row>

   </Container>



	)
}

export default GridPractica;
