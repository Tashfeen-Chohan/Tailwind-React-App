import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 w-full mx-auto px-4 text-white bg-black sticky top-0">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* DESKTOP NAVBAR */}
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li className="p-4">
          <Link
            activeClass="active"
            to="analytics"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            RESOURCES
          </Link>
        </li>
        <li className="p-4">
          <Link
            activeClass="active"
            to="cards"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            PACKAGES
          </Link>
        </li>
        <li className="p-4">
          <Link
            activeClass="active"
            to="newsletter"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>

      {/* MOBILE NAVBAR */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">
        <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
        <Link
            activeClass="active"
            to="analytics"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            RESOURCES
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
        <Link
            activeClass="active"
            to="cards"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            PACKAGES
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
        <Link
            activeClass="active"
            to="newsletter"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
