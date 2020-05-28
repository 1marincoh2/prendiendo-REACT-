import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';


function List() {
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

			{
				user.map((u) => (
					<Card key={u.id}>
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
