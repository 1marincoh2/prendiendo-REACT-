import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import {useRun} from "../hooks/run/useRun";
import {useRunAllInOne} from "../hooks/runAllInOne/useRunAllInOneState";

function AbautPage() {
    const {run, clickRun} = useRun();
    const {runAll, clickRunAll} = useRunAllInOne();
    return (
		<div className="AbautPage">
				AbautPage
        <Button variant="primary">Primary</Button>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="/">Another Link</Card.Link>
  </Card.Body>
</Card>

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
		</div>
	);
}

export default AbautPage;