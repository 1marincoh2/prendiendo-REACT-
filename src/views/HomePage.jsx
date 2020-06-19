import React from 'react';
import Ejemplo from '../Componentes/ejemplo';
import Practica1 from '../Componentes/ComponentPractica/practica1';
import Mascota from '../Componentes/Mascota';
import PropsCards from '../Componentes/ComponentPractica/PropsCards';
import {useRun} from "../hooks/run/useRun";
import {Button} from "react-bootstrap";
import {useRunAllInOne} from "../hooks/runAllInOne/useRunAllInOneState";


function HomePage() {
    const {run, clickRun} = useRun();
    const {runAll, clickRunAll} = useRunAllInOne();
    return (

        <div style={{border: '1px solid #D81B60'}} className="container">
            HomePage
            <div style={{border: '1px solid #D81B60'}} className="col">
                state runAll {JSON.stringify(runAll)}
                <Button variant="primary" onClick={() => {
                    clickRunAll(true)
                }}>
                    change runAll  true
                </Button>
                <Button variant="primary" onClick={() => {
                    clickRunAll(false)
                }}>
                    change runAll false
                </Button>
            </div>


            <div style={{border: '1px solid #D81B60'}} className="col">
                state run {JSON.stringify(run)}
                <Button variant="primary" onClick={() => {
                    clickRun(true)
                }}>
                    change run  true
                </Button>
                <Button variant="primary" onClick={() => {
                    clickRun(false)
                }}>
                    change run false
                </Button>
            </div>
            <div className="row align-items-start">
                <div style={{border: '1px solid #D81B60'}} className="col">
                    <PropsCards
                        titulo="Nuevas Actividades"
                        subtitulo="Aprendiendo props"
                        texto="importanto componentes con props"
                        texto1="realizar props con arrays"
                        texto2="concluciones"
                    ></PropsCards>

                </div>
                <div style={{border: '1px solid #D81B60'}} className="col">
                    <Mascota name="boby" species="perro"></Mascota>
                </div>
                <div style={{border: '1px solid #D81B60'}} className="col">
                    <Ejemplo></Ejemplo>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <Practica1></Practica1>

                </div>

            </div>

        </div>


    );
}

export default HomePage;