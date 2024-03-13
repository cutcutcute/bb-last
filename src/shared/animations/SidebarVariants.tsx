


export const SideBarVariants = {
    open: (height = 2000) => ({
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