import React from "react";
import {imageBase64 } from "../Base64ImageWrapper";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface IPortfolioScroll{
    projects: any[]
}

const PortfolioScroll = (props: IPortfolioScroll): React.JSX.Element => {

    const navigate = useNavigate()
    const backgroundStyle = props.projects.length >0?"linear-gradient(180deg, rgba(203,196,186,.5) 50%, rgba(203,196,186,.45) 70%)":"#fff";

    console.log(backgroundStyle);
    return <section className="portfolio-list__wrapper" style={{background:backgroundStyle}}>
        <div className="container portfolio-list__area">

            {props.projects.length <= 0&&(
                <div className="">
                    <div className="row mt-3">
                        <div className="col text-center"><h3>Записи Отсутствуют</h3></div>
                    </div>

                    <div className="row mt-3">
                        <div className="col text-center">В данный момент записи отсутствуют. Повторите ваш запрос позже</div>
                    </div>

                    <div className="row mt-3">
                        <div className="col text-center">
                            <button onClick={()=> navigate("/", {replace:true})} className="not-found-area__wrapper-button">Вернуться на главную</button>
                        </div>
                    </div>
                </div>
            )}

            {props.projects.map(project=>(

                <motion.div onClick={()=>{navigate("/portfolio/presentation/" + project.id)}} initial={{y:100, opacity:.3}} whileInView={{y:0, opacity:1}} transition={{duration:.4, ease:"easeOut"}} key={project.id} className="row portfolio-list__area-row">
                <div className="col portfolio-list__area-item">
                    <div className="portfolio-list__area-item-description-block">

                        <div className="portfolio-list__area-item-description-block-title"><h2>{project.title}</h2></div>
                        <div className="portfolio-list__area-item-description-block-location">Локация: {project.location}</div>
                        <div className="portfolio-list__area-item-description-block-date">Дата: {project.year}</div>

                    </div>
                    <div className="portfolio-list__area-item-image-block ratio ratio-16x9">
                        <img className="portfolio-list__area-item-image" src={imageBase64(project.images[0])} alt="Изображение Портфолио"/>
                    </div>
                </div>
                </motion.div>

            ))}
            


        </div>
    </section>

}

export default PortfolioScroll;