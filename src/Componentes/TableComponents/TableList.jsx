import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


function TableList() {
	const [user, setUser] = useState([]);
	

	const getUser = () => {
		
		axios.get('https://jsonplaceholder.typicode.com/users').then((reponse) => {
			console.log(reponse.data)
			setUser(reponse.data)
			
		})
	}

	return (
		<div>
			<Button variant="primary" onClick={() => {
				getUser()
			}}>Obtener usuarios</Button>

	              <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>

			{
				user.map((u) => (
				<table >
					<thead>
					<tr>
                        <th>Id</th>
						<th>Firstname</th>
						<th>Username</th>
						<th>Email</th>
					</tr>
					</thead>
					<tbody>
					<tr>
                        <td>{u.Id}</td>
						<td>{u.name}</td>
						<td>{u.username}</td>
						<td>{u.email}</td>
					</tr>	
					</tbody>
				</table>
								))
			}
		</div>
	)
}


export default TableList;