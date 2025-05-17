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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
     <div className="fixed top-0 right-0 w-full bg-amber-100 text-black shadow-md z-[99999] font-medium">
      <div className="container">
        
      </div>

      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          {/*logo section*/}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <img src={LogoImg} alt="Logo" className='h-16'/>
            </Link>
          </div>
          {/*Desktop Navlinks section*/}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "active py-4" : "py-4"}
                  onClick={() => window.scrollTo(0,0)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/blogs" 
                  className={({ isActive }) => `${isActive ? "active" : ""} py-2 hover:bg-amber-400 px-2 rounded-full cursor-pointer transition-colors duration-200`}
                  onClick={() => window.scrollTo(0,0)}
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/places" 
                  className={({ isActive }) =>  `${isActive ? "active" : ""} py-2 hover:bg-amber-400 px-2 rounded-full cursor-pointer transition-colors duration-200`}
                  onClick={() => window.scrollTo(0,0)}
                >
                  Destinos
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `${isActive ? "active" : ""} py-2 hover:bg-amber-400 px-2 rounded-full cursor-pointer transition-colors duration-200`}
                  onClick={() => window.scrollTo(0,0)}
                >
                  About
                </NavLink>
              </li>

              {/*Dropdown section*/}
              <li className="inline-block py-4 relative group cursor-pointer">
                <div className="dropdown flex items-center">
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                  </span>
                </div>
                <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                  <ul>
                    {dropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a className="inline-block w-full rounded-md p-2 hover:bg-amber-600/90 font-medium hover:text-amber-50" href={data.link}>
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          
          {/*botão agende agora*/}
          <div className="flex items-center gap-4">
            <button
            className="bg-gradient-to-r from-gray-700 to-blue-900 hover:bg-gradient-to-r hover:from-blue-800/65 hover:blue-950 transition-all duration-700 text-white px-3 py-1 rounded-full cursor-pointer">
              Agende Agora
            </button>
            
            {/*Mobile Hamburguer Menu*/}
            <div className="md:hidden block">
              {showMenu? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>
              ):(
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>
              )}

            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu = {showMenu} />
     </div>
    </>
  );
};

export default Navbar;
