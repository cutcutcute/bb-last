import React, { useRef, useLayoutEffect } from "react";
import { LogoWidget } from "./logoWidget";
import { TitleImagesBlock } from "./titleImagesBlock";
import { Header } from "./header";
import { InfoBlock } from "./infoBlock";
import { Portfolio } from "./portfolio";
import { PriceBlock } from "./prices";
import { Parallax, useParallax } from "react-scroll-parallax";
import { CallbackForm } from "./callbackForm";
import { Footer } from "./footer";
import { MainLoading } from "./loading/mainLoading";

const HomeStart = (): React.JSX.Element =>{

    
   
  
    return <>
    <Parallax speed={-2}>
    <Header/>
    <TitleImagesBlock/>
    <InfoBlock/>
    <Portfolio/>
    <PriceBlock/>
    <CallbackForm/>
    <Footer/>
    </Parallax>
            </> 
}

export default HomeStart;