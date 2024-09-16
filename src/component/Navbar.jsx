import React, { useState } from "react";
import logo from '../assets/logo.png';
import openIcon from '../assets/menu/menu.svg';
import closeIcon from '../assets/menu/close.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 bg-transparent">
      {/* Logo */}
      <div className="ml-5 mt-5 flex items-center">
        <img
          src={logo}
          alt="Ofin"
          className="w-40 cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </div>

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
        } lg:flex flex-col lg:flex-row text-white m-8 items-center justify-center gap-4 text-xl lg:text-2xl absolute lg:static right-5 top-20 lg:top-0 lg:bg-transparent bg-black lg:w-auto w-full lg:h-auto h-[50vh] transition-all duration-500`}
      >
        <ul className="flex flex-col lg:flex-row gap-4">
          <li>
            <a
              href="#"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Loans
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Apply
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
