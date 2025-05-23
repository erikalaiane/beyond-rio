import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImg from "../../assets/logo.png";
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from "./ResponsiveMenu";

const dropdownLinks = [
  { name: "Nossos Serviços", link: "/#services" },
  { name: "Top Agências", link: "/#agencias" },
  { name: "Destinos", link: "/#locais" }
];

const Navbar = ({handleOrderPopup}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="fixed top-0 w-full bg-amber-50 shadow-lg z-[9999] font-sans font-medium">
      <div className="container mx-auto px-6 sm:px-10 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
          <img src={LogoImg} alt="Logo" className="h-14 sm:h-16" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 text-base tracking-wide select-none">
          <li>
            <NavLink 
              to="/" 
              onClick={() => window.scrollTo(0,0)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-500 border-b-2 border-amber-500 pb-1 font-semibold transition"
                  : "hover:text-amber-600 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/blogs"
              onClick={() => window.scrollTo(0,0)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1 font-semibold transition"
                  : "hover:text-amber-500 transition"
              }
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/places"
              onClick={() => window.scrollTo(0,0)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1 font-semibold transition"
                  : "hover:text-amber-500 transition"
              }
            >
              Destinos
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/about"
              onClick={() => window.scrollTo(0,0)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1 font-semibold transition"
                  : "hover:text-amber-500 transition"
              }
            >
              About
            </NavLink>
          </li>

          {/* Dropdown */}
          <li className="relative group cursor-pointer select-none">
            <div className="flex items-center gap-1 text-gray-700 hover:text-amber-600 transition font-semibold">
              Quick Links <FaCaretDown className="mt-[2px] transition-transform duration-300 group-hover:rotate-180" />
            </div>
            <ul className="absolute left-0 top-full mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-50 border border-gray-200">
              {dropdownLinks.map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="block px-4 py-2 text-gray-700 hover:bg-amber-500 hover:text-white transition rounded-md"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Right Side - Button + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button 
          onClick={() => handleOrderPopup()}
          className="bg-gradient-to-r from-gray-600 to-blue-900 hover:from-amber-600 hover:to-amber-400 text-white px-5 py-2 rounded-full shadow-md transition duration-300 font-semibold select-none cursor-pointer">
            Agende Agora
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer text-gray-700 hover:text-blue-700 transition">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} size={28} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} size={28} />
            )}
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
