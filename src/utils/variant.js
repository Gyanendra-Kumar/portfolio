export const aboutVariant = {
  hidden: {
    opacity: 0,
    y: "-100",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
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
      duration: 1,
      type: "spring",
      bounce: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
