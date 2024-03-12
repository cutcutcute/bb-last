import React, {useRef} from "react";
import { motion, useCycle } from "framer-motion";
import { NavigationItem } from "../shared/navigationItem";
import { useDimensions } from "../features/hooks/useDimensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "../shared/buttons/MenuToggle";
import { useParallax } from "react-scroll-parallax";
import { SideBarContacts } from "../shared/SideBarContacts";

const sidebar = {
    open: (height = 800) => ({
      clipPath: `circle(${height * 1 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        
        type: "spring",
        stiffness: 400,
        damping: 40,

      }
    }
  };

  

export const Header = (): React.JSX.Element => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
   
    

    return <> 
    <motion.header  initial={{opacity:0, y:-90}} animate={{opacity:1, y:0}} transition={{duration:.8}} className="page-header px-2">
        <nav className="navigation w-100" >
            <div className="container navigation-container w-100">
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
        <motion.div className="background-sidebar" variants={sidebar} />
            <Navigation display={isOpen}/>
            <MenuToggle toggle={() => toggleOpen()} />
            <SideBarContacts isOpen={isOpen}/>
        </motion.nav>
         </>
    } 