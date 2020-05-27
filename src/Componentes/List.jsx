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
          	{
				user.map((u)=> 
                <Button variant="primary" onClick={() => {User()}} >Obtener usuarios</Button>
                    <Card>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                                      
                    {u.useState}
                                        
                  </Card.Body>
                </Card>				
             	)
        	}
			
		</div>
	)
}


export default List;
