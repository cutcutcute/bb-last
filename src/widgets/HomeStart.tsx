import React, { useRef, useLayoutEffect } from "react";
import { LogoWidget } from "./logoWidget";
import { TitleImagesBlock } from "./carousel/titleImagesBlock";
import { Header } from "./bars/header";
import { InfoBlock } from "./info/infoBlock";
import { Portfolio } from "./portfolio";
import { PriceBlock } from "./prices";
import { Parallax, useParallax } from "react-scroll-parallax";
import { CallbackForm } from "./callbackForm";
import { Footer } from "./bars/footer";
import { MainLoading } from "./loading/mainLoading";
import { MobileCarousel } from "./carousel/MobileCarousel";

const HomeStart = (): React.JSX.Element =>{

    
   
  
    return <>
    

    <Header/>

    <TitleImagesBlock/>
    <MobileCarousel/>
    <InfoBlock/>
    <Portfolio/>
    <PriceBlock/>
    <CallbackForm/>
    <Footer/>

            </> 
}

export default HomeStart;

/**
 * <Header/>

    <TitleImagesBlock/>
    <MobileCarousel/>
    <InfoBlock/>
    <Portfolio/>
    <PriceBlock/>
    <CallbackForm/>
    <Footer/>
 */