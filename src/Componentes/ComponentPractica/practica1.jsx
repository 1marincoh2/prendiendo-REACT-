import React from 'react';
import { Card,Button } from 'react-bootstrap';

function Practica1() {

    const list = ['casa', 'caro', 'tele', 'radio', 'ventilador', 'mesa', 'silla', 'baño'];
 
   
  



    
   
       
    return (
        <div >
  

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>lista</Card.Title>

{list.map((obj) =>
<Card.Text key={obj}>
    {obj}
</Card.Text>
)}
</Card.Body>
</Card>
</div>
);
}
   
export default Practica1;
