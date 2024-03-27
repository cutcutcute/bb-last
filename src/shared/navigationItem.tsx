import React from "react";
import {  useNavigate } from "react-router-dom";

interface NavigationProps{
    textValue?: string, 
    isLogo?:boolean,
    textSizeLevel?: number,
    navigatePath?: string,
    handleScroll?: ()=>void,
    color?: string

}

export const NavigationItem = (props: NavigationProps): React.JSX.Element =>{
    
    const classText = props.textSizeLevel===1?"low-size-level":"medium-size-level";
    
    const navigate = useNavigate()


    const navigation = async(): Promise<boolean|null> =>{
        await navigate(props.navigatePath??"/");
        return true;
    }



    const handleNavigate = async ()=> {
        /**
             * Выполнится в том случае если передан 
             * параметр handleScroll как колбек для скроллинга 
             * до конкретного элемента
             */
        
        navigation()
            .then(()=>{props.handleScroll?props.handleScroll():console.log();}) 
            .catch(()=>{alert("error")})   // Нужно будет убрать алерт!!!    

       
    }


    return <nav onClick={handleNavigate} className="navigation__item text-center">
         {props.isLogo===false||props.isLogo===undefined&&<p style={{color:props.color}} className={`${classText} navigation__item-text`}>{props.textValue}</p>}
         {props.isLogo===true&&<div className={props.color==="#000"?("navigation__item-image-dark"):("navigation__item-image")}></div>}
    </nav>

   
}
