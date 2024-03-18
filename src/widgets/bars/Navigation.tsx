import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../../shared/MenuItem";
import { scrollToElement } from "../../features/navbarScroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

type Props = {
  display:boolean,
  toggle: ()=>void
}

export const Navigation = (props: Props) => (
  <motion.ul className="sidebar-list" style={{display:props.display?"block":"none"}} variants={variants}>
    {itemIds.map(item => (
      <MenuItem i={item.id} key={item.id} handleScroll={item.handleScroll} toggleClick={props.toggle} text={item.text} link={item.link}  />
    ))}
  </motion.ul>
);

const itemIds = [{id:0, text:"Главная", link:"/", handleScroll:undefined}, 
{id:1, text:"Портфолио", link:"/", handleScroll:()=>scrollToElement("portfolio-block-id")},{
  id:2, text:"Услуги", link:"/", handleScroll:()=>{scrollToElement("price-block-id")}},
  {id:3, text:"О нас", link:"/about", handleScroll:undefined},
  {id:4, text:"Контакты", link:"/", handleScroll:()=>scrollToElement("footer-element-id")}];