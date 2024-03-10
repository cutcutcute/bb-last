import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

type CardProps = {
    text: string,
    price: string
}

export const PriceCard = (props: CardProps):React.JSX.Element => {
    
    return <Card  className="card-element" style={{minWidth:226,border:"none",   borderRadius:0, background: "linear-gradient(180deg, rgba(203,196,186,1) 50%, rgba(203,196,186,.8) 80%)"}}>

        <Card.Body>
            <Card.Title className="d-flex align-items-end justify-content-center" style={{height:75, fontWeight:600}}><p>{props.text}</p></Card.Title>

            <button className="button-price">{props.price}</button>
            <button className="button-info">+</button>
        </Card.Body>
        </Card>
}