import React, { useState }from 'react';
import { Card,Button,Modal } from 'react-bootstrap';

function Practica1() {

    const list = ['casa', 'caro', 'tele', 'radio', 'ventilador', 'mesa', 'silla', 'baño'];
 
    const handleChange = (evt) => {
        list(evt.target.value);
        }

    const [abrir, setAbrir] = useState(false);

    const handleClose = () => setAbrir(false);
    const handleShow = () => setAbrir(true);

            
  
  
   
       
    return (
        <div >
                
            <Modal show={abrir} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa los Datos</Modal.Title>
                </Modal.Header>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>

                        <Modal.Body>Fruta <input type="text"
                            value={list}
                            name="list"
                            onChange={handleChange} />
                        </Modal.Body>
                        

                    </Card.Body>
                </Card>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                      
                    </Button>
                </Modal.Footer>
            </Modal>

 {list.map((obj) =>
<Card style={{ width: '18rem' }}>
<Card.Body>
<Button variant="primary" onClick={handleShow}>
                agregar datos
      </Button>

<Card.Title>lista</Card.Title>


<Card.Text key={obj}>
    {obj}
</Card.Text>

</Card.Body>
</Card>
)}
</div>
);
}
   
export default Practica1;
