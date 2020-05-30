import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GridStudenst() {
	const [alumno, setAlumno] = useState([]);
	const [loader, setLoader] = useState(false);


	const getAlumno = () => {
		setLoader(true)
		axios.get('https://api-dev.muunyal.telweb.app/school/students').then((reponse) => {
			console.log(reponse.data)
			setAlumno(reponse.data)
			setLoader(false)
		}).catch(() => {
			setLoader(false)

		})
	}


	return (


		<Container fluid>

			<Button variant="primary" onClick={() => {
				getAlumno()
			}}>INFO ALUMNO</Button>

			{
				loader ? <Spinner animation="border" variant="success"/> : null
			}
			<Row>
				{
					alumno.map((estudiante) => (
						<Col style={{border: '1px solid #D81B60', backgroundColor: '#FFD600'}} xl={4} xs={6}>{estudiante.matricula}
							<Image width={'100%'} src={estudiante.profilePicture}/>
							<Row>
								<Col style={{border: '1px solid #4A148C', backgroundColor: '#388E3C'}} xl={6} xs={3}>{estudiante.name}</Col>
							</Row>
							<Row>
								<Col style={{border: '1px solid #D81B60', backgroundColor: '#0D47A1'}} xl={6} xs={3}>{estudiante.lastNameFather}</Col>
							</Row>
							<Row>
								<Col style={{border: '1px solid #D81B60', backgroundColor: '#7B1FA2'}} xl={6} xs={3}>{estudiante.lastNameMother}</Col>
							</Row>
						</Col>


					))
				}
			</Row>

		</Container>

	);
}

export default GridStudenst;
