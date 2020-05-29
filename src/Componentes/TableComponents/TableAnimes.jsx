import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

function TableAnimes() {
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
        <div>
            <Button variant="primary" onClick={() => {
				getSeries()
			}}>Serie Animada</Button>
 
                
            { 
				loader ? <Spinner animation="border" variant="success"/> : null
			}             
				
                <style>{`
              table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              } `}</style>

				<Table striped bordered hover>
					<thead>
					<tr>
                        
						<th>request_cache_expiry</th>
						<th>last_page</th>
						
					</tr>
					</thead>
                    
					<tbody>
                    
    					<tr >
                        
						<td>{serie.request_cache_expiry}</td>
						<td>{serie.last_page}</td>
						
                    </tr>	
                
                    </tbody>
				</Table>
						
                
				<Table striped bordered hover variant="dark">

					<thead>
					<tr >
                        
						<th style={{width: '30rem ' }} >Titule</th>
						<th >Imagen</th>
						
					</tr>
					</thead>
                    
					<tbody>
                    {
                        serie.results.map((personaje) => (
					<tr style={{ width: '10rem ' }}>
                        <td>{personaje.title}</td>
                        <Image src={personaje.image_url}  /> 
						
                    </tr>	
                        ))
                    }
					</tbody>
				</Table>
							
                

		</div>
	);
}

export default TableAnimes;