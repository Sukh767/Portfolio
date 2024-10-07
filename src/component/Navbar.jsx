import React, { useState } from "react";
import profile from "../assets/profile2.jpg";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
import { UilEstate, UilUser, UilImage, UilMessage, UilFileAlt } from '@iconscout/react-unicons';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", icon: <UilEstate size={24} /> },
    { id: 2, text: "About", icon: <UilUser size={24} /> },
    { id: 4, text: "Skills", icon: <UilFileAlt size={24} /> },
    { id: 3, text: "Portfolio", icon: <UilImage size={24} /> },
    { id: 5, text: "Contacts", icon: <UilMessage size={24} /> },
  ];

  return (
    <>
      <div className="mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <h2 className="text-xl text-slate-700">Sukharanjan</h2>
          </div>
          {/* Desktop navbar */}
          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map(({ id, text, icon }) => (
                <li
                  className="flex items-center hover:scale-105 duration-200 cursor-pointer gap-x-2"
                  key={id}
                >
                  <Link
                    className="flex items-center"
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {icon}
                    <span className="ml-2">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {!menu ? <IoMenu size={24} /> : <ImCross size={20} />}
          </div>
        </div>
        {/* Mobile navbar */}
        {menu && (
          <div className="bg-white overflow-hidden">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, icon }) => (
                <li
                  className="flex items-center hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="flex items-center"
                  >
                    {icon}
                    <span className="ml-2">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
