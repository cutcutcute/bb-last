import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateTitleText } from "../features/textAnimation";
import { PriceCard } from "../shared/priceCard";
import { useParallax } from "react-scroll-parallax";
import PriceInterfase, { PriceList } from "../shared/consts/PriceData";
import { SelectedPricebar } from "./bars/SelectedPriceBar";

export const PriceBlock = (): React.JSX.Element =>{

    const titleName = "Наши услуги"


      const [selectedId, setSelectedId] = useState<null|string>(null)
      const selectedCard = PriceList.find(item => item.id === selectedId)
      
      console.log(selectedCard)

      const selectCard = (id: string) : void => {
          setSelectedId(id)

      }

      const handleCloseCard = () => {
        setSelectedId(null);
      }

      return <section className="price-block">
              <motion.div  initial={{scaleX: .3, x:-20}} whileInView={{scaleX: 1, x:0}} transition={{duration:.7}} className="price-block__title"><h3>
              <AnimateTitleText staggerChildren={.042} wordWrapper={false} once={false} text={titleName} delay={.1}/>
              </h3></motion.div>
          <div className="container price-container" style={{maxWidth:"none"}}>
            <div className="row">

              {PriceList.map((item)=>(
                <motion.div key={Number.parseInt(item.id)} onClick={()=>setSelectedId(item.id)} layoutId={item.id} initial={{opacity:.5}} whileInView={{opacity:1}} transition={{duration:.7, ease:"easeOut"}} whileHover={{y:-10}} className="col m-3"> 
                  <PriceCard text={item.text} price={item.price} handleSelect={()=>selectCard(item.id)}/>
                </motion.div>

              ))}


              
            </div>
          </div>           
              <AnimatePresence>  
                {selectedId && selectedCard && (
                  <SelectedPricebar closeCard={handleCloseCard} currentCard = {selectedCard}/>
                )}
              </AnimatePresence>
              </section>
              
}