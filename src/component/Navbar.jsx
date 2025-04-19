import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UilEstate,
  UilUser,
  UilImage,
  UilMessage,
  UilFileAlt,
  UilBars,
  UilTimes,
} from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, text: "Home", icon: <UilEstate className="w-5 h-5" /> },
  { id: 2, text: "About", icon: <UilUser className="w-5 h-5" /> },
  { id: 3, text: "Skills", icon: <UilFileAlt className="w-5 h-5" /> },
  { id: 4, text: "Portfolio", icon: <UilImage className="w-5 h-5" /> },
  { id: 5, text: "Contact", icon: <UilMessage className="w-5 h-5" /> },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = menu ? "auto" : "hidden";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                &lt;
                <span className="text-indigo-600 dark:text-indigo-400">
                  Sukharanjan
                </span>
                <span className="text-indigo-600 dark:text-indigo-400">
                  /Jana
                </span>
                &gt;
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex space-x-1">
              {navItems.map(({ id, text, icon }) => (
                <motion.li
                  key={id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={text.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="active-nav-item"
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                      activeSection === text.toLowerCase()
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                        : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {icon}
                    <span className="ml-2">{text}</span>
                    {activeSection === text.toLowerCase() && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all"
            aria-expanded={menu}
          >
            <span className="sr-only">Open main menu</span>
            {menu ? (
              <UilTimes className="h-6 w-6" aria-hidden="true" />
            ) : (
              <UilBars className="h-6 w-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 mt-16 ${
              menu ? "block" : "hidden"
            }`}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="px-2 pt-4 pb-8 space-y-2 sm:px-4"
            >
              {navItems.map(({ id, text, icon }) => (
                <motion.div
                  key={id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: id * 0.1 }}
                >
                  <Link
                    to={text.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ease-in-out mx-2 ${
                      activeSection === text.toLowerCase()
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={toggleMenu}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center"
                    >
                      {icon}
                      <span className="ml-3">{text}</span>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;