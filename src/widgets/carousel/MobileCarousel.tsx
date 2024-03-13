import React, {Suspense} from "react";
import mcr1 from "../../app/images/mobile-carousel/mcr1.jpg";
import mcr2 from "../../app/images/mobile-carousel/mcr2.jpg";
import mcr3 from "../../app/images/mobile-carousel/mcr3.jpg";
import mcr4 from "../../app/images/mobile-carousel/mcr4.jpg";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import { MainLoading } from "../loading/mainLoading";

export const MobileCarousel = (): React.JSX.Element =>{

    const images: string[] = [mcr1, mcr2, mcr3, mcr4]

    return <section className="mobile-carousel">
        <motion.div initial={{scale:1.2, opacity:.6}} whileInView={{scale:1, opacity:1}} transition={{duration:.5, ease:"easeOut"}} className="ratio mobile-carousel__wrapper">
        <Carousel pause={false} indicators={false} controls={true} className="carousel-obj">
                    {images.map((el, index) => (
                        <Carousel.Item  key={index} interval={7000}>
                            <Suspense fallback={<MainLoading/>}>
                                <img src={el} alt="bb" className="d-block w-100 h-200 img-fluid" />
                            </Suspense>
                        </Carousel.Item>
                    ))}
                </Carousel>
        </motion.div>
    </section>
}