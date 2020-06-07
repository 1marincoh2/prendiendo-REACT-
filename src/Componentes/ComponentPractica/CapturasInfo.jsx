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
            <Row>
           
                  
                  
                         
        
                <Col xs={12} sm={4} md={4} xl={4}></Col>
                <Col xs={12} sm={12} md={12} xl={12}>

                    <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>


                    <Table striped bordered hover>
                  
                        <thead > 
                            <tr onSubmit={handleGuardar}>

                                <th> Nombres<input type="text" value={datos.Nombres} name="Nombres" onChange={changeInput} /></th>
                                <th>primerApellido  <input type="text" value={datos.primerApellido} name="primerApellido" onChange={changeInput} /> </th>
                                <th>segundoApellido  <input type="text" value={datos.segundoApellido} name="segundoApellido" onChange={changeInput} /></th>
                                <Button variant="primary" onClick={handleGuardar}>
                        Guardar informacion
                                </Button>
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


