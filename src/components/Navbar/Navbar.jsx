import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { FadeRight } from "../../utils/framerAnimations";
function Navbar() {
  const NavbarMenu = [
    {
      id: 1,
      tittle: "Inicio",
      path: "/",
    },
    {
      id: 2,
      tittle: "Servicios",
      path: "#servicios",
    },
    {
      id: 3,
      tittle: "Nosotros",
      path: "#nosotros",
    },
    {
      id: 4,
      tittle: "Contacto",
      path: "#contacto",
    },
  ];
  return (
    <nav className="bg-transparent  top-0 w-11/12 z-30 absolute">
      <div className="container flex justify-between py-4 mx-auto items-center ">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl  px-2">Logo</h1>
        </div>
        {/* Menu section */}
        <div className="text-2xl hidden lg:block text-dark  ">
          <ul className="flex gap-4 items-center">
            {NavbarMenu.map(
              (
                item 
              ) => (
                <motion.li key={item.id} {...FadeRight(0.2*item.id)} >
                  <a className="py-1 px-3  hover:text-primary font-bold relative group items-center justify-center flex" href={item.path}>
                    <div className="w-6/12 h-0.5  bg-primary absolute  bottom-0 group-hover:block hidden  "></div>
                    {item.tittle}
                    </a>
                </motion.li>
              )
            )}
          </ul>
        </div>
        {/* Hamburguer section */}
        <div className="lg:hidden px-2 text-2xl ">
          <IoMdMenu></IoMdMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
