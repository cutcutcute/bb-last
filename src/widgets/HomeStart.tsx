import React, { useRef, useLayoutEffect } from "react";
import { LogoWidget } from "./logoWidget";
import { TitleImagesBlock } from "./titleImagesBlock";
import { Header } from "./header";
import { InfoBlock } from "./infoBlock";
import { Portfolio } from "./portfolio";
import { PriceBlock } from "./prices";
import { Parallax, useParallax } from "react-scroll-parallax";
import gsap from "gsap";
import { CallbackForm } from "./callbackForm";
import { Footer } from "./footer";

const HomeStart = (): React.JSX.Element =>{

    
   
  
    return <>
    <Parallax speed={-2}>
    <Header/>
    <LogoWidget/>
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