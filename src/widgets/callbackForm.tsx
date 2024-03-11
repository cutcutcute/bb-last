import React from "react";
import { AnimateTitleText } from "../features/textAnimation";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

export const CallbackForm = (): React.JSX.Element => {

    const parallax = useParallax({
        speed:-2
    })

    return <section ref={parallax.ref} className="callback-form">
        <div className="callback-form__title"><h3><AnimateTitleText staggerChildren={.042} wordWrapper={false} text="Заполнить заявку" once={false}  delay={.1}/></h3></div>   
        <div className="container form-info">
            <div className="row ">
                <motion.div initial={{opacity:.3, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:.7}} className="col"><motion.h5 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4, ease:"easeInOut"}}>
                    <strong>{<AnimateTitleText staggerChildren={.042} wordWrapper={false} text="Оставьте свой запрос" once={false}  delay={.5}/>}</strong> и мы свяжемся с вами для консультации</motion.h5></motion.div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col m-3">
                <select className="form-select form-elem" aria-label="Пример выбора по умолчанию">
                    <option value="1" selected>Новостройка</option>
                    <option value="2">Вторичное Жилье</option>
                    <option value="3">Загородное Жилье</option>
                    <option value="4">Коммерческое Помещение</option>
                </select>
                </div>
                <div className="col m-3" id="city-form">
                <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Город"/>
                </div>
            </div>

            <div className="row">
                <div className="col m-3" id="square-form">
                    <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Площадь"/>
                </div>
                <div className="col m-3" id="phone-form">
                    <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Телефон"/>
                </div>

                <div className="col m-3" id="user-form">
                    <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Ваше имя"/>
                </div>
            </div>

            <div className="row">
                    <div className="col mt-3 w-100 d-flex justify-content-center">
                <button className="form-send">Отправить заявку</button>
            </div>
            </div>
        </div>
    </section>

}


  
