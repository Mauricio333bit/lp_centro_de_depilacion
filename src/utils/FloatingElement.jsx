import { useTransform, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
;
 const FloatingElement = ({ children, scrollYProgress }) => {
  const ref = useRef(null);
  
  // Transformamos el progreso del scroll (0-1) en valores para nuestras animaciones
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 300]); // Movimiento vertical durante el primer 50% del scroll
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 15]); // Rotación suave
  
  // Oscilación horizontal continua usando CSS
  const floatingStyle = {
    animation: "floatX 8s ease-in-out infinite",
  };

  useEffect(() => {
    // Agregamos los keyframes para la oscilación horizontal
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes floatX {
        0% { transform: translateX(0px); }
        50% { transform: translateX(15px); }
        100% { transform: translateX(0px); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotate,
        ...floatingStyle
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};
FloatingElement.propTypes = {
    children: PropTypes.node.isRequired,
    scrollYProgress:PropTypes.number.isRequired
  }
export default FloatingElement;