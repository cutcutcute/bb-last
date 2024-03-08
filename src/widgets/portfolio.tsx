import React from "react";
import ImageLivingSpaces from "../app/images/portfolio/living-spaced (2).jpg"
import ImagePublicAreas from "../app//images/portfolio/public-areas.jpg";
import { motion } from "framer-motion";

export const Portfolio = (): React.JSX.Element => {
    return <section className="portfolio-block d-flex align-items-center">
        <div className="living-spaces-block d-flex ">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} whileTap={{scale:1.3}} transition={{duration:.9}} className="living-spaces-block__title text-center"><h3>Жилые Пространства</h3></motion.div>
            <div  className="living-spaces-block__image-area">
                <motion.div initial={{opacity:0, x:-250}} whileInView={{opacity:1, x:0}} transition={{duration:.5}} className="ratio ratio-1x1">
                    <img className="portfolio-image" src={ImageLivingSpaces} />
                </motion.div>
            </div>
        </div>
        <div className="public-areas-block d-flex ">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} whileTap={{scale:1.25}} transition={{duration:.9}} className="public-areas-block__title text-center"><h3>Общественные Помещения</h3></motion.div>
            <div  className="public-areas-block__image-area">
                <motion.div initial={{opacity:0, x:250}} whileInView={{opacity:1, x:0}} transition={{duration:.5}} className="ratio ratio-1x1">
                    <img className="portfolio-image" src={ImagePublicAreas} />
                </motion.div>
            </div>
            </div>
    </section>
}