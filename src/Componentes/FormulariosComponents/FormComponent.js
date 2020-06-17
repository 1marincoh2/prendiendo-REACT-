import React, {useState} from 'react'
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap'

import { useFormik } from "formik";



const FormComponent = () => {

    const validate = value => {
        const errors = {};
        if (!value.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
            errors.email = 'Invalid email address';
          }
        
      
        if (!value.password) {
          errors.paasword = 'Required';
        } else if (value.password.length > 20) {
          errors.paasword = 'Must be 20 characters or less';
        }
        return errors;
    }
    const [usuario, setValor] = useState({
        email: '',
        password: '',
    });

    

    const handleSubmit = (event) => {
        event.preventDefault();
        validate()
        console.log(usuario)
        alert(JSON.stringify( null, 2));
    }


    const changeValor = (evt, clave) => {
        const {name, value} = evt.target;
        
        
        setValor(prevState => {
            const object = {...prevState}
            object[name] =value
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