import React, {useState} from 'react'
import {Form, Button, Card, Row, Col, Table} from 'react-bootstrap'
import { useSelector } from "react-redux";


const CapturasInfo = () => {

    const counter = useSelector(state => state);

    const [datos, setDatos] = useState([]);

    const [dato, setDato] = useState({
        id: 0,
        Nombres: '',
        primerApellido: '',
        segundoApellido: '',
    });


    const handleGuardar = (event) => {
        setDatos(prevState => {
            const inf = [...prevState]
            const newdata = {...dato}
            newdata.id = inf.length + 1
            inf.push(newdata)
            restartdato()
            return inf
        })

    }

    const handleActualizar = () => {
        setDatos(prevState => {
            const newdatos = [...prevState]
            const index = newdatos.findIndex((newdato) => newdato.id === dato.id)
            if (index > -1) {
                newdatos.splice(index, 1, dato)
           }
            restartdato()
            return newdatos
        })
    }

    const restartdato = () => {
        setDato(prevState => {
            const object = {...prevState}
            object.id = 0
            object.Nombres = ''
            object.primerApellido = ''
            object.segundoApellido = ''
            return object
        })
    }

    const changeInput = (evt, clave) => {
        const {name, value} = evt.target;

        setDato(prevState => {
            const object = {...prevState}
            object[name] = value
            return object
        })

    }

    const editar = (datoEditar) => {
        setDato(datoEditar)
    }


    return (
        <>
            {counter.vehicle}
            <Row>
                <Col xl={4} xs={4}></Col>
                <Col xl={4} xs={4}>
                    <Card style={{width: '18rem'}}>
                        {JSON.stringify(dato)}
                        <Card.Body>

                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nombres</Form.Label>
                                    <input type="text"
                                           value={dato.Nombres}
                                           name="Nombres"
                                           onChange={changeInput}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Primer Apellido</Form.Label>
                                    <input type="text"
                                           value={dato.primerApellido}
                                           name="primerApellido"
                                           onChange={changeInput}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Segundo Apellido</Form.Label>
                                    <input type="text"
                                           value={dato.segundoApellido}
                                           name="segundoApellido"
                                           onChange={changeInput}/>
                                </Form.Group>
                                Segundo Apellido
                                <Button variant="primary" onClick={() => {
                                    if (dato.id === 0) {
                                        handleGuardar()
                                    } else {
                                        handleActualizar()
                                    }
                                }}>
                                    {dato.id === 0 ? 'Agregar' : 'Actualizar'}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} xs={4}></Col>
                <Col xl={12} xs={6}>


                    <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>


                    <Table striped bordered hover>

                        <thead>
                        <tr>

                            <th> Id</th>
                            <th> Nombres</th>
                            <th>primerApellido</th>
                            <th>segundoApellido</th>
                            <th>Accion</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            datos.map((dat) => (
                                <tr key={dat.id}>
                                    <td>{dat.id}</td>
                                    <td>{dat.Nombres}</td>
                                    <td>{dat.primerApellido}</td>
                                    <td>{dat.segundoApellido}</td>
                                    <td>
                                        <Button onClick={() => {
                                            editar(dat)
                                        }}>Editar</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Col>


            </Row>


        </>
    )
}

export default CapturasInfo;


