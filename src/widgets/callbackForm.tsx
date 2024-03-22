import React from "react";
import { AnimateTitleText } from "../features/textAnimation";
import { motion } from "framer-motion";
import { CallbackBody } from "./CallbackBody";


export const CallbackForm = (): React.JSX.Element => {


    return <section className="callback-form">
        <div className="callback-form__title"><h3><AnimateTitleText staggerChildren={.042} wordWrapper={false} text="Заполнить заявку" once={false}  delay={.1}/></h3></div>   
        <div className="container form-info">
            <div className="row ">
                <motion.div initial={{opacity:.3, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:.7}} className="col"><motion.h5 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4, ease:"easeInOut"}}>
                    <strong>{<AnimateTitleText staggerChildren={.042} wordWrapper={false} text="Оставьте свой запрос" once={false}  delay={.5}/>}</strong> и мы свяжемся с вами для консультации</motion.h5></motion.div>
            </div>
        </div>

        <CallbackBody/>
    </section>

}


  
