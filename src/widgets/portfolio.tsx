import React, { useEffect } from "react";
import ImageLivingSpaces from "../app/images/portfolio/living-spaced (2).jpg"
import ImagePublicAreas from "../app//images/portfolio/public-areas.jpg";
import { motion } from "framer-motion";
import { AnimateTitleText } from "../features/textAnimation";
import { useParallax } from "react-scroll-parallax";

export const Portfolio = (): React.JSX.Element => {


    return <motion.section initial={{opacity:.3}} whileInView={{opacity:1}} transition={{duration:.7}}  className="portfolio-block d-flex">
        <div className="living-spaces-block d-flex ">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} whileTap={{scale:1.3}} transition={{duration:.9}} className="living-spaces-block__title ">
                <h3 className="title-text living-s-text text-start ">Жилые пространства</h3></motion.div>
            
            <div  className="living-spaces-block__image-area">
                <motion.div  initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:.5}} className="ratio ratio-16x9">
                    <img className="portfolio-image" src={ImageLivingSpaces} />
                </motion.div>
            </div>
        </div>
        <div className="public-areas-block d-flex ">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} whileTap={{scale:1.25}} transition={{duration:.9}} className="public-areas-block__title">
                <h3 className="title-text public-a-text text-end">Общественные помещения</h3></motion.div>
            <div  className="public-areas-block__image-area">
                <motion.div initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:.5}} className="ratio ratio-16x9">
                    <img className="portfolio-image jarallax-img" src={ImagePublicAreas} />
                </motion.div>
            </div>
            </div>
    </motion.section>
}