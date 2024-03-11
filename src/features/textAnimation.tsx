
import React from "react"
import { motion } from "framer-motion";

type Props = {
    text: string,
    once: boolean
    delay:number,
    wordWrapper: boolean,
    staggerChildren:number
}

export const AnimateTitleText = ({text, delay, staggerChildren, once=false, wordWrapper = false}: Props): React.JSX.Element => {



    const container = {
        hidden: {opacity:0, scale: 1},
        visible: {
            opacity:1,
            scale:1,
            transition:{
                delayChildren: delay,
                staggerChildren: staggerChildren
            }
        }
    };

    const item = {
        hidden:{y:10, opacity:0},
        visible:{
            y:0, 
            opacity:1
        },
        
    }

    const anomationText: string = text.replaceAll(" ", "\u00A0");
    const splitParametr =  wordWrapper === true?"\u00A0":"";
    return <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:once}}>
        {
            anomationText.split(splitParametr).map((char, index)=>(
                <motion.span style={{display:"inline-block"}} key={index} variants={item}>{char}{splitParametr}</motion.span>
            ))

            }
    </motion.div>


}