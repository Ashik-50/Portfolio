import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">Mohamed Ashik</h4>
          <p className="text-sm text-gray-500">Full-Stack Developer passionate about clean code and elegant UI.</p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/mohamedashik47/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Ashik-50"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          <a
            href="mailto:ashikmohamed919@gmail.com"
            className="flex items-center gap-3 hover:text-red-400 transition"
          >
            <HiOutlineMail size={18} />
            ashikmohamed919@gmail.com
          </a>
          <a
            href="tel:+919876543210"
            className="font-mono flex items-center gap-3 hover:text-green-400 transition"
          >
            <HiPhone size={18} />
            +91 8220976004
          </a>
        </div>
        <div className="text-sm md:text-right flex flex-col justify-center items-center md:items-end text-gray-500">
        <p>
            &copy; {new Date().getFullYear()} <span>Mohamed Ashik</span>
        </p>
        <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;