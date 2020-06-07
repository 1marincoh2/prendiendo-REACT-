import React, { useState } from 'react'
import { Form, Button, Card, Row, Col, Table } from 'react-bootstrap'

const CapturasInfo = () => {

    const [datos, setDatos] = useState([]);

    const [dato, setDato] = useState({
        Nombres: '',
        primerApellido: '',
        segundoApellido: '',
    });


    const handleGuardar = (event) => {
        event.preventDefault()
        setDatos(prevState => {
            const inf = [...prevState]
            inf.push(dato)
            restartdato()
            return inf
        })

    }

    const restartdato = () => {
        setDato(prevState => {
            const object = { ...prevState }
            object.Nombres = ''
            object.primerApellido = ''
            object.segundoApellido = ''
            return object
        })
    }



    const changeInput = (evt, clave) => {
        const { name, value } = evt.target;

        setDato(prevState => {
            const object = { ...prevState }
            object[name] = value
            return object
        })

    }



    return (
        <>

            <Row >



          
                <Col xl={3} xs={6} style={{ border: '1px solid #D81B60',  }} >Nombres<input type="text" value={datos.Nombres} name="Nombres" onChange={changeInput} /> </Col>
                <Col xl={3} xs={6} style={{ border: '1px solid #D81B60',  }} >Primer Apellido<input type="text" value={datos.primerApellido} name="primerApellido" onChange={changeInput} /></Col>
                <Col xl={3} xs={6} style={{ border: '1px solid #D81B60',  }} >Segundo Apellido<input type="text" value={datos.segundoApellido} name="segundoApellido" onChange={changeInput} /></Col>
                <Col xl={3} xs={6} style={{ border: '1px solid #D81B60',  }} > <Button variant="primary" onClick={handleGuardar}>guardar informacion
                                </Button></Col>
               
               
          
                                           
                <Col xl={12} xs={6} >


                    <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>


                    <Table striped bordered hover>

                        <thead >
                            <tr>

                                <th> Nombres</th>
                                <th>primerApellido </th>
                                <th>segundoApellido  </th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                datos.map((dat) => (
                                    <tr key={dat.Nombres}>

                                        <td>{dat.Nombres}</td>
                                        <td>{dat.primerApellido}</td>
                                        <td>{dat.segundoApellido}</td>
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


