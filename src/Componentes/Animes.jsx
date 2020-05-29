import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function Animes() {
    const [serie, setSerie] =useState({results:[]});
 


    const getSeries = () => {
		
		axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball').then((reponse) => {
			console.log(reponse.data)
            setSerie(reponse.data)
        
        })
        }	
    
	
       

    return (
        <div>
            <Button variant="primary" onClick={() => {
				getSeries()
			}}>Serie Animada</Button>
 
                        	    
					<Card >
						<Card.Body>
							<Card.Title>{serie.request_has}</Card.Title>
							<Card.Subtitle>{serie.request_cached}</Card.Subtitle>
							<Card.Text>{serie.request_cache_expiry}</Card.Text>
							<Card.Text>{serie.last_page}</Card.Text>
						</Card.Body>
					</Card>
				
			
                
                {
				serie.results.map((personaje) => (
					<Card style={{ width: '18rem' }} >                     
                     <Card.Img variant="top" src={personaje.image_url}/> 
					 <Card.Title>{personaje.title}</Card.Title>
						
	           		</Card>
				))
			    }

		</div>
	);
}

export default Animes;