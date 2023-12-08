export const aboutVariant = {
  hidden: {
    opacity: 0,
    y: "-100",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      duration: 1,
      x: { duration: 1 },
    },
  },
};
export const projectVariant = {
  hidden: {
    opacity: 0,
    y: "100",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      //   duration: 1.5,
      //   type: "spring",
      //   bounce: 0.7,
      //   ease: [0.25, 0.1, 0.25, 1],

      //   ease: "easeInOut",
      duration: 1,
      x: { duration: 1 },
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};
