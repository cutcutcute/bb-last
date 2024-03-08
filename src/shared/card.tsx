import React from "react";

type CardProps = {
    text: string
}

export const Card = (props: CardProps):React.JSX.Element => {

    return <div className="price-block__cards-card d-flex flex-column">
            <div className="card__image-area"></div>
            <div className="card__title-area d-flex flex-column">
                <div className="card__title-area-text">{props.text}</div>
                <div className="card__title-area-buttons">s</div>
            </div>
        </div>
}