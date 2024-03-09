import React from "react";

type CardProps = {
    text: string,
    price: string
}

export const Card = (props: CardProps):React.JSX.Element => {

    return <div className="price-block__cards-card d-flex flex-column">
            <div className="card__image-area"></div>
            <div className="card__title-area d-flex flex-column">
                <div className="card__title-area-text">{props.text}</div>
                <div className="card__title-area-buttons d-flex justify-content-start align-items-center">
                    <div className="card__title-area-price">{props.price}</div>
                    <div className="card__title-area-add d-flex justify-content-center align-items-center">+</div>
                </div>
            </div>
        </div>
}