import React from 'react';
import Lista from '../Componentes/List';
import Photo from '../Componentes/Photos';
import Anime from '../Componentes/Animes';
import Student from '../Componentes/Students';
import {useRun} from "../hooks/run/useRun";
import {useRunAllInOne} from "../hooks/runAllInOne/useRunAllInOneState";
import {Button} from "react-bootstrap";


function AxiosPage() {
    const {run, clickRun} = useRun();
    const {runAll, clickRunAll} = useRunAllInOne();
    return (
        <div>

            <div style={{border: '1px solid #D81B60'}} className="col">
                state runAll {JSON.stringify(runAll)}
                <Button variant="primary" onClick={() => {
                    clickRunAll(true)
                }}>
                    change runAll true
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
                    change run true
                </Button>
                <Button variant="primary" onClick={() => {
                    clickRun(false)
                }}>
                    change run false
                </Button>
            </div>

            <Lista></Lista>
            <br/>
            <Photo></Photo>
            <br/>
            <Anime></Anime>
            <br/>
            <Student></Student>

        </div>
    )
}

export default AxiosPage;



