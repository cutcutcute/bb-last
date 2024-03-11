import React from "react";
import { motion } from "framer-motion";
import { NavigationItem } from "../shared/navigationItem";


export const Header = (): React.JSX.Element => {
    return <motion.header initial={{opacity:0, y:-90}} animate={{opacity:1, y:0}} transition={{duration:.8}} className="page-header px-2">
        <nav className="navigation w-100" >
            <div className="container w-100">
                <div className="row align-items-end">
                    <div className="col"><NavigationItem textValue="Портфолио" textSizeLevel={1}/></div>
                    <div className="col"><NavigationItem textValue="Услуги" textSizeLevel={2}/></div>
                    <div className="col"><NavigationItem isLogo={true}/></div>
                    <div className="col"><NavigationItem textValue="О нас" textSizeLevel={2}/></div>
                    <div className="col"><NavigationItem textValue="Контакты" textSizeLevel={1}/></div>
                </div>
            </div>
        </nav>
    </motion.header>
} 