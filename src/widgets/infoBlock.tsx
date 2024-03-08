import React from "react";
import Image from "../app/images/info.jpeg";
import { AnimateTitleText } from "../features/textAnimation";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

export const InfoBlock = (): React.JSX.Element =>{

 
    return <section className="info-block h-auto">
        <div className="info-block__wrapper px-3 d-flex">
            <motion.section initial={{opacity:0, y:300}} whileInView={{opacity:1, y:0}} transition={{duration:1.2}} viewport={{once:true}} className="info-block__wrapper-image-area ">
                <img src={Image} className="info-image img-fluid img-thumbnail" alt="" />
            </motion.section>
 
            <motion.section  initial={{opacity:.4, x:250}} whileInView={{opacity:1, x:-20}} transition={{duration:.5}} viewport={{once:false}} className="info-text-area " >
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}} className="info-text-area__title"><AnimateTitleText text="Титул" once={true}/></motion.div>
                <motion.div initial={{opacity:0, y:70}} whileInView={{opacity:1, y:0}} transition={{duration:.9}} viewport={{once:true}} className="info-text-area__text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></motion.div>
                <br/><motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1.1}} viewport={{once:true}} className="info-text-area__next">Далее</motion.div>
            </motion.section>

        </div>
    </section>
}