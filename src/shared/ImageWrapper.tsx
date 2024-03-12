import React from "react";


type ImageWrapperProps = {
    source: string,
    alt: string
}

export const ImageWrapper  = (props: ImageWrapperProps): React.JSX.Element => {
    return <div className="ratio ratio-1x1">
        <img src={props.source} alt={props.alt}/>
    </div>
}