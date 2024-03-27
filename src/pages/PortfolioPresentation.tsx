import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Network from "../features/Network";
import { Header } from "../widgets/bars/header";
import { imageBase64 } from "../shared/Base64ImageWrapper";
import { Footer } from "../widgets/bars/footer";
import { motion, AnimatePresence } from "framer-motion";
import { PresentationComponent } from "../shared/PresentaTion";


const PortfolioPresentation = (): React.JSX.Element => {

    const {key} = useParams()

    const [title, setTitle] = useState<string>("")
    const [location, setLocation] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [description, setDescription] = useState<string>("")
    const [projectType, setProjectType] = useState<number>(1)
    const [planImage, setPlanImage] = useState<string>("")
    const [images, setImages] = useState<string[]>([])


    const [isPresent, setIsPresent] = useState<boolean>(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{setIsPresent(false)}, 1500)
        return ()=>{clearTimeout(timer)}
    }, [])
        

    const navigate = useNavigate()

    useLayoutEffect(()=>{
        const response: Promise<any> = Network.getProject(Number(key));
        response
            .then((res): void=>{
                setTitle(res.data.title);
                setDescription(res.data.description);
                setProjectType(res.data.category);
                setPlanImage(res.data.plan);
                setImages(res.data.images);
                setYear(res.data.year);
                setLocation(res.data.location);
            })

            .catch((error)=>{
                navigate("/not-found");
            })
    }, [])

    return <>

        <AnimatePresence>
            {isPresent && (
                <PresentationComponent notSlide={true}/>
            )}
        </AnimatePresence>

        <Header color="#000" backgroundColor="#fff"/>
        <section className="portfolio-presentation">
            <div className="portfolio-presentation__plan ">
                <img  style={{width:"100%", height:"auto"}} src={imageBase64(planImage)} alt="План проекта"/>
            </div>
            
            <div className="container ">
                <div className="row m-3">
                    <div className="col text-center"><h3>{title}</h3></div>
                </div>

                <div className="row m-3">
                    <div className="col text-center">
                        <p>{description}</p>
                        
                    </div>
                </div>

                <div className="row ">
                    <div className="col text-center">
                        <p className="portfolio-presentation__location">{location}</p>
                    </div>
                </div>

                <div className="row ">
                    
                        <div className="col text-center d-flex justify-content-center">
                            <p className="portfolio-presentation__year">{year} год</p>
                        </div>
              
                </div>
                <br/>
                <div style={{width:"100%"}} className=" d-flex justify-content-center">
                        <motion.div initial={{scaleX:0, opacity:0}} whileInView={{scaleX:1, opacity:1}} transition={{duration:.7, delay:.5}} style={{borderTop:`1px solid #000`}} className="header-line"></motion.div>
                </div>
            </div>

            {images.map((image, index) => (
                    <div key={index} className="portfolio-presentation__image m-3">
                        <motion.img initial={{scale:1}} whileHover={{scale:1.1}} transition={{duration:.3, ease:"easeOut"}} style={{width:"100%", height:"auto"}} src={imageBase64(image)} alt="Изображение"/>
                    </div>
                )

                )}
        </section>
        <Footer/>
    </>
}

export default PortfolioPresentation;