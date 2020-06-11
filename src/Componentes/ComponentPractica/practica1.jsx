import React, { useState }from 'react';
import { Card,Button,Modal } from 'react-bootstrap';

function Practica1() {

    const [list, setList] = useState(['casa', 'caro', 'tele', 'radio', 'ventilador', 'mesa', 'silla', 'baño']
    
    )
    const[lista, setLista ]= useState({
        
        texto:'',
        
    });
    
    const [abrir, setAbrir] = useState(false);

    const handleClose = () => setAbrir(false);
    const handleShow = () => setAbrir(true);

                  
    
    const handleActualizar = () => {
        setLista(prevState => {
            const newdatos = [...prevState]
            const index = newdatos.findIndex((newdato) => newdato.id === lista.id)
            if (index > -1) {
                newdatos.splice(index, 1, list)
            }
            restartlista()
            return newdatos
        })
        handleClose() 
    }     
    
    const handleEliminar = (obj) => {
        setLista(prevState => {
            const borrardatos = [...prevState]
            const index = borrardatos.findIndex((borrar) =>borrar.id === obj.id)
            if (index > -1) {
                borrardatos.splice(index, 1 )
            }
            return borrardatos
                })


       }

        
    
        const restartlista = () => {
            setLista(prevState => {
                const object = {...prevState}
                object.texto = ''
                
            })
        }
    
        const changeInput = (evt, clave) => {
            const {name, value} = evt.target;
    
            setLista(prevState => {
                const object = {...prevState}
                object[name] = value
                return object
            })
    
        }
    

        const editar = (datoEditar) => {
            setLista(datoEditar)
             handleShow()
        }        
  
  
   
       
    return (
        <div >
        

            <Modal show={abrir} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa los Datos</Modal.Title>
                </Modal.Header>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>

                        <Modal.Body>lista<input type="text"
                            value={lista}
                            name="texto"
                            onChange={changeInput} />
                        </Modal.Body>
                       
                    </Card.Body>
                </Card>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                   
                </Modal.Footer>
            </Modal> 
 {list.map((obj) =>
<Card style={{ width: '18rem' }}>
<Card.Body>
<Button onClick={() => {
                                        editar(obj)
                                    }}>Editar</Button>
                                    <Button onClick={() => {
                                      handleEliminar(obj)
                                    }}>eliminar</Button>


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
