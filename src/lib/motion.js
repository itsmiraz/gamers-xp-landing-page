export const transition = { type: "spring", duration: 1.5 };

export const slideAnimation = direction => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};
