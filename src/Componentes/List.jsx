import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

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
			<Button variant="primary" onClick={() => {
				getUser()
			}} >Obtener usuarios</Button>

		</div>
	)
}


export default List;
