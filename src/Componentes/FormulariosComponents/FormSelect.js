import React, {useState} from 'react'
import {Form, Button, Card, Row, Col, Table} from 'react-bootstrap'


const FormSelect = () => {
    const [personas, setPersonas] = useState([]);

    const [persona, setPersona] = useState({
        Select: '',
        Radio: '',
        rango: '',
    });


    const handleSubmit = (event) => {
        event.preventDefault()
        setPersonas(prevState => {
            const pers = [...prevState]
            pers.push(persona)
            restartPersona()
            return pers
        })

    }

    const restartPersona = () => {
        setPersona(prevState => {
            const object = {...prevState}
            object.Radio = ''
            object.Select = ''
            object.rango = 0
            return object
        })
    }

    const changeInput = (evt, clave) => {
        const {name, value} = evt.target;

        setPersona(prevState => {
            const object = {...prevState}
            object[name] = value
            return object
        })

    }


    return (

        <>

            <Row>
                <Col xs={12} sm={4} md={4} xl={4}></Col>
                <Col xs={12} sm={4} md={4} xl={4}>
                    <Card style={{width: '18rem'}}>
                        {JSON.stringify(persona)}
                        <Card.Body>

                            <Form>
                                <label>
                                    seleciona tu profesion:
                                    <select value={persona.Select} name="Select" onChange={changeInput}>
                                        <option value="doctor">doctor</option>
                                        <option value="carpintero">carpintero</option>
                                        <option value="maestro">maestro</option>
                                        <option value="ingeñero">ingeñero</option>
                                        <option value="alumno">alumno</option>
                                    </select>
                                </label>
                                <form>
                                    <div>
                                        <input type="radio"
                                               value="Male"
                                               checked={persona.Radio === "Male"}
                                               onChange={changeInput} name="Radio"/> Male

                                        <input type="radio"
                                               value="Famale"
                                               checked={persona.Radio === "Female"}
                                               onChange={changeInput} name="Radio"/> Female

                                        <input type="radio"
                                               value="Other"
                                               checked={persona.Radio === "Other"}
                                               onChange={changeInput} name="Radio"/> Other
                                    </div>
                                </form>
                                <form>
                                    <div>

                                        <input type="range"
                                               value={persona.rango}
                                               onChange={changeInput} name="rango"/> edad
                                    </div>
                                </form>
                                <Button variant="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={4} md={4} xl={4}></Col>
                <Col xs={12} sm={12} md={12} xl={12}>

                    <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>


                    <Table striped bordered hover>
                        <thead>
                        <tr>

                            <th>Select</th>
                            <th>Radio</th>
                            <th>rango</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            personas.map((u) => (
                                <tr key={u.Select}>

                                    <td>{u.Select}</td>
                                    <td>{u.Radio}</td>
                                    <td>{u.rango}</td>
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

export default FormSelect