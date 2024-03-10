import React from "react";
import { motion } from "framer-motion";
import { AnimateTitleText } from "../features/textAnimation";
import { PriceCard } from "../shared/priceCard";
import { useParallax } from "react-scroll-parallax";

export const PriceBlock = (): React.JSX.Element =>{

    const titleName = "Наши услуги"

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
          }
        }
      };
      
      const item = {
        hidden: { y: 30, opacity: .3 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
   
      const parallax = useParallax({
        speed:-10
      })

    return <section ref={parallax.ref} className="price-block">
                    <motion.div  initial={{scaleX: .3, x:-200}} whileInView={{scaleX: 1, x:0}} transition={{duration:.7}} className="price-block__title"><h3>
                    <AnimateTitleText once={false} text={titleName}/>
                    </h3></motion.div>
                <motion.div initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:.7}} className="price-block__color-wrapper"></motion.div>
                <div className="price-block__cards">
                <motion.div className="container" variants={container}
                                                    initial="hidden"
                                                    whileInView="visible">
  
                    <div className="row align-items-center gap">
                        <motion.div variants={item} whileHover={{y:-10}} className="col m-3">
                            <PriceCard text="Планировачное решение" price="990 р"/>
                        </motion.div>
                        <motion.div variants={item} whileHover={{y:-10}} className="col m-3">
                            <PriceCard text="Индивидуальный проект интерьера" price="2490 р"/>
                        </motion.div>
                        <motion.div variants={item} whileHover={{y:-10}} className="col m-3">
                            <PriceCard text="Авторский надзор" price="30 000 р"/>
                        </motion.div>
                    </div>
                    </motion.div>
                </div>
            
            </section>
}