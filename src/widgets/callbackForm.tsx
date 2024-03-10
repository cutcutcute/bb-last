import React from "react";
import { AnimateTitleText } from "../features/textAnimation";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

export const CallbackForm = (): React.JSX.Element => {

    const parallax = useParallax({
        speed:-15
    })

    return <section ref={parallax.ref} className="callback-form">
        <div className="callback-form__title"><h3><AnimateTitleText text="Заполнить заявку" once={false}/></h3></div>   
        <div className="container form-info">
            <div className="row ">
                <motion.div initial={{opacity:.3, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:.7}} className="col"><h5>Оставьте свою заявку для дальнейшей связи</h5></motion.div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col m-3">
                <select className="form-select form-elem" aria-label="Пример выбора по умолчанию">
                    <option value="1" selected>Новостройка</option>
                    <option value="2">Два</option>
                    <option value="3">Три</option>
                </select>
                </div>
                <div className="col m-3">
                <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Город"/>
                </div>
            </div>

            <div className="row">
                <div className="col m-3">
                    <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Площадь"/>
                </div>
                <div className="col m-3">
                    <input type="text" className="form-control form-elem" id="exampleFormControlInput1" placeholder="Телефон"/>
                </div>

                <div className="col m-3">
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


  
