import React, { useEffect } from "react";
import { Header } from "../widgets/bars/header";
import { ImageWrapper } from "../shared/ImageWrapper";
import Image from "../app/images/info.jpeg";
import { InfoChapter } from "../shared/InfoChapter";
import { infoChapters } from "../shared/consts/InfoChapters";
import { Footer } from "../widgets/bars/footer";
import { motion } from "framer-motion";

const About = (): React.JSX.Element => {

    useEffect(()=>{
        window.scrollTo(0,0);
    })

    return <>
        <Header color="#000" backgroundColor="#fff"/>
        <section className="about-layout">
            <div className="container">
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:.7, ease:"easeOut"}} viewport={{once:true}} className="row about-layout__image-row justify-content-center">
                    <div className="col m-3 col-sm-12 col-md-6 col-lg-4 text-center">
                    <ImageWrapper customRatio="853/1280" source={Image} alt="Изображение" ratioSize="1x1"/>
                    </div>
                </motion.div>

                <div style={{display:"none"}} className="row justify-content-center">
                    <div className="col about-layout__underline text-center m-3 col-sm-12 col-md-12 col-lg-6 "></div>
                </div> 

                {infoChapters.map((item, index)=>(
                    <div className="row justify-content-center about-layout__text-fragment">
                        <div className="col text-center">
                            <InfoChapter key={index} title={item.title} text={item.text}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <hr/>
        <Footer/>
    </>
}

export default About;