import React, {useEffect, useRef} from "react";
import { motion, useCycle } from "framer-motion";
import { NavigationItem } from "../../shared/navigationItem";
import { useDimensions } from "../../features/hooks/useDimensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "../../shared/buttons/MenuToggle";
import { SideBarContacts } from "../../shared/SideBarContacts";
import { SideBarVariants } from "../../shared/animations/SidebarVariants";

interface HeaderProps{
  color?: string,
  backgroundColor?: string,
  isRelative?:boolean
}
  

export const Header = (props: HeaderProps): React.JSX.Element => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);


   
    const disableScroll = () => {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    }

    const enableScroll = () => {
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }


    useEffect(()=>{
      isOpen?disableScroll():enableScroll();
    })

    const lineColor = props.color==="#000"?"#000":"#fff";
  

    return <> 
    <motion.header style={{color:props.color, position: props.isRelative?"relative":"absolute", backgroundColor:props.backgroundColor}}  initial={{opacity:0, y:-90}} animate={{opacity:1, y:0}} transition={{duration:.8}} className="page-header px-2">
        <nav className="navigation w-100" >
            <div className="container navigation-container w-100">
                <div className="row align-items-end">
                    <div className="col"><NavigationItem color={props.color} textValue="Портфолио" navigatePath="/portfolio" textSizeLevel={1}/></div>
                    <div className="col"><NavigationItem color={props.color} textValue="Услуги" navigatePath="/price" textSizeLevel={2}/></div>
                    <div className="col"><NavigationItem color={props.color} isLogo={true} navigatePath="/"/></div>
                    <div className="col"><NavigationItem color={props.color} textValue="О нас" navigatePath="/about" textSizeLevel={2}/></div>
                    <div className="col"><NavigationItem color={props.color} textValue="Контакты" navigatePath="/contacts" textSizeLevel={1}/></div>
                </div>
            </div>
        </nav>
        <motion.div initial={{scaleX:0, opacity:0}} whileInView={{scaleX:1, opacity:1}} transition={{duration:.7, delay:.5}} style={{borderTop:`1px solid ${lineColor}`}} className="header-line"></motion.div>
    </motion.header>
    <motion.div className={`${isOpen?"open":"close"} blur-mobile`} initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
           ></motion.div>
            

    <motion.nav className="header-mobile-nav"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            
        >
        <motion.div className="background-sidebar" variants={SideBarVariants} />
        <MenuToggle toggle={() => toggleOpen()} />
          <div className="sidebar-fixed-wrapper">
            <Navigation display={isOpen}/>
            <SideBarContacts isOpen={isOpen}/>
          </div>
        </motion.nav>
         </>
    } 