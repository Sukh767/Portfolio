import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaDiscord, FaTelegram, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import image from "../assets/image.webp";

const Home = () => {
  return (
    <>
      <div name="Home" className="mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm </h1>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I'm a full-stack web developer and B.Tech student with a strong
              passion for both backend and frontend development. Driven by a
              love for coding, I’m dedicated to creating seamless, user-friendly
              applications while continuously honing my skills through hard work
              and determination.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5 justify-center">
                  <li>
                    <a
                      href="https://www.instagram.com/sukh_jana/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PiInstagramLogoFill className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sukharanjan-jana-402b42255"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Sukh767" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="http://t.me/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Skills Icons */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <ul className="flex space-x-5 justify-center">
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </ul>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 md:ml-48 mt-20 order-1">
            <img
              src={image}
              alt=""
              className="w-full md:rounded-full md:w-[450px] md:h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="border-1" />
    </>
  );
};

export default Home;
