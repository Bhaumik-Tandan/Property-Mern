import React from 'react'
import {Card} from "react-bootstrap";
import Delete from "./delete/delete";

function Individual(prop) {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{prop.data["name"]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{prop.data["address"]}</Card.Subtitle>
                    <Card.Text>
                        <div><b>Cost: </b>${prop.data["cost"]}</div>
                        <div><b>Unique ID: </b>{prop.data["productId"]}</div>
                    </Card.Text>
                    <Card.Text>
                        <Delete id={prop.data["productId"]}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Individual;
