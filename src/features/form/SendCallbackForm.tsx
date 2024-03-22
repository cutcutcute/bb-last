import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FormDataInterface{
    building: string,
    square: string,
    city: string,
    phone: string,
    name: string,
    closeModal: ()=>void

}


export const SendForm = (props: FormDataInterface):React.JSX.Element => {



    const [modalMessage, setModalMessage] = useState<string>("Обрабатываю ваш запрос...");

    
    const sendForm = async (): Promise<void> => {

        if (props.building.length<=0 || props.building==="---" || props.city.length<=0 || props.name.length<=0 || props.phone.length<=0 || props.square.length<=0){
            setModalMessage("Вы заполнили не все поля. Пожалуйста заполните все обязательные поля, и попробуйте отправить вашу заявку снова.")
        }

        else{


            axios.post("http://localhost:8080/api/form", props, {headers:{"Content-Type": "application/json"}})
            .then((response) => {

                setModalMessage("Ваша заявка успешно отправлена!")
            })
            .catch((error)=>{

                setModalMessage("В процессе отправки вашего запроса произошла ошибка. Повторите запрос позже или свяжитесь с нами через одну из наших социальных сетей")
            })
        }
    }

    useEffect(()=>{
        sendForm()
        
    })

    return <motion.section initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={props.closeModal} className="feature-form d-flex justify-content-center align-items-center">
            <div className="feature-form__window container">
                <div className="row">
                    <div className="col text-center feature-form__window-title"><h4>Отправить Заявку</h4></div>
                </div>

                <div className="row m-3">
                    <div className="col text-center feature-form__window-text">{modalMessage}</div>
                </div>

                <div className="row">
                    <div className="col text-center ">
                        <button className="form-send">Вернуться</button>
                    </div>
                </div>
             
            </div>
        </motion.section>

}
