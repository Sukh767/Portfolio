"use client";

import React, { useState, useEffect } from "react";
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
  { id: 5, text: "Contacts", icon: <UilMessage className="w-5 h-5" /> },
];


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-xl font-bold text-slate-700 dark:text-white">
            &lt;Sukharanjan<span className="text-xl font-bold">/Jana&gt;</span>
          </h2>

          {/* Desktop navbar */}
          <div className="hidden md:flex">
            <ul className="flex space-x-1">
              {navItems.map(({ id, text, icon }) => (
                <li key={id}>
                  <Link
                    to={text.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="text-indigo-600 dark:text-indigo-400"
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                      activeSection === text.toLowerCase()
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {icon}
                    <span className="ml-2">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {menu ? (
              <UilTimes className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <UilBars className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className={`md:hidden ${menu ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ id, text, icon }) => (
            <Link
              key={id}
              to={text.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-indigo-600 dark:text-indigo-400 bg-gray-100 dark:bg-gray-700"
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 ${
                activeSection === text.toLowerCase()
                  ? "text-indigo-600 dark:text-indigo-400 bg-gray-100 dark:bg-gray-700"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setMenu(false)}
            >
              {icon}
              <span className="ml-2">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar