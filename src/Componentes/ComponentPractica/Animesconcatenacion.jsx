import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const Animesconcatenacion = () => {
   const [anime, setAnime] = useState('');
  const [animes1, setAnimes1] = useState([]);
  const [serie, setSerie] =useState({results:[]});
 
  const getSeries = () => {
		
    axios.get('https://api.jikan.moe/v3/search/anime?q='+anime).then((reponse) => {
        console.log(reponse.data)
        setSerie(reponse.data)
    
    })
    }	



  const handleChange = (evt) => {
    setAnime(evt.target.value);
    
  };
 
  const handlebuscar = (evt) => {
    if (anime) {
      setAnimes1(animes1.concat(anime));
      
    }
 
    setAnime('');
 
    evt.preventDefault();
   

  };
 
  return (
    <>
 

      <form onSubmit={handlebuscar}>
           <input type="text" value={anime} onChange={handleChange} />
<Button  variant="primary" onClick={() => {
    getSeries() 
}}>buscar</Button>
</form>
                    
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
</>

  );


};
     
export default Animesconcatenacion;