import React, {useState} from 'react'
import {Form, Button, Card,Row, Col} from 'react-bootstrap'


const FormSelect = () => {

const[persona, setPersona ]= useState({
 
    Select:'doctor',
    Radio:'Male',
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
                    <select value={persona.Select } name="Select" onChange={changeInput}>
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
                           value="Male"
                           checked={persona.Radio === "Male"}
						   onChange={changeInput} name="Radio" /> Male

					<input type="radio"
                           value="Female"                          
						   checked={persona.Radio === "Female"}
						   onChange={changeInput} name="Radio" /> Female

					<input type="radio"
                           value="Other"
                           checked={persona.Radio === "Other"}
						   onChange={changeInput} name="Radio" /> Other
				</div>
			</form>
            <form>
				<div >
					
					<input type="range"
						   value={persona.rango}
						   onChange={changeInput} name="rango" /> edad
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