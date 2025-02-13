import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FadeInOut } from "../../utils/framerAnimations";
import openWhatsAppChat from "../../utils/OpenWspChat";
const serviceShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string
};


const ServiceCard = ({ service }) => {
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm h-[400px] flex flex-col hover:scale-105 "
    >
      {/* Contenedor de imagen con altura fija */}
      <div className="h-48 w-full bg-gray-200 overflow-hidden">
        <img
          src={service.img || "/api/placeholder/400/320"}
          alt={service.name}
          className="w-full h-full  object-center hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Contenedor de texto con altura fija y overflow controlado */}
      <motion.div 
        className="p-6 flex-1 flex flex-col justify-between" 
        {...FadeInOut(0.3)}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
            {service.name}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {service.description}
          </p>
        </div>

        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 w-full hover:cursor-pointer" onClick={()=>openWhatsAppChat(service)}>
          Solicitar sesión
        </button>
      </motion.div>
    </motion.div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.shape(serviceShape).isRequired
};
export default ServiceCard;
