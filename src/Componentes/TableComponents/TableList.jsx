import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


function TableList() {
	const [user, setUser] = useState([]);
	const [loader, setLoader] = useState(false);

	const getUser = () => {
		setLoader(true)
		axios.get('https://jsonplaceholder.typicode.com/users').then((reponse) => {
			console.log(reponse.data)
			setUser(reponse.data)
			setLoader(false)
		}).catch(() => {
			setLoader(false)
		})
		
	}

	return (
		<div>
			<Button variant="primary" onClick={() => {
				getUser()
			}}>Obtener usuarios</Button>
              
            { 
				loader ? <Spinner animation="border" variant="success"/> : null
			}
	              <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>

	
				
				<Table striped bordered hover>
					<thead>
					<tr>
                        
						<th>Firstname</th>
						<th>Username</th>
						<th>Email</th>
					</tr>
					</thead>
                    
					<tbody>
                    {
                        user.map((u) => (
					<tr key={u.id}>
                        
						<td>{u.name}</td>
						<td>{u.username}</td>
						<td>{u.email}</td>
                    </tr>	
                        ))
                    }
					</tbody>
				</Table>
								
			
		</div>
	)
}


export default TableList;