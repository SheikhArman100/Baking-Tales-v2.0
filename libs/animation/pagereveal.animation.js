export const PageRevealAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    
  },
  transition: {
      ease: "linear",
      duration: 2,
      delayChildren:2,
      staggerChildren:0.5
      
    },
};
// export const PageRevealStaggered={
//   initial:{scale:0},
//   animate:{
//     scale:1,
    
//   },
//   transition:{
//       duration:1,
//       delayChildren:1
//     }
// }
