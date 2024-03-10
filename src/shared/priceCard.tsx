import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

type CardProps = {
    text: string,
    price: string
}

export const PriceCard = (props: CardProps):React.JSX.Element => {
    
    return <Card className="bg-light" style={{minWidth:226, borderRadius:15}}>

        <Card.Body>
            <Card.Title className="d-flex align-items-end" style={{height:200}}>{props.text}</Card.Title>

            <button className="button-price">{props.price}</button>
            <button className="button-info">+</button>
        </Card.Body>
        </Card>
}