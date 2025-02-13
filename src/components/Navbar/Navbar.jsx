import { IoMdClose, IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { FadeRight } from "../../utils/framerAnimations";
import logo from "../../assets/suspiro.svg"
import { useState } from "react";
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

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-transparent flex justify-center  top-0 w-full z-30 absolute left-0">
      <div className="container flex justify-between py-4 mx-auto items-center px-3 sm:px-0">
        {/* Logo section */}
        
          <img src={logo} alt="" className="w-40" />
        
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
        <div onClick={handleNav} className="block md:hidden px-2 text-2xl text-primary">
          {!nav ? (
            <IoMdMenu
              size={30}
              className="  duration-500 cursor-pointer "
            />
          ) : (
            <IoMdClose
              size={30}
              className=" duration-500 cursor-pointer"
            />
          )}
        </div>
        <div
          className={
            nav
              ? "md:hidden rounded w-full bg-primary border-4 border-secondary  text-white text-center opacity-100 justify-center duration-300  absolute top-[80px] py-5  flex z-50  left-0 px-2"
              : "left-0 absolute w-full   duration-700 top-[80px]  text-center justify-center opacity-0 px-2"
          }
        >
          <ul className="w-full flex flex-col overflow-hidden gap-2 ">
            {NavbarMenu.map((li) => (
              <a
                key={li.id}
                href={li.path}
                className=" hover:border-b-2 border-white duration-500 cursor-pointer text-2xl w-full "
              >
                {li.tittle}
              </a>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
