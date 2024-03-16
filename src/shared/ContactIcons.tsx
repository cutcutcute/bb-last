import React from "react";
import  {ImageWrapper}  from "./ImageWrapper";
import { motion } from "framer-motion";

import YandexImage from "../app/images/contacts/mail.svg";
import TelegramImage from "../app/images/contacts/telegram.svg";
import InstagramImage from "../app/images/contacts/instagram.svg";

export const ContactIcons = (): React.JSX.Element => {
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
    return <div className="sidebar-contacts__links">
                <motion.div variants={variants} className="sidebar-contacts__links-icon ">
                        <ImageWrapper source={InstagramImage} alt="Ссылка на Инстаграм"/>
                </motion.div>
                <motion.div variants={variants} className="sidebar-contacts__links-icon ">
                        <ImageWrapper source={TelegramImage} alt="Ссылка на телеграмм"/>
                </motion.div>
                <motion.div variants={variants} className="sidebar-contacts__links-icon ">
                        <ImageWrapper source={YandexImage} alt="Ссылка на яндекс"/>
                </motion.div>
            </div>
            }