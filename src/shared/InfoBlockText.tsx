import React from "react";
import { AnimateTitleText } from "../features/textAnimation";
import { motion } from "framer-motion";

export const InfoBlockText = (): React.JSX.Element => {

    return <div className="container">
        <div className="row">
            <motion.div initial={{opacity:.3}} whileInView={{opacity:1}} transition={{duration:.5}} className="col block-title m-1">
            <AnimateTitleText staggerChildren={.12} wordWrapper={true} text="Добро пожаловать в нашу дизайн студию" once={false}  delay={.1}/> </motion.div>
        </div>
        <div className="row">
            <motion.div initial={{opacity:.3}} whileInView={{opacity:1}} transition={{duration:.5, delay:.3, ease:"easeOut"}} className="col block-text"><p>Если Вам нужно больше, чем просто ремонт. Мы создаём уникальные проекты интерьеров жилых и общественных помещений. Разработаем варианты планировочных решений подходящих именно Вашему сценарию жизни, а также предложим идеи, о которых вы возможно даже не мечтали. Подберем качественные материалы и современное оборудование, отвечающие последним тенденциям дизайна.</p></motion.div>
        </div>
        <div className="row">
            <motion.div initial={{opacity:.3}} whileInView={{opacity:1}} transition={{duration:.5, delay:.6, ease:"easeOut"}} className="col block-next text-end m-1">Читать Далее</motion.div>
        </div>
    </div>

}