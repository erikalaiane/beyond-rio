import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiHome, FiInfo, FiMap, FiBookOpen } from 'react-icons/fi';

const navbarLinks = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "About", link: "/about", icon: <FiInfo /> },
  { name: "Blogs", link: "/blogs", icon: <FiBookOpen /> },
  { name: "Destinos", link: "/places", icon: <FiMap /> },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 bottom-0 z-40 w-[80%] max-w-xs bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-10 transition-all duration-300 md:hidden shadow-2xl rounded-r-2xl`}
    >
      {/* User Card */}
      <div className="flex items-center gap-4 mb-10">
        <FaUserCircle size={48} className="text-gray-500 dark:text-gray-300" />
        <div>
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            Olá, Usuário
          </h2>
          <p className="text-sm text-gray-400">Usuário Premium</p>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="space-y-5 text-base font-medium">
        {navbarLinks.map(({ name, link, icon }, index) => (
          <li key={index}>
            <Link
              to={link}
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-full transition duration-300 hover:bg-blue-900 hover:text-white dark:hover:bg-blue-800"
            >
              {icon}
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer (opcional) */}
      <div className="absolute bottom-6 left-6 text-sm text-gray-400">
        © 2025 Erika Travel ✈️
      </div>
    </div>
  );
};

export default ResponsiveMenu;
