export const PageRevealAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      ease: "linear",
      duration: 0.8,
      delayChildren: 0.8,
    },
  },
};
export const PageRevealStaggered = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren:0.3
    },
  },
};
