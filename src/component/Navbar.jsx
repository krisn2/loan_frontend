import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="ml-5 mt-5 flex flex-shrink-0 items-center ">
          <img src={logo} alt="Ofin" className='w-40' />
        </div>
        <div className=" text-white m-8 flex items-center justify-center gap-4 text-2xl">
          <ul className="flex flex-row gap-4">
            <li  >
              <a href="#">Home</a>
            </li>
            <li >
              <a href="#">Loans</a>
            </li>
            <li >
              <a href="#">About Us</a>
            </li>
            <li >
              <a href="#">Apply</a>
            </li>
            <li >
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
)
}

export default Navbar