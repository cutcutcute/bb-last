import React, { useRef, useLayoutEffect } from "react";
import { LogoWidget } from "./logoWidget";
import { TitleImagesBlock } from "./titleImagesBlock";
import { Header } from "./header";
import { InfoBlock } from "./infoBlock";
import { Portfolio } from "./portfolio";
import { PriceBlock } from "./prices";
import { useParallax } from "react-scroll-parallax";
import gsap from "gsap";

const HomeStart = (): React.JSX.Element =>{

    
   
  
    return <div className="wrapper">
            <div className="content">
            <Header/>
            
            <LogoWidget/>

                <TitleImagesBlock/>
       
            
                <InfoBlock/>
              
            <Portfolio/>
            <PriceBlock/>

            </div>
            </div>
}

export default HomeStart;