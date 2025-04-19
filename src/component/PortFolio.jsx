import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Github, ExternalLink } from "lucide-react";
import {motion } from "framer-motion"
const projects = [
  {
    id: 1,
    title: "Crop Yield Prediction",
    description:
      "This Python project leverages Python to predict crop yields based on environmental and soil parameters. It uses data preprocessing and regression models to provide insights for farmers and policymakers.",
    technologies: ["Python", "Python"],
    type: "Python",
    sourceCode: "https://github.com/Sukh767/Crop_yield_prediction.git",
  },
  {
    id: 2,
    title: "E-commerce Site",
    description:
      "A comprehensive full-stack e-commerce application built using the MERN stack. It integrates Redux for state management and features a secure payment gateway to handle transactions effectively.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/MERN-E-Commerce-Store.git",
    liveDemo: "https://electromart-72lq.onrender.com/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A visually appealing UX/UI clone of Spotify built with HTML and CSS, showcasing skills in frontend design and responsive web layouts.",
    technologies: ["HTML", "CSS"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Spotify-Clone.git",
  },
  {
    id: 4,
    title: "YouTube Clone",
    description:
      "A frontend clone of YouTube created using HTML, CSS, and JavaScript. This project emphasizes interactive web design and dynamic scripting capabilities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Youtube-clone.git",
  },
  {
    id: 5,
    title: "E-Commerce Frontend",
    description:
      "This project delivers the frontend for an e-commerce website using HTML, CSS, and JavaScript, focusing on an intuitive user interface and mobile responsiveness.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/E-Commerce-sites.git",
  },
  {
    id: 6,
    title: "Plagiarism Checker",
    description:
      "A Python-based tool that detects plagiarism in text files. It utilizes text similarity algorithms to highlight copied content and ensure originality.",
    technologies: ["Python"],
    type: "Python",
    sourceCode: "https://github.com/Sukh767/Plagiarism-Checker-in-Python.git",
  },
  {
    id: 7,
    title: "Music Player",
    description:
      "A Python application for playing audio files, featuring an intuitive GUI and essential controls like play, pause, and stop.",
    technologies: ["Python"],
    type: "Python",
    sourceCode: "https://github.com/Sukh767/Music-Player-in-Python.git",
  },
  {
    id: 8,
    title: "PDF Splitter",
    description:
      "A Java application designed to split PDF files into separate pages or segments. It simplifies document management with a user-friendly interface.",
    technologies: ["Java"],
    type: "other",
    sourceCode: "https://github.com/Sukh767/Sukh767.github.io.git",
  },
  {
    id: 9,
    title: "Todo Application",
    description:
      "A React and Redux-powered todo list application. It allows users to add, edit, and delete tasks, showcasing state management and dynamic rendering capabilities.",
    technologies: ["React", "Redux"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Todo_Application.git",
  },
  {
    id: 10,
    title: "Scan&Dine Restaurant Management MERN Application",
    description:
      "A fully responsive restaurant management system with QR code menu and ordering functionality.",
    technologies: ["React", "Redux", "JavaScript", "Node.js"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/scan-dine.git",
    liveDemo: "https://scan-and-dine.onrender.com",
  },
  {
    id: 11,
    title: "E-Commerce Admin Dashboard",
    description:
      "An admin dashboard for managing products, orders, and customers. Built with MERN, it provides a seamless experience for managing an e-commerce store.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/nexify.git",
    liveDemo: "https://nexify-admin-dashoard.onrender.com/",
  },
];


const ProjectCard = ({ project, darkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -5 }}
    className={`rounded-xl overflow-hidden transition-all duration-300 ${
      darkMode
        ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30"
        : "bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-500/30"
    } shadow-lg hover:shadow-xl`}
  >
    <div className="p-6">
      <h3
        className={`text-xl font-semibold mb-3 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {project.title}
      </h3>
      <p
        className={`${
          darkMode ? "text-gray-300" : "text-gray-600"
        } mb-4 line-clamp-3`}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              darkMode
                ? "bg-purple-900/30 text-purple-300"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-sm font-medium ${
            darkMode
              ? "text-purple-400 hover:text-purple-300"
              : "text-blue-600 hover:text-blue-800"
          } transition-colors duration-300`}
        >
          <Github className="w-4 h-4 mr-2" />
          Source Code
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium ${
              darkMode
                ? "text-emerald-400 hover:text-emerald-300"
                : "text-emerald-600 hover:text-emerald-800"
            } transition-colors duration-300`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const { darkMode } = useDarkMode();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-purple-600" : "bg-indigo-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-blue-600" : "bg-blue-400"
          }`}
        ></div>

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 opacity-[0.03] ${
            darkMode ? "bg-white" : "bg-black"
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-3 ${
              darkMode
                ? "bg-purple-500/10 text-purple-400"
                : "bg-indigo-500/10 text-indigo-600"
            }`}
          >
            MY WORK
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Project{" "}
            <span
              className={`${
                darkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
              }`}
            >
              Portfolio
            </span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto mt-3`}
          >
            A collection of my recent projects and contributions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["all", "webdev", "Python", "other"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === type
                  ? darkMode
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-indigo-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700/50"
                  : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
              }`}
            >
              {type === "all"
                ? "All Projects"
                : type === "webdev"
                ? "Web Development"
                : type}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}