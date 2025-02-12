import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FadeInOut } from "../../utils/framerAnimations";
const serviceShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-10/12"
    >
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img
          src={service.img || "/api/placeholder/400/320"}
          alt={service.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <motion.div className="p-6" {...FadeInOut(0.3)}>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.name}
        </h3>
        <p className="text-gray-600">{service.description}</p>

        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary  transition-colors duration-300 w-full hover:cursor-pointer">
          Solicitar
        </button>
      </motion.div>
    </motion.div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.shape(serviceShape).isRequired
};
export default ServiceCard;
