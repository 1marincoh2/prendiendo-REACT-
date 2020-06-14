import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Image, Container, Row, Col} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


const Animesconcatenacion = () => {
    const [anime, setAnime] = useState('');
    const [animes1, setAnimes1] = useState([]);
    const [serie, setSerie] = useState({results: []});

    const textSearch = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('a cambiado la informacion')
    },[textSearch])
    const getSeries = () => {

        axios.get('https://api.jikan.moe/v3/search/anime?q=' + anime).then((reponse) => {
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

                <h1>{textSearch.text}</h1>

                <form onSubmit={handlebuscar}>
                    <input type="text" value={anime} onChange={handleChange}/>
                    <Button variant="primary" onClick={() => {
                        getSeries()
                    }}>buscar</Button>
                </form>

                <Row>
                    {
                        serie.results.map((personaje) => (
                            <Col style={{backgroundColor: '#AB47BC'}} xl={2} xs={6}>{personaje.title}
                                <Image style={{border: '1px solid #D81B60'}} width={"100%"} src={personaje.image_url}/></Col>


                        ))

                    }


                </Row>

            </Container>

        </>

    );


};

export default Animesconcatenacion;