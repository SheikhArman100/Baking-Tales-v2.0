export const navbarItem = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 0.3,
      ease: "linear",
    },
  },
};
export const logoText = {
  initial: {
    fill: "none",
  },
  animate: {
    fill: "white",
    transition: {
      delay: 1.2,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const logoTextBorder = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      delay: 0.7,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const menuBorder = {
  initial: {
    pathLength: 0,
  },
  hover: {
    pathLength: 1,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};

export const mobileNav={
  initial:{
    scaleY:0
  },
  animate:{
    scaleY:1,
    transition:{
      duration:0.4,
      ease: [0.12, 0, 0.39, 0],
      delayChildren:0.4,
    }
  },
  exit:{
    scaleY:0,
    transition:{
      duration:0.4,
      ease:"easeInOut",
      delayChildren:0.4
    }
  }
}

const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  export const mobileLinkContainer = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
