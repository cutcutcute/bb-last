import React from "react";
import { motion } from "framer-motion";

interface ImageDescriptionProps{
    title: string, 
    text: string 
}

export const ImageDescription = (props: ImageDescriptionProps): React.JSX.Element => {

    return <motion.div initial={{backgroundColor:"rgba(0,0,0,.2)"}} transition={{duration:.4, ease:"easeInOut"}} whileHover={{backgroundColor:"rgba(0,0,0,.4)"}} className="image-description-area">
        <div className="image-description-area__content">
            <div className="container">
                <div className="row">
                    <motion.div initial={{opacity:.2, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:.6, ease:"easeIn"}} className="col text-center portfolio-photo-title mb-3">{props.title}</motion.div>
                </div>
                <div className="row">
                    <motion.div initial={{opacity:.2, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:.9, ease:"easeIn"}} className="col text-center portfolio-photo-text">{props.text}</motion.div>
                </div>
            </div>
        </div>
    </motion.div>
}