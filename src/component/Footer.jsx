import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 ">
              <a className="hover:text-indigo-700" href="https://sukharanjanjana767@gmail.com" target="_blank"> <SiGmail size={24}/> </a>
              <a className="hover:text-indigo-700" href="https://x.com/Sukh_Jana" target="_blank" > <FaTwitter size={24} /> </a>
              <a className="hover:text-indigo-700" href="https://www.instagram.com/sukh_jana/" target="_blank"> <FaInstagram size={24} /> </a>
              <a className="hover:text-indigo-700" href="https://www.linkedin.com/in/sukharanjan-jana-402b42255" target="_blank"> <FaLinkedinIn size={24} /> </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Sukh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
