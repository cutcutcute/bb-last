import React from "react";
import { LogoWidget } from "./logoWidget";
import { TitleImagesBlock } from "./titleImagesBlock";
import { Header } from "./header";
import { InfoBlock } from "./infoBlock";
import { Portfolio } from "./portfolio";


const HomeStart = (): React.JSX.Element =>{
    return <>
            <Header/>
            <LogoWidget/>
            <TitleImagesBlock/>
            <InfoBlock/>
            <Portfolio/>
            </>
}

export default HomeStart;