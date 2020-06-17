import React, {useState} from 'react'
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap'


const FormComponent = () => {

 

    const [usuario, setValor] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(usuario)
    }


    const changeValor = (evt, clave) => {
        const {name, value} = evt.target;


        setValor(prevState => {
            const object = {...prevState}
            object[name] = value
            return object
        })
    }

    return (
        <>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        {JSON.stringify(usuario)}
                    <Card.Body>

                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              value={usuario.email}
                                              name="email"
                                              onChange={(e) => {
                                                  changeValor(e)
                                              }}
                                              placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              value={usuario.password}
                                              name="password"
                                              onChange={(e) => {
                                                  changeValor(e)
                                              }}
                                              placeholder="Password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>
                            <Button variant="primary"  onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                </Col>

                <Col></Col>
            </Row>



        </>
    )
}

export default FormComponent