import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <SocialLink href="mailto:sukharanjanjana767@gmail.com" icon={SiGmail} label="Email" />
            <SocialLink href="https://x.com/Sukh_Jana" icon={FaTwitter} label="Twitter" />
            <SocialLink href="https://www.instagram.com/sukh_jana/" icon={FaInstagram} label="Instagram" />
            <SocialLink href="https://www.linkedin.com/in/sukharanjan-jana-402b42255" icon={FaLinkedinIn} label="LinkedIn" />
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">&copy; {currentYear} All rights reserved.</p>
            <p className="text-sm">Built with ❤️ by Sukh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition-colors duration-300"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

export default Footer;