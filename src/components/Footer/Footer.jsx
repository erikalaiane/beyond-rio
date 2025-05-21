import React from 'react';
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/footer.mp4";
import { Link } from 'react-router-dom';

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Sobre", link: "/about" },
  { title: "Destinos", link: "/destinos" },
  { title: "Blog", link: "/blogs" },
];

const Footer = () => {
  return (
    <div className="relative overflow-hidden pt-10">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>

      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-5 flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <img src={FooterLogo} alt="Logo" className="h-16" />

          {/* Descrição */}
          <p className="max-w-xl text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste reiciendis voluptates non quis distinctio animi, nulla cupiditate?
          </p>

          {/* Contato */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2 justify-center">
              <FaLocationArrow className="text-blue-950" />
              <span>Brasil, Rio de Janeiro</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaMobileAlt className="text-blue-950" />
              <span>+55 (21) 00000-0000</span>
            </div>
          </div>

          {/* Links importantes */}
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm mt-4">
            {FooterLinks.map(({ title, link }, index) => (
              <li key={index} className="hover:text-blue-950 hover:underline transition-all duration-300">
                <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Redes sociais */}
          <div className="flex gap-4 text-blue-950 text-xl mt-4">
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition"><FaLinkedin /></a>
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition"><FaFacebook /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white py-3 mt-6 rounded-b-xl bg-blue-950/80 backdrop-blur-sm">
          © 2025 Todos os Direitos Reservados — Feito com ♥ por Érika
        </div>
      </div>
    </div>
  );
};

export default Footer;
