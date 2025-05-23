import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiHome, FiInfo, FiMap, FiBookOpen } from 'react-icons/fi';

const navbarLinks = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "Sobre", link: "/about", icon: <FiInfo /> },
  { name: "Blogs", link: "/blogs", icon: <FiBookOpen /> },
  { name: "Destinos", link: "/places", icon: <FiMap /> },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 bottom-0 z-50 w-[80%] max-w-xs bg-white text-blue-950 px-6 py-8 transition-all duration-500 rounded-r-3xl shadow-2xl border-l-8 border-amber-400 md:hidden`}
    >
      {/* Cartão do usuário */}
      <div className="flex items-center gap-4 mb-10">
        <FaUserCircle size={50} className="text-blue-950" />
        <div>
          <h2 className="text-lg font-bold text-blue-950">Olá, Usuário</h2>
          <p className="text-sm text-amber-500 italic">Usuário Premium</p>
        </div>
      </div>

      {/* Links */}
      <ul className="space-y-5 text-base font-medium">
        {navbarLinks.map(({ name, link, icon }, index) => (
          <li key={index}>
            <Link
              to={link}
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-full transition duration-300 hover:bg-amber-400 hover:text-blue-950"
            >
              <span className="text-xl">{icon}</span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Rodapé */}
      <div className="absolute bottom-6 left-6 text-sm text-gray-400 italic">
        © 2025 Erika Travel ✨
      </div>
    </div>
  );
};

export default ResponsiveMenu;
