import React from "react";
import { motion } from "framer-motion";

interface InfoChapterProps{
    title: string,
    text: string
}


export const InfoChapter = (props: InfoChapterProps): React.JSX.Element => {


    return <div className="info-chapter">
            <motion.h3 initial={{opacity:.3, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:.6, ease:"easeOut"}} viewport={{once:true}} >{props.title}<hr/></motion.h3>
            
            <p className="info-chapter__text col-12 col-sm-12">{props.text}</p>
        </div>

}