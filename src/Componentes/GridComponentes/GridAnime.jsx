import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GridAnime() {
    const [serie, setSerie] =useState({results:[]});
    const [loader, setLoader] = useState(false);



    const getSeries = () => {
		setLoader(true)
		axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball').then((reponse) => {
			console.log(reponse.data)
            setSerie(reponse.data)
            setLoader(false)
		}).catch(() => {
			setLoader(false)
        
        })
        }	
    
	
       

    return (          
			 

    <Container fluid>
               
               <Button variant="primary" onClick={() => {
				getSeries()
			     }}>Serie Animada</Button>
 
                
            { 
				loader ? <Spinner animation="border" variant="success"/> : null
			}
           <Row >
                    {         
                        serie.results.map((personaje) => (
                        <Col  style={{backgroundColor: 'green'}}  xl={2} xs={6}>{personaje.title}
                        <Image width={"100%"} src={personaje.image_url}/></Col>
						
                    
                    
                        ))

                    }

                    


    </Row>

 </Container>


	);
}

export default GridAnime;