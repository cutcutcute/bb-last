import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface NavigationProps{
    textValue?: string, 
    isLogo?:boolean,
    textSizeLevel?: number,
    navigatePath?: string,
    color?: string

}

export const NavigationItem = (props: NavigationProps): React.JSX.Element =>{
    
    const classText = props.textSizeLevel===1?"low-size-level":"medium-size-level";
    
    const navigate = useNavigate()

    const handleNavigate = ()=> {props.navigatePath?navigate(props.navigatePath):console.log(props.navigatePath)}

    return <nav onClick={handleNavigate} className="navigation__item text-center">
         {props.isLogo===false||props.isLogo===undefined&&<p style={{color:props.color}} className={`${classText} navigation__item-text`}>{props.textValue}</p>}
         {props.isLogo===true&&<div className={props.color==="#000"?("navigation__item-image-dark"):("navigation__item-image")}></div>}
    </nav>

   
}
