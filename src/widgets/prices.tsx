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
        speed:-1
      })

      return <section ref={parallax.ref} className="price-block">
              <motion.div  initial={{scaleX: .3, x:-20}} whileInView={{scaleX: 1, x:0}} transition={{duration:.7}} className="price-block__title"><h3>
              <AnimateTitleText staggerChildren={.042} wordWrapper={false} once={false} text={titleName} delay={.1}/>
              </h3></motion.div>
          <div className="container price-container" style={{maxWidth:"none"}}>
            <div className="row">
              <motion.div initial={{opacity:.5}} whileInView={{opacity:1}} transition={{duration:.7, ease:"easeOut"}} whileHover={{y:-10}} className="col m-3"> <PriceCard text="Планировачное решение" price="990 р"/></motion.div>
              <motion.div initial={{opacity:.5}} whileInView={{opacity:1}} transition={{duration:.7, ease:"easeOut"}} whileHover={{y:-10}} className="col m-3"><PriceCard text="Индивидуальный проект интерьера" price="2490 р"/></motion.div>
              <motion.div initial={{opacity:.5}} whileInView={{opacity:1}} transition={{duration:.7, ease:"easeOut"}} whileHover={{y:-10}} className="col m-3"><PriceCard text="Авторский надзор" price="30 000 р"/></motion.div>
    
            </div>
          </div>           
    
            
            </section>
}