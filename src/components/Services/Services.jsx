import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

import masaje from "../../assets/masaje.svg";
import masaje3 from "../../assets/masaje3.svg";
import depilacion1 from "../../assets/depilacion1.svg"
import piernas2 from "../../assets/piernas2.svg"
import { FadeRight } from "../../utils/framerAnimations";
function Services() {
    const Services = [
        {
          id: 1,
          name: "Depilación Española",
          description: "Técnica para una piel suave y sin irritaciones.",
          img: depilacion1,
        },
        {
          id: 2,
          name: "Depilación Fast",
          description: "Depilación con espátula y roll-on, efectiva y rápida.",
          img: piernas2,
        },
        {
          id: 3,
          name: "Masajes Relajantes",
          description: "Adecuados para aliviar el estrés y mejorar la circulación.",
          img: masaje,
        },
        {
          id: 4,
          name: "Masajes Descontracturantes",
          description: "Si buscas aliviar tensiones y dolores musculares.",
          img: masaje3,
        },
      ];
      
  return (
    <section className="bg-secondary-light w-full " id="servicios">
      <div className="container pt-14 pb-10 mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold mb-16"
        {...FadeRight(0.3)}
      >
        Nuestros Servicios
      </motion.h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center px-3">
        {Services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Services;
