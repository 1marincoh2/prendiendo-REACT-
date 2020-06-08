import React, { useState } from 'react';
import axios from 'axios';
import { Button, Image, Container,Row,Col } from 'react-bootstrap';



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
 

       
     <Container fluid>
               
     <form onSubmit={handlebuscar}>
           <input type="text" value={anime} onChange={handleChange} />
<Button  variant="primary" onClick={() => {
    getSeries() 
}}>buscar</Button>
</form>  
            
           <Row >
                    {         
                        serie.results.map((personaje) => (
                        <Col  style={{backgroundColor: '#AB47BC'}}  xl={2} xs={6}>{personaje.title}
                        <Image  style={{border: '1px solid #D81B60'} } width={"100%"}src={personaje.image_url}/></Col>
						
                    
                    
                        ))

                    }

                    


    </Row>

 </Container>

</>

  );


};
     
export default Animesconcatenacion;