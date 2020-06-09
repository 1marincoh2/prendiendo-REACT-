import React, { useState } from 'react'
import { Button, Card, Row, Table, Modal } from 'react-bootstrap'

const InfActualizada = () => {

    const [fruts, setFruts] = useState([
        {
            id: 1,
            fruta: 'platano',
            verduras: 'cebollas',
            legunbres: 'frijol',
            carne: 'cerdo',
            bebidas: 'refresco'
        },
        {
            id: 2,
            fruta: 'platano',
            verduras: 'cebollas',
            legunbres: 'frijol',
            carne: 'cerdo',
            bebidas: 'refresco'
        },
        {
            id: 3,
            fruta: 'platano',
            verduras: 'cebollas',
            legunbres: 'frijol',
            carne: 'cerdo',
            bebidas: 'refresco'
        },

    ]);

    const [frut, setFrut] = useState({
        id: 0,
        fruta: '',
        verduras: '',
        legunbres: '',
        carne: '',
        bebidas: ''

    });
    const [abrir, setAbrir] = useState(false);

    const handleClose = () => setAbrir(false);
    const handleShow = () => setAbrir(true);

            

    const handleGuardar= (event) => {
            setFruts(prevState => {
            const inf = [...prevState]
            const newdata = { ...frut }
            newdata.id = inf.length + 1
            inf.push(newdata)
            restartdato()
           return inf
        })
         handleClose()                
      }        
        
    

    const handleActualizar = () => {
        setFruts(prevState => {
            const newdatos = [...prevState]
            const index = newdatos.findIndex((newdato) => newdato.id === frut.id)
            if (index > -1) {
                newdatos.splice(index, 1, frut)
            }
            restartdato()
            return newdatos
        })
        handleClose() 
    }
    const handleEliminar = (dat) => {
        setFruts(prevState => {
            const borrardatos = [...prevState]
            const index = borrardatos.findIndex((borrar) => dat.id)
            if (index > -1) {
                borrardatos.splice(index, 1 )
            }
            return borrardatos
                })


       }

                const restartdato = () => {
        setFrut(prevState => {
            const object = { ...prevState }
            object.id = 0
            object.fruta = ''
            object.verduras = ''
            object.legunbres = ''
            object.carne = ''
            object.bebidas =''
            return object
        })
    }

    const changeInput = (evt, clave) => {
        const { name, value } = evt.target;

        setFrut(prevState => {
            const object = { ...prevState }
            object[name] = value
            return object
        })

    }

    const editar = (datoEditar) => {
        setFrut(datoEditar)
         handleShow()
    }




    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                agregar datos
      </Button>

            <Modal show={abrir} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa los Datos</Modal.Title>
                </Modal.Header>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>

                        <Modal.Body>Fruta <input type="text"
                            value={frut.fruta}
                            name="fruta"
                            onChange={changeInput} />
                        </Modal.Body>
                        <Modal.Body>Verduras  <input type="text"
                            value={frut.verduras}
                            name="verduras"
                            onChange={changeInput} />
                        </Modal.Body>
                        <Modal.Body>legunbres  <input type="text"
                            value={frut.legunbres}
                            name="legunbres"
                            onChange={changeInput} />
                        </Modal.Body>
                        <Modal.Body>carne <input type="text"
                            value={frut.carne}
                            name="carne"
                            onChange={changeInput} />

                        </Modal.Body>

                        <Modal.Body>Bebidas <input type="text"
                            value={frut.bebidas}
                            name="bebidas"
                            onChange={changeInput} />

                        </Modal.Body>


                    </Card.Body>
                </Card>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={() => {
                        if (frut.id === 0) {
                            handleGuardar()
                        } else {
                            handleActualizar()
                        }
                    }}>
                        {frut.id === 0 ? 'Agregar' : 'Actualizar'}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <style>{`
          table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          } `}</style>


                <Table striped bordered hover>

                    <thead>
                        <tr>

                            <th> Id</th>
                            <th> FRUTA</th>
                            <th>VERDURAS</th>
                            <th>LEGUNBRES</th>
                            <th>CARNES</th>
                            <th>BEBIDAS</th>
                            <th>Accion</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            fruts.map((dat) => (
                                <tr key={dat.id}>
                                    <td>{dat.id}</td>
                                    <td>{dat.fruta}</td>
                                    <td>{dat.verduras}</td>
                                    <td>{dat.legunbres}</td>
                                    <td>{dat.carne}</td>
                                    <td>{dat.bebidas}</td>
                                    <td>
                                    <Button onClick={() => {
                                        editar(dat)
                                    }}>Editar</Button>
                                    <Button onClick={() => {
                                      handleEliminar(dat)
                                    }}>eliminar</Button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>



            </Row>


        </>
    )
}
export default InfActualizada;