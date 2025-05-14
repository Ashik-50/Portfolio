import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Image from '../assets/image.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : 'auto';
  }, [nav]);
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Certificates'];

  return (
    <nav
      className={`fixed top-0 w-full h-[80px] px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-[#0a192f]/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Link to="home" smooth={true} duration={500} className="z-50">
        <img
          src={Image}
          alt="Logo"
          className="w-16 md:w-20 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-full"
        />
      </Link>
      <ul className="hidden md:flex space-x-8 font-semibold text-gray-300">
        {menuItems.map((item) => (
          <li key={item} className="px-2">
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="border-b-2 border-pink-600"
              className="cursor-pointer hover:text-pink-500 transition duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden z-50 text-gray-300">
        <button onClick={handleClick} aria-label="Toggle menu">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0a192f]/95 backdrop-blur-md flex flex-col justify-center items-center z-40 transition-all duration-300 ease-in-out transform ${
          nav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {menuItems.map((item) => (
          <li key={item} className="py-6 text-4xl text-gray-300" onClick={closeMenu}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-pink-500"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;