import React from 'react';
import { Card } from 'react-bootstrap';

const PropsCards = ({ titulo, subtitulo,texto,texto1,texto2  }) => {
    
    
    
    
    
    return <div>
       
     <Card class="card text-white bg-primary mb-3" style={{ width: '18rem' }}>
<card-title class="p-3 mb-2 bg-danger text-white"  >{titulo}</card-title>
    <card-body  class="p-3 mb-2 bg-success text-white" >
     
     <card-text class="text-light bg-dark"> {subtitulo}</card-text>
    </card-body >
    <card-body  class="p-3 mb-2 bg-primary text-white" >

    <ul >
      <li class="text-dark" >{texto}</li>
      <li class="text-dark" >{texto1}</li>
      <li class="text-dark" >{texto2}</li>
    </ul>
    </card-body>
  
      </Card>
    </div>


};

export default PropsCards