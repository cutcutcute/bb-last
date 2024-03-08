import React from "react";
import { LogoWidget } from "./logoWidget";
import { TitleImagesBlock } from "./titleImagesBlock";
import { Header } from "./header";
import { InfoBlock } from "./infoBlock";
import { Portfolio } from "./portfolio";
import { PriceBlock } from "./prices";
import { Parallax } from "react-scroll-parallax";


const HomeStart = (): React.JSX.Element =>{
    return <>
            
            <Header/>
            
            <LogoWidget/>

                <TitleImagesBlock/>
       
            
                <InfoBlock/>
              
            <Portfolio/>
            <PriceBlock/>

            </>
}

export default HomeStart;