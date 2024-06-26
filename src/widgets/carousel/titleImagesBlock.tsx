import React, { Suspense, useRef } from "react";
import cr1 from "../../app/images/carousel/cr1.jpg";
import cr2 from "../../app/images/carousel/cr2.jpg";
import cr3 from "../../app/images/carousel/cr3.jpg";
import cr4 from "../../app/images/carousel/cr4.jpg";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import { MainLoading } from "../loading/mainLoading";

export const TitleImagesBlock = (): React.JSX.Element =>{

    

    const images: string[] = [cr1, cr2, cr3, cr4]
    return <motion.section  initial={{opacity:.4, scale:1.15}} animate={{opacity:1, scale:1}} transition={{duration:.9}} className="carouselWrapper ratio ratio-16x9">
                <Carousel pause={false} indicators={true} controls={false} className="carousel-obj">
                    {images.map((el, index) => (
                        <Carousel.Item  key={index} interval={7000}>
                            <Suspense fallback={<MainLoading/>}>
                                <img src={el} alt="bb" className="d-block w-100 h-200 img-fluid" />
                            </Suspense>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </motion.section>}