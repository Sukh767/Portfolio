import React from 'react'
import java from "../assets/java.png";
import html from "../assets/html.png"
import css from "../assets/css.jpg"
import javascript from "../assets/javascript.png"
import python from "../assets/python.webp";
import MongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";

const Experience = () => {
    const cardItem = [
        {
          id: 1,
          logo: html,
          name: "HTML",
        },
        {
          id: 2,
          logo: css,
          name: "CSS",
        },
        {
          id: 3,
          logo: java,
          name: "Java",
        },
        {
          id: 4,
          logo: javascript,
          name: "JavaScript",
        },
        {
            id: 5,
            logo: nodejs,
            name: "NodeJS",
          },
          {
            id: 6,
            logo: python,
            name: "Python",
          },
      ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience