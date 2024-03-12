import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
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



type Props = {
    i: number,
    text: string,
    link: string
}

export const MenuItem = (props: Props) => {
  return (
    <motion.li className="sidebar-element"
      variants={variants}
      whileHover={{ textShadow:"0 0 2px rgba(0,0,0,.4)" }}
      whileTap={{ scale: 0.95 }}
    >

      <div className="text-placeholder" >{props.text}</div>
    </motion.li>
  );
};
