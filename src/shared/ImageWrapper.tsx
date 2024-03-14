import React from "react";


type ImageWrapperProps = {
    source: string,
    alt: string,
    ratioSize?: string,
    customRatio?: string
}

export const ImageWrapper  = (props: ImageWrapperProps): React.JSX.Element => {

    const ratioSize = props.ratioSize?props.ratioSize:"1x1";



    return <div style={{aspectRatio:props.customRatio}} className={props.customRatio?"ratio":`ratio ratio-${ratioSize}`}>
        <img src={props.source} alt={props.alt}/>
    </div>
}