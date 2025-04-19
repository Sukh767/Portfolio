import React from "react";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: "mailto:sukharanjanjana767@gmail.com", 
      icon: SiGmail, 
      label: "Email",
      color: "hover:text-red-500"
    },
    { 
      href: "https://x.com/Sukh_Jana", 
      icon: FaTwitter, 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      href: "https://www.instagram.com/sukh_jana/", 
      icon: FaInstagram, 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      href: "https://www.linkedin.com/in/sukharanjan-jana-402b42255", 
      icon: FaLinkedinIn, 
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    { 
      href: "https://github.com/Sukh767", 
      icon: FaGithub, 
      label: "GitHub",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <footer className="py-16 bg-gray-800 text-gray-100 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <SocialLink 
                key={index}
                href={link.href}
                icon={link.icon}
                label={link.label}
                color={link.color}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm mb-2 text-gray-300 dark:text-gray-400">
              &copy; {currentYear} Sukharanjan Jana. All rights reserved.
            </p>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Built with <span className="text-red-500">❤️</span> and React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon, label, color, index }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`p-3 rounded-full transition-all duration-300 ${color} ${
      href.includes("mailto") ? "hover:bg-red-500/10" :
      href.includes("twitter") ? "hover:bg-blue-400/10" :
      href.includes("instagram") ? "hover:bg-pink-500/10" :
      href.includes("linkedin") ? "hover:bg-blue-500/10" :
      "hover:bg-gray-400/10"
    }`}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export default Footer;
