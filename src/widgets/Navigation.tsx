import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../shared/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

type Props = {
  display:boolean
}

export const Navigation = (props: Props) => (
  <motion.ul className="sidebar-list" style={{display:props.display?"block":"none"}} variants={variants}>
    {itemIds.map(item => (
      <MenuItem i={item.id} key={item.id} text={item.text} link={item.link}  />
    ))}
  </motion.ul>
);

const itemIds = [{id:0, text:"Главная", link:"/"}, 
{id:1, text:"Портфолио", link:"/portfolio"},{
  id:2, text:"Услуги", link:"/price"},
  {id:3, text:"О нас", link:"/about"},
  {id:4, text:"Контакты", link:"/contacts"}];