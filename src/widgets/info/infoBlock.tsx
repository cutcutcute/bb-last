import React from "react";
import Image from "../../app/images/info.jpeg";
import { ImageWrapper } from "../../shared/ImageWrapper";
import { InfoBlockText } from "../../shared/InfoBlockText";
import { motion } from "framer-motion";


export const InfoBlock = (): React.JSX.Element =>{

    return <section  className="info-block h-auto">
        <div className="info-block__wrapper  d-flex align-items-stretch justify-content-center">
            <div className="info-block__wrapper-half d-flex justify-content-end">
                <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} transition={{duration:.8, delay:.3}} className="info-block__wrapper-image">
                    <ImageWrapper customRatio="853/1280" source={Image} alt="Фотография"/>
                </motion.div>
            </div>
        
            <motion.div initial={{opacity:0, x:120}} whileInView={{opacity:1, x:0}} transition={{delay:.9, duration:.3}} className="info-block__wrapper-half">
                <div className="info-block__wrapper-text">
                    <InfoBlockText/>
                </div>
            </motion.div>

            


        
        </div>
    </section>
}