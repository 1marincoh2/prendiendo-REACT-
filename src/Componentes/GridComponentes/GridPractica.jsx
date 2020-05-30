import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GridPractica() {
    return (


     <Container fluid >       
      
<Row >
    <Col style={{border: '1px solid #D81B60', backgroundColor: '#AB47BC', height: '1800px' }}  xl={12}>largo
    
      <Row> 
        <Col xl={4} style={{border: '1px solid #004D40', backgroundColor: '#A7FFEB', height: '200px' }}   >largo</Col>
    </Row>

      <Row xl={{ span: 6, offset: 8 }}>
       <Col   style={{border: '1px solid #C0CA33', backgroundColor: '#AFB42B'}} >mediano
        <Row xl={3} md={2}>
          <Col style={{border: '1px solid #4A148C', backgroundColor: '#E040FB'}}  >mediano</Col>
          <Row >
          <Col style={{border: '1px solid #4A148C', backgroundColor: '#E040FB'}}  >mediano</Col>
        </Row>
        <Row >
          <Col style={{border: '1px solid #4A148C', backgroundColor: '#E040FB'}}  >mediano</Col>
        </Row>
        <Row >
          <Col style={{border: '1px solid #4A148C', backgroundColor: '#E040FB'}} xl={12}>mediano</Col>
          <Row xl={8} md={2}>
         <Col  style={{border: '1px solid #4A148C', backgroundColor: '#E040FB'}} >median</Col>
          <Row >
          <Col style={{border: '1px solid #4A148C', backgroundColor: '#E040FB'}} >mediano</Col>
          </Row>
          </Row>
        

          </Row>

          
      </Row>
        
          
      </Col>
      </Row>

    
   </Col>
</Row>

   </Container>



	)
}

export default GridPractica;
