import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaDiscord, FaTelegram, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import image from "../assets/image.webp";

const Home = () => {
  return (
    <div name="Home" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-600">Welcome to My Portfolio</h2>
            <div className="text-4xl sm:text-5xl font-bold text-gray-900">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-blue-600"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              I'm a full-stack web developer and B.Tech student with a strong
              passion for both backend and frontend development. Driven by a
              love for coding, I'm dedicated to creating seamless, user-friendly
              applications while continuously honing my skills through hard work
              and determination.
            </p>
            
            {/* Social Media and Skills */}
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4">
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800">Connect with me</h3>
                <ul className="flex space-x-4">
                  {[
                    { icon: PiInstagramLogoFill, href: "https://www.instagram.com/sukh_jana/", color: "hover:text-pink-600" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sukharanjan-jana-402b42255", color: "hover:text-blue-700" },
                    { icon: FaGithub, href: "https://github.com/Sukh767", color: "hover:text-gray-900" },
                    { icon: FaTelegram, href: "http://t.me/", color: "hover:text-blue-500" },
                  ].map((item, index) => (
                    <li key={index} className={`transition-colors duration-300 ${item.color}`}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="text-3xl" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800">Currently working on</h3>
                <ul className="flex space-x-4">
                  {[
                    { icon: FaNodeJs, color: "text-green-600" },
                    { icon: FaReact, color: "text-blue-400" },
                    { icon: SiExpress, color: "text-gray-600" },
                    { icon: SiMongodb, color: "text-green-500" },
                  ].map((item, index) => (
                    <li key={index}>
                      <item.icon className={`text-3xl transition-transform duration-300 hover:scale-110 ${item.color}`} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={image}
                alt="Profile"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;