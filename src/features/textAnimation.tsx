
import React from "react"
import { motion } from "framer-motion";

type Props = {
    text: string,
    once: boolean
    delay:number
}

export const AnimateTitleText = ({text, delay, once=false}: Props): React.JSX.Element => {



    const container = {
        hidden: {opacity:0, scale: 1},
        visible: {
            opacity:1,
            scale:1,
            transition:{
                delayChildren: delay,
                staggerChildren: .042
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
    return <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:once}}>
        {
            anomationText.split("").map((char, index)=>(
                <motion.span style={{display:"inline-block"}} key={index} variants={item}>{char}</motion.span>
            ))

            }
    </motion.div>


}