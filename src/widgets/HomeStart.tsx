import React, {useEffect, useState } from "react";
import { TitleImagesBlock } from "./carousel/titleImagesBlock";
import { Header } from "./bars/header";
import { InfoBlock } from "./info/infoBlock";
import { Portfolio } from "./portfolio";
import { PriceBlock } from "./prices";
import { CallbackForm } from "./callbackForm";
import { Footer } from "./bars/footer";
import { MobileCarousel } from "./carousel/MobileCarousel";
import { PresentationComponent } from "../shared/PresentaTion";
import { AnimatePresence } from "framer-motion";

const HomeStart = (): React.JSX.Element =>{

    
   const [isPresent, setIsPresent] = useState<boolean>(true);

   useEffect(()=>{
      const timer = setTimeout(()=>{setIsPresent(false)}, 3000)
      return ()=>{clearTimeout(timer)}
   }, [])
  
    return <>

    <AnimatePresence>
    {isPresent && (
      <PresentationComponent/>
    )}
    </AnimatePresence>

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