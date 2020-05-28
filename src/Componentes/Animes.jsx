import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


function Animes() {
    const [anime, setSerie] =useState({});
 


    const getSeries = () => {
		
		axios.get('https://api.jikan.moe/v3/search/anime?q=naruto').then((reponse) => {
			console.log(reponse.data)
            setSerie(reponse.data)
        
        })
        }	
    
	
       

    return (
        <div>
            <Button variant="primary" onClick={() => {
				getSeries()
			}}>Serie Animada</Button>

			

            

		</div>
	);
}

export default Animes;