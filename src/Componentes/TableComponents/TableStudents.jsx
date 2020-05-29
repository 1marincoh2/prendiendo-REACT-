import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';



function TableStudenst() {
    const [alumno, setAlumno] =useState([]);
    const [loader, setLoader] = useState(false);

      
        const getAlumno = () => {
            setLoader(true)		
		axios.get('https://api-dev.muunyal.telweb.app/school/students').then((reponse) => {
			console.log(reponse.data)
            setAlumno(reponse.data)
            setLoader(false)
		}).catch(() => {
			setLoader(false)
        
        })
        }	
    
	
       

    return (
        <div>
            <Button variant="primary" onClick={() => {
				getAlumno()
			}}>INFO ALUMNO</Button>
 
            { 
				loader ? <Spinner animation="border" variant="success"/> : null
			}             
						
             <Table striped bordered hover variant="dark" responsive>

					<thead>
					<tr >
                        
						<th>#id</th>
						<th >Matricula</th>
						<th>Nombre</th>
						<th>Primer Apellido</th>
						<th>Segundo Apellido</th>
						<th>Foto</th>

					</tr>
					</thead>
                    
					<tbody>
                    {
                        alumno.map((estudiante) => (
					<tr style={{ width: '10rem ' }}>
                        <td>{estudiante.id}</td>
                        <td>{estudiante.matricula}</td>
                        <td>{estudiante.name}</td>
                        <td>{estudiante.lastNameFather}</td>
                        <td>{estudiante.lastNameMother}</td>
                        <Image src={estudiante.profilePicture}   style={{ width: '5rem ' }}/> 
						
                    </tr>	
                        ))
                    }
					</tbody>
				</Table>
         </div>
	);
}

export default TableStudenst;