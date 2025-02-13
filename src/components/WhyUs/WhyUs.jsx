import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../../utils/framerAnimations";
import masaje from "../../assets/masaje2.svg";
import {
  IoHeartOutline,
  IoTimeOutline,
  IoStarOutline,
  IoThumbsUpOutline,
 
  IoTrophyOutline,
 
  IoRoseOutline,
} from "react-icons/io5";

function WhyUs() {
  const reasons = [
    { title: "Experiencia", icon: IoTrophyOutline },
    { title: "Amor", icon: IoHeartOutline },
    { title: "Flexibilidad", icon: IoTimeOutline },
    { title: "Confianza", icon: IoThumbsUpOutline },
    { title: "Calidad", icon: IoStarOutline },
    { title: "Delicadeza", icon: IoRoseOutline },
  ];

  return (
    <section className="min-h-screen bg-lime-50/30 py-16 " id="nosotros">
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold mb-16"
        {...FadeUp(0.3)}
      >
        ¿Por qué elegirnos?
      </motion.h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
        {/* Imagen */}
        <div className="flex justify-center">
          <motion.div className="max-w-md w-full" {...FadeRight(0.8)}>
            <img
              src={masaje}
              alt="Masaje relajante"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        {/* Grid 2x2 raeson */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow-primary shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              {...FadeRight(index*0.1)}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <reason.icon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">{reason.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default WhyUs;
