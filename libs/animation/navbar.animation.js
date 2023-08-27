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

export const mobileNavContainer={
  initial:{
    scaleY:0
  },
  animate:{
    scaleY:1,
    transition:{
      duration:0.4,
      ease:"easeInOut",
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
