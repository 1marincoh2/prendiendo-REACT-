import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function List() {
	const [user, setUser] = useState([]);

	const getUser = () => {
		axios.get('https://jsonplaceholder.typicode.com/users').then((reponse) => {
			console.log(reponse.data)
			setUser(reponse.data)
		})
	}

	return (
		<div>
            <Button variant="primary" onClick={() => {getUser()}} >Obtener usuarios</Button>
          	{
				user.map((u)=>(
                    <Card>        
                     <Card.Body>
                      <Card.Title>{u.name}</Card.Title>
                      <Card.Subtitle>{u.id}</Card.Subtitle>
                      <Card.Text>{u.username}</Card.Text>
                      <Card.Text>{u.email}</Card.Text>
                     </Card.Body>
                    </Card>    
                     	))
        	} 
			</div>
	)
}


export default List;
