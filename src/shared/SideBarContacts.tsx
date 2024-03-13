import { motion } from "framer-motion";
import React from "react";
import YandexImage from "../app/images/contacts/mail.svg";
import TelegramImage from "../app/images/contacts/telegram.svg";
import InstagramImage from "../app/images/contacts/instagram.svg";
import { ImageWrapper } from "./ImageWrapper";
import { ContactIcons } from "./ContactIcons";

interface SidebarProps{
        isOpen: boolean
}

const variants = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
                delay:.7,
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      };


      const titleVariants = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
                delay:.3,
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      };


export const SideBarContacts = (props: SidebarProps): React.JSX.Element => {

    return <motion.div style={{display:props.isOpen?"block":"none"}} className="sidebar-contacts">
                <div className="container">
                        <div className="row">
                                <motion.div variants={titleVariants}  className="col sidebar-contacts__title m-3">Контакты</motion.div>
                        </div>
                        <motion.div variants={variants}  className="row sidebar-contacts__contact">+79829437868</motion.div>
                        <motion.div variants={variants}  className="row sidebar-contacts__contact">+79091832345</motion.div>
                        <motion.div variants={variants}  className="row sidebar-contacts__contact">Тюмень/Москва/Сочи</motion.div>
                        <motion.div variants={variants} className="row sidebar-contacts__contact">BB.design.studio@yandex.ru</motion.div>
                        <ContactIcons/>
                </div>
        </motion.div>

}