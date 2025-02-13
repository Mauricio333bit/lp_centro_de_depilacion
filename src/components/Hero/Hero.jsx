import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import blob from "../../assets/blob3.svg";
import piernas from "../../assets/piernas.svg";
import { motion} from "framer-motion";
import { FadeUp, FadeRight, ScrollRotateSoft } from "../../utils/framerAnimations";
import openWhatsAppChat from "../../utils/OpenWspChat";


function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <section className="bg-lime-50 min-h-screen relative px-4 flex flex-col justify-center">
        <Navbar />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen  relative top-0">
          {/* Brand info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-8 relative z-10 top-20">
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-5xl font-bold !leading-snug"
                {...FadeUp(0.3)}
              >
                Un <span className="text-primary">mimo</span> para tu cuerpo, un{" "}
                <span className="text-primary">respiro</span> para tu día. Lográ
                una piel <span className="text-primary">suave</span> y una mente{" "}
                <span className="text-primary">relajada</span>.
              </motion.h1>
              <motion.div 
                className="flex justify-center md:justify-start my-2" 
                {...FadeUp(0.6)}
              >
                <button className="btn-primary flex items-center gap-2 group hover:cursor-pointer" onClick={()=>openWhatsAppChat()}>
                  Agenda tu sesion
                  <IoIosArrowRoundForward className="text-3xl group-hover:translate-x-2.5 group-hover:-rotate-45 duration-500" />
                </button>
              </motion.div>
            </div>
            <motion.div 
              {...FadeUp(0.7)} 
              className="relative md:block hidden"
            >
              <img 
                src={piernas} 
                alt="" 
                className="z-10 rotate-45 size-68 sm:-bottom-40  lg:-bottom-17 md:-right-40 relative"
              />
            </motion.div>
          </div>

          {/* Hero animation and images */}
          <div className="relative z-10 flex items-center justify-center top-8 md:top-0">
            <motion.div 
              className="w-full h-full" 
              {...FadeRight(0.8)}
            >
              <DotLottieReact
                src="https://lottie.host/643f5b50-6d7a-4cad-981f-9208e15a5c43/t3kETjjsD9.lottie"
                loop
                autoplay
                speed={0.5}
              />
            </motion.div>
          </div>
        </div>

        {/* Blob background */}
        <motion.img 
          {...ScrollRotateSoft(0)} 
          src={blob} 
          alt="" 
          className="absolute -z-0 bottom-0 w-full max-w-[100vw] md:max-w-[80vw] right-0"
        />
      </section>
    </div>
  );
}

export default Hero;