import React from "react";
import { motion } from "framer-motion";
import SmallLogoSvg from "../shared/logo/smallLogo.svg";

interface IPresentation{
    notSlide?: boolean
}

export const PresentationComponent = (props: IPresentation): React.JSX.Element => {
    return <motion.section initial={{ y:0, scaleY:1}} exit={{scaleY:-.5, y:-1000}} transition={{duration:1.5, ease:"easeOut"}} className="presentation-area">
        <motion.div initial={{opacity:0, y:(props.notSlide?0:200)}} animate={{opacity:1, y:0}}  transition={{duration:.8, ease:"easeOut"}} exit={{y:-800, opacity:0}} className={`presentation-area__window ${props.notSlide?"no-animation":""}`}>
        
            <div className="ratio ratio-1x1">
                <img src={SmallLogoSvg} alt="логотип"/>
            </div>
        </motion.div>
    </motion.section>
}