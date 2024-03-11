import React from "react";
import Image from "../app/images/info.jpeg";
import { AnimateTitleText } from "../features/textAnimation";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

export const InfoBlock = (): React.JSX.Element =>{
    const imageParallax = useParallax({
        speed:-2,
        easing: "easeOut", 
        shouldDisableScalingTranslations: true
    })
 
    return <section  ref={imageParallax.ref} className="info-block h-auto">
        <div className="info-block__wrapper px-3 d-flex">
            <motion.section initial={{opacity:0, y:300}} whileInView={{opacity:1, y:0}} transition={{duration:1.2}} viewport={{once:true}} className="info-block__wrapper-image-area ">
                <img src={Image} className="info-image img-fluid " alt="" />
            </motion.section>
 
            <motion.section  initial={{opacity:.4, x:15}} whileInView={{opacity:1, x:-30}} transition={{duration:1.1}} viewport={{once:false}} className="info-text-area " >
                <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}} className="info-text-area__title"><AnimateTitleText staggerChildren={.12} wordWrapper={true} text="Добро пожаловать в нашу дизайн студию" once={true}  delay={.1}/></motion.div>
                <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:.9}} viewport={{once:true}} className="info-text-area__text"><p>Если Вам нужно больше, чем просто ремонт.
Мы создаём уникальные проекты интерьеров жилых и общественных помещений. Разработаем варианты планировочных решений подходящих именно Вашему сценарию жизни, а также предложим идеи, о которых вы возможно даже не мечтали. Подберем качественные материалы и современное оборудование, отвечающие последним тенденциям дизайна.</p></motion.div>
                <br/><motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:1.1}} viewport={{once:true}} className="info-text-area__next">Далее</motion.div>
            </motion.section>

        </div>
    </section>
}