export const FadeUp = (delay = 0, threshold = 0.1) => ({
    initial: {
      opacity: 0,
      y: 70
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay
      }
    },
    viewport: { 
      once: false,
      amount: threshold 
    }
  });
  
  export const FadeRight = (delay = 0, threshold = 0.1) => ({
    initial: {
      opacity: 0,
      x: 100
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay
      }
    },
    viewport: { 
      once: false,
      amount: threshold 
    }
  });
  
  export const FadeInOut = (delay = 0, duration = 0.5, threshold = 0.1) => ({
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: duration,
        ease: "easeInOut"
      }
    },
    viewport: { 
      once: false,
      amount: threshold 
    }
  });