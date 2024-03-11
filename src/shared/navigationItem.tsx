import React from "react";

interface NavigationProps{
    textValue?: string, 
    isLogo?:boolean,
    textSizeLevel?: number

}

export const NavigationItem = (props: NavigationProps): React.JSX.Element =>{
    
    const classText = props.textSizeLevel===1?"low-size-level":"medium-size-level";
    
    return <nav className="navigation__item text-center">
         {props.isLogo===false||props.isLogo===undefined&&<p className={`${classText} navigation__item-text`}>{props.textValue}</p>}
         {props.isLogo===true&&<div className="navigation__item-image"></div>}
    </nav>

   
}
