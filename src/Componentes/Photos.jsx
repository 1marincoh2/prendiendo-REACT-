import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';


function Photos() {
    const [photo, setPhoto] = useState([]);
	const [loader, setLoader] = useState(false);

    const getPhoto = () => {
		setLoader(true)
		axios.get('https://jsonplaceholder.typicode.com/photos').then((reponse) => {
			console.log(reponse.data)
			setPhoto(reponse.data)
			setLoader(false)
		}).catch(() => {
			setLoader(false)
        })
	}
       

    return (
        <div>
            <Button variant="primary" onClick={() => {
				getPhoto()
			}}>Imagen del Usario</Button>

			{
				loader ? <Spinner animation="border" variant="success"/> : null
			}

            {
				photo.map((imag) => (
					<Card >                     
                     <Card.Img variant="top" src="holder.js/100px180" /> 
					 <Card.Title>{imag.albumId}</Card.Title>
						<Card.Subtitle>{imag.title}</Card.Subtitle>
						<Card.Text>{imag.url}</Card.Text>
						<Card.Text>{imag.thumbnailUrll}</Card.Text>
	           		</Card>
				))
			}

		</div>
	);
}

export default Photos;