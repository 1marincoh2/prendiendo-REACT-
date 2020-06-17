import React, { useState } from 'react';
import { Card, Button, Modal, Col, Row } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

function Practica1() {

    const [list, setList] = useState(['casa', 'caro', 'tele', 'radio', 'ventilador', 'mesa', 'silla', 'baño']


    );

    const [datoanterior, setDatoanterior] = useState('')


    const [lista, setLista] = useState({

        texto: '',

    });

    const [abrir, setAbrir] = useState(false);

    const handleClose = () => setAbrir(false);
    const handleShow = () => setAbrir(true);



    const handleActualizar = () => {
        setList(prevState => {
            const newdatos = [...prevState]
            const index = newdatos.findIndex((newdato) => newdato === datoanterior)
            if (index > -1) {
                newdatos.splice(index, 1, lista.texto)
            }
            restartlista()
            return newdatos
        })
        handleClose()
    }

    const handleEliminar = (obj) => {
        setList(prevState => {
            const borrardatos = [...prevState]
            const index = borrardatos.findIndex((borrar) => borrar === obj)
            if (index > -1) {
                borrardatos.splice(index, 1)
            }
            return borrardatos
        })


    }



    const restartlista = () => {
        setDatoanterior('')
        setLista(prevState => {
            const object = { ...prevState }
            object.texto = ''
            return object;

        })

    }


    const changeInput = (evt, clave) => {
        const { name, value } = evt.target;

        setLista(prevState => {
            const object = { ...prevState }
            object[name] = value
            return object

        })

    }



    const editar = (datoEditar) => {
        setDatoanterior(datoEditar)
        setLista(prevState => {
            prevState.texto = datoEditar

            return prevState

        })
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
                            value={lista.texto}
                            name="texto"
                            onChange={changeInput} />
                        </Modal.Body>

                    </Card.Body>
                </Card>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="secondary" onClick={handleActualizar}>
                        Actualizar
          </Button>

                </Modal.Footer>
            </Modal>


            <Row>

                {list.map((obj) =>
                    <Col xs={6} md={4} style={{border: '1px solid #D81B60', backgroundColor: '#AB47BC', }}>
                        {obj}
                        <Fab size="small" color="secondary" aria-label="edit">
                            <EditIcon  onClick={() => {
                                editar(obj)
                            }} />
                        </Fab>
                        <IconButton variant="primary" size="sm" aria-label="delete">
                            <DeleteIcon onClick={() => {
                                handleEliminar(obj)
                            }} />
                        </IconButton>


                    </Col>

                )}

            </Row>
        </div>
    );
}

export default Practica1;
