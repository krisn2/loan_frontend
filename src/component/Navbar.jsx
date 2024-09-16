import React, { useState } from "react";
import logo from '../assets/logo.png';
import openIcon from '../assets/menu/menu.svg';
import closeIcon from '../assets/menu/close.svg';
import {motion} from 'framer-motion'


const container = (delay) => ({
  hidden:{ x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay }
  }
})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 bg-transparent border-b border-stone-50 ">
      {/* Logo */}
      <motion.div
      variants={container(0.5)}
      initial="hidden"
      animate="visible"
      className="ml-5 mt-5 flex items-center">
        <img
          src={logo}
          alt="Ofin"
          className="w-40 cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </motion.div>

      {/* Hamburger Icon for Mobile */}
      <div className="mr-5 block lg:hidden">
        <img
          src={isOpen ? closeIcon : openIcon}
          alt={isOpen ? 'Close menu' : 'Open menu'}
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Links */}
      <div
         className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row text-white m-8 items-center
         justify-center gap-4 text-xl lg:text-2xl absolute lg:static left-0 
         top-20 lg:top-0 lg:bg-transparent backdrop-blur-md bg-white/30 rounded-3xl 
         lg:w-auto w-[90%] lg:h-auto h-[80vh] transition-all duration-500`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 text-3xl">
          <li>
            <motion.a
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 1 }}
              href="Home"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 1.5 }}
              href="Hero"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Loans
            </motion.a>
          </li>
          <li>
            <motion.a
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 2 }}
              href="About"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              About Us
            </motion.a>
          </li>
          <li>
            <motion.a
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 2.5 }}
              href="Apply"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Apply
            </motion.a>
          </li>
          <li>
            <motion.a
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 3 }}
              href="contect"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Contact Us
            </motion.a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
