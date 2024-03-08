import React from "react";
import { LogoOutput } from "../shared/logo/logoOutput";
import { motion } from "framer-motion";

export const LogoWidget = (): React.JSX.Element => {
    return <motion.div initial={{opacity:.2, y:-50}} animate={{opacity:1, y:0}} transition={{duration:.7}} className="page-logo">
        <LogoOutput/>
    </motion.div>
}