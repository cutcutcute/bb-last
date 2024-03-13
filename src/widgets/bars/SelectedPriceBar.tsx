import React from "react";
import { motion } from "framer-motion";
import CloseSvg from "../../app/images/close.svg";
import PriceInterfase from "../../shared/consts/PriceData";

interface PriceBar{
    closeCard: ()=>void,
    currentCard: PriceInterfase
}

export const SelectedPricebar = (props: PriceBar): React.JSX.Element => {

    const handleStopClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }
    return <motion.nav className="price-side-bar" onClick={()=> props.closeCard()} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.4}} exit={{opacity:0}}>
            <motion.div onClick={handleStopClick} className="price-side-bar__window p-3" initial={{scaleX:1, x:360}} animate={{scaleX:1, x:0}} transition={{duration:.4, ease:"easeOut"}} exit={{scaleX:0.8, x:260}} >
                <div onClick={()=> props.closeCard()} className="price-side-bar__window-close-wrapper">
                    <img src={CloseSvg} style={{position:"relative"}} width={40} height={40} alt="Закрыть"/>
                </div>

                <section className="price-side-bar__window-info p-3">
                     <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="price-side-bar__window-info-title">{props.currentCard.text}</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="price-side-bar__window-info-text">
                                    {props.currentCard.content}
                            </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <div className="price-side-bar__window-info-price ">Цена: {props.currentCard.price}</div>
                            </div>
                        </div>

                     </div>
                </section>
            </motion.div>
  
                
           
    </motion.nav>
}