import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



function Studenst() {
    const [alumno, setAlumno] =useState([]);


        const getAlumno = () => {
		
		axios.get('https://api-dev.muunyal.telweb.app/school/students').then((reponse) => {
			console.log(reponse.data)
            setAlumno(reponse.data)
        
        })
        }	
    
	
       

    return (
        <div>
            <Button variant="primary" onClick={() => {
				getAlumno()
			}}>INFO ALUMNO</Button>
 
 {
				alumno.map((estudiante) => (
					<Card style={{ width: '18rem' }} key={estudiante.id} >                     
                     <Card.Img variant="top" src={estudiante.profilePicture}/> 
					 
						<Card.Body>
							<Card.Title>{estudiante.id}</Card.Title>
							<Card.Subtitle>{estudiante.matricula}</Card.Subtitle>
							<Card.Text>{estudiante.name}</Card.Text>
							<Card.Text>{estudiante.lastNameFather}</Card.Text>
                            <Card.Text>{estudiante.lastNameMother}</Card.Text>
						</Card.Body>
											
	           		</Card>
				))
			    }

         </div>
	);
}

export default Studenst;