export const PageRevealAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
    ease: "linear",
    duration: 0.6,
    delayChildren: 0.6,
    staggerChildren: 0.3,
  },
  },
  
};
export const PageRevealStaggered = {
  initial: {  opacity:0 },
  animate: {
    
    opacity:1,
    transition: {
    duration: 0.5,
  },
  },
  
};
