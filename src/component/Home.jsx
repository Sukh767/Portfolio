import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { ReactTyped, Typed } from "react-typed";
import profile from "../assets/profile2.jpg";

const Home = () => {
  return (
    <>
      <div name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-l text-2xl md:text-4xl">
              <h1>Hello, I'm </h1>
              {/* <span className="text-red-600 font-bold">Developer</span> */}
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem omnis reiciendis voluptate reprehenderit, similique
              labore quo suscipit quisquam sequi sint tempora enim eligendi,
              eveniet qasi tenetur totam! Pariatur, impedit voluptates?
            </p>
            <br />
            {/*Social Media icon */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:spacce-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.instagram.com/sukh_jana/"
                      target="_blank"
                    >
                      <PiInstagramLogoFill className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sukharanjan-jana-402b42255"
                      target="_blank"
                    >
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Sukh767" target="_blank">
                      <FaGithub className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.instagram.com/sukh_jana/" target="_blank">
                    <FaDiscord className="text-3xl cursor-pointer" />
                  </li> */}
                  <li>
                    <a href="http://t.me/" target="_blank">
                      <FaTelegram className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*Skills icon*/}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <ul className="flex space-x-5">
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2[px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2[px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2[px]" />
                  <SiMongodb className="text-xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-2[px]" />
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 order-1">
            <img
              src={profile}
              alt=""
              className="rounded-full w-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr className="border-1" />
    </>
  );
};

export default Home;
