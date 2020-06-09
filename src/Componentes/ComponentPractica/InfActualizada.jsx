import React, {useState} from 'react'
import {Form, Button, Card, Row, Col, Table} from 'react-bootstrap'

const CapturasInfo = () => {

    const [fruts, setFruts] = useState([
        {  id: 1,
            fruta: 'platano',
            verduras: 'cebollas',
            legunbres: 'frijol',
            carne: 'cerdo',
            bebidas: 'refresco'},
        { id: 2,
            fruta: 'platano',
            verduras: 'cebollas',
            legunbres: 'frijol',
            carne: 'cerdo',
            bebidas: 'refresco'},
        { id: 3,
            fruta: 'platano',
            verduras: 'cebollas',
            legunbres: 'frijol',
            carne: 'cerdo',
            bebidas: 'refresco'},
        
      ]);

    const [frut, setFrut] = useState({
    id: 0,
    fruta: 'platano',
	verduras: 'cebollas',
	legunbres: 'frijol',
	carne: 'cerdo',
	bebidas: 'refresco'
   
});

const handleGuardar = (event) => {
    setFruts(prevState => {
        const inf = [...prevState]
        const newdata = {...frut}
        newdata.id = inf.length + 1
        inf.push(newdata)
        restartdato()
        return inf
    })

}

const handleActualizar = () => {
    setFruts(prevState => {
        const newdatos = [...prevState]
        const index = newdatos.findIndex((newdato) => newdato.id === frut.id )
        if (index > -1) {
            newdatos.splice(index, 1, frut)
       }
        restartdato()
        return newdatos
    })
}

const restartdato = () => {
    setFrut(prevState => {
        const object = {...prevState}
        object.id = 0
        object.fruta ='platano'
        object.verduras ='cebollas' 
        object.legunbres ='frijol'
        object.carne ='cerdo'
        object.bebidas ='refresco' 
        return object
    })
}

const changeInput = (evt, clave) => {
    const {name, value} = evt.target;

    setFrut(prevState => {
        const object = {...prevState}
        object[name] = value
        return object
    })

}

const editar = (datoEditar) => {
    setFrut(datoEditar)
}


return (
    <>

        <Row>
            <Col xl={4} xs={4}></Col>
            <Col xl={4} xs={4}>
                <Card style={{width: '18rem'}}>
                   
                    <Card.Body>

                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Frutas</Form.Label>
                                <input type="text"
                                       value={frut.fruta}
                                       name="fruta"
                                       onChange={changeInput}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Verduras</Form.Label>
                                <input type="text"
                                       value={frut.verduras}
                                       name="verduras"
                                       onChange={changeInput}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>legumbres</Form.Label>
                                <input type="text"
                                       value={frut.legunbres}
                                       name="legunbres"
                                       onChange={changeInput}/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Carnes</Form.Label>
                                <input type="text"
                                       value={frut.carne}
                                       name="carne"
                                       onChange={changeInput}/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Bebidas</Form.Label>
                                <input type="text"
                                       value={frut.bebidas}
                                       name="bebidas"
                                       onChange={changeInput}/>
                            </Form.Group>
                            
                            <Button variant="primary" onClick={() => {
                                if (frut.id === 0) {
                                    handleGuardar()
                                } else {
                                    handleActualizar()
                                }
                            }}>
                                {frut.id === 0 ? 'Agregar' : 'Actualizar'}
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
