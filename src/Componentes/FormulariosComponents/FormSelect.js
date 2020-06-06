import React, {useState} from 'react'
import {Form, Button, Card,Row, Col} from 'react-bootstrap'


const FormSelect = () => {

const[persona, setPersona ]= useState({
 
    Select:'',
    Radio:'',
    rango:'',
});



const handleSubmit = (event) => {
    event.preventDefault()
    
}

const changeInput = (evt, clave) => {
    const {name, value} = evt.target;

    setPersona(prevState => {
        const object = {...prevState}
        object[name] = value
        return object
    })
        
}


return(

    <>

<Row>
                <Col></Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        {JSON.stringify(persona)}
                    <Card.Body>

                        <Form>
                        <label>
                    seleciona tu profesion:
                    <select value={persona.Select} onChange={changeInput}>
                        <option value="doctor">doctor</option>
                        <option value="carpintero">carpintero</option>
                        <option value="maestro">maestro</option>
                        <option value="ingeñero">ingeñero</option>
                        <option value="alumno">alumno</option>
                    </select>
                </label>
                <form>
				<div >
					<input type="radio"
						   value="male"
						   checked={persona === "Male"}
						   onChange={changeInput} name="gender" /> Male

					<input type="radio"
						   value="Famale"
						   checked={persona === "Female"}
						   onChange={changeInput} name="gender" /> Female

					<input type="radio"
						   value="Other"
						   checked={persona === "Other"}
						   onChange={changeInput} name="gender" /> Other
				</div>
			</form>
            <form>
				<div >
					
					<input type="range"
						   value={persona.rango}
						   checked={persona === "Other"}
						   onChange={changeInput} name="gender" /> edad
				</div>
			</form>
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

export default FormSelect