import React, { useState } from 'react';
import { Form, Button, Table, Card, Container, Row, Col } from 'react-bootstrap'



const Nombre = () => {
    const [name, setName] = useState('');
    const [primernombre, setPrimernombre] = useState([]);
    const [segundonombre, setSegundonombre] = useState([]);


    const handleChange = (evt) => {
        setName(evt.target.value);

    };

    const handleSubmit = (evt) => {
        if (name) {
            setPrimernombre(primernombre.concat(name));

        }
        setName('');

        evt.preventDefault();


    };

    const handleSubmit1 = (evt) => {
        if (name) {
            setSegundonombre(segundonombre.concat(name));

        }
        setName('');

        evt.preventDefault();

    };

    return (
        <>
            <Container fluid >


                <Row >
             

                    <Col xl={12} xs={12} style={{ border: '1px solid #D81B60' }}  >lista
       <Row xl={6} xs={12}>
                            <Col xl={6} style={{ border: '1px solid #004D40', }}   >
      
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>nombre</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {primernombre.map(item => (
                                            <tr key={item}>
                                                <td> {item}</td>
                                            </tr>

                                        ))}

                                    </tbody>
                                   
                                </Table>
                                <Form onSubmit={handleSubmit}>
                                    <input type="text" value={name.primernombre} onChange={handleChange} />
                                    <Button type="submit">ingresa el nombre</Button>
                                </Form>
                                </Col>
                                <Col xl={6} style={{ border: '1px solid #004D40', }}   >   
                          
                                <Table >
                                    <thead>
                                        <tr>

                                            <th>segunnombre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {segundonombre.map(item => (
                                            <tr key={item}>
                                                <td> {item}</td>
                                            </tr>

                                        ))}
                                    </tbody>

                              
                                </Table>
                                <Form onSubmit={handleSubmit1}>
                                    <input type="text" value={name.segundonombre} onChange={handleChange} />
                                    <Button type="submit">segunod nombre</Button>
                                </Form>
                            
                                </Col>
                        </Row>
                    </Col>


                </Row>

            </Container>
        </>
    )



};

export default Nombre;