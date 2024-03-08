import React from "react";
import { motion } from "framer-motion";
import { AnimateTitleText } from "../features/textAnimation";
import { Card } from "../shared/card";

export const PriceBlock = (): React.JSX.Element =>{

    const titleName = "Наши услуги"
   
    return <section className="price-block">
                    <motion.div  initial={{scaleX: .3, x:-500}} whileInView={{scaleX: 1, x:0}} transition={{duration:.7}} className="price-block__title"><h3>
                    <AnimateTitleText once={false} text={titleName}/>
                    </h3></motion.div>
                <motion.div initial={{x:800, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:.7}} className="price-block__color-wrapper"></motion.div>
                <div className="price-block__cards">
                    <Card text = "Планировачное решение"/>
                    <Card text = "Индивидуальный проект интерьера"/>
                    <Card text = "Авторский надзор"/>
                </div>
            
            </section>
}