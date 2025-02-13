import { motion } from "framer-motion";
import { FadeUp } from "../../utils/framerAnimations";

const Location = () => {
  
  const contactInfo={
    phone: "+54 9 11 1234-5678",
    email: "mariajosesuarez058@gmail.com",
    shedules:{
      week: "Martes a Viernes: 16:30 - 21:00",
      weekend: "Sabados: 9:00 - 11:00 / 16:00 - 20",
    },
    location:{
      address: "Barrio Amyso 2 M-D C-9",
      lat: -32.7216667,
      lng: -68.6108611,
    }

  }

  return (
    <section className="py-16 bg-lime-50/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          {...FadeUp(0.3)}
        >
          <h2 className="text-4xl font-bold mb-4">Nuestra Ubicación</h2>
          
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            {...FadeUp(0.4)}
          >
            <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Dirección</h4>
                <p className="text-gray-600">{contactInfo.location.address}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Horarios</h4>
                <p className="text-gray-600">{contactInfo.shedules.week}</p>
                <p className="text-gray-600">{contactInfo.shedules.weekend}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Contacto</h4>
                <p className="text-gray-600">Tel: {contactInfo.phone}</p>
                <p className="text-gray-600">Email: {contactInfo.email}</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="h-[400px] rounded-xl overflow-hidden shadow-lg"
            {...FadeUp(0.5)}
          >
            {/* Mapa de OpenStreetMap */}
            <iframe
              title="Ubicación en el mapa"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${contactInfo.location.lng - 0.01},${contactInfo.location.lat - 0.01},${contactInfo.location.lng + 0.01},${contactInfo.location.lat + 0.01}&layer=mapnik&marker=${contactInfo.location.lat},${contactInfo.location.lng}`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;