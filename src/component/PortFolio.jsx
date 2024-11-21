import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Crop Yield Prediction",
    description: "This machine learning project leverages Python to predict crop yields based on environmental and soil parameters. It uses data preprocessing and regression models to provide insights for farmers and policymakers.",
    technologies: ["Python", "Machine Learning"],
    type: "ml",
    sourceCode: "https://github.com/Sukh767/Crop_yield_prediction.git"
  },
  {
    id: 2,
    title: "E-commerce Site",
    description: "A comprehensive full-stack e-commerce application built using the MERN stack. It integrates Redux for state management and features a secure payment gateway to handle transactions effectively.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/MERN-E-Commerce-Store.git",
    liveDemo: "https://electromart-72lq.onrender.com/"
  },
  {
    id: 3,
    title: "Spotify Clone",
    description: "A visually appealing UX/UI clone of Spotify built with HTML and CSS, showcasing skills in frontend design and responsive web layouts.",
    technologies: ["HTML", "CSS"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Spotify-Clone.git"
  },
  {
    id: 4,
    title: "YouTube Clone",
    description: "A frontend clone of YouTube created using HTML, CSS, and JavaScript. This project emphasizes interactive web design and dynamic scripting capabilities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Youtube-clone.git"
  },
  {
    id: 5,
    title: "E-Commerce Frontend",
    description: "This project delivers the frontend for an e-commerce website using HTML, CSS, and JavaScript, focusing on an intuitive user interface and mobile responsiveness.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/E-Commerce-sites.git"
  },
  {
    id: 6,
    title: "Plagiarism Checker",
    description: "A Python-based tool that detects plagiarism in text files. It utilizes text similarity algorithms to highlight copied content and ensure originality.",
    technologies: ["Python"],
    type: "ml",
    sourceCode: "https://github.com/Sukh767/Plagiarism-Checker-in-Python.git"
  },
  {
    id: 7,
    title: "Music Player",
    description: "A Python application for playing audio files, featuring an intuitive GUI and essential controls like play, pause, and stop.",
    technologies: ["Python"],
    type: "other",
    sourceCode: "https://github.com/Sukh767/Music-Player-in-Python.git"
  },
  {
    id: 8,
    title: "PDF Splitter",
    description: "A Java application designed to split PDF files into separate pages or segments. It simplifies document management with a user-friendly interface.",
    technologies: ["Java"],
    type: "other",
    sourceCode: "https://github.com/Sukh767/Sukh767.github.io.git"
  },
  {
    id: 9,
    title: "Todo Application",
    description: "A React and Redux-powered todo list application. It allows users to add, edit, and delete tasks, showcasing state management and dynamic rendering capabilities.",
    technologies: ["React", "Redux"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Todo_Application.git"
  },
  {
    id: 10,
    title: "Scan&Dine Restaurant Management MERN Application",
    description: "A fully responsive restaurant management system with QR code menu and ordering functionality.",
    technologies: ["React", "Redux", "JavaScript", "Node.js"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/scan-dine.git",
    liveDemo: "https://scan-and-dine.onrender.com"
  }
];


const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <Github className="w-5 h-5 mr-2" />
          Source Code
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
)

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter)

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6 text-center">Portfolio</h2>
        <p className="text-xl text-gray-600 mb-8 text-center">Featured Projects</p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('webdev')}
            className={`px-4 py-2 rounded-full ${filter === 'webdev' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter('ml')}
            className={`px-4 py-2 rounded-full ${filter === 'ml' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setFilter('other')}
            className={`px-4 py-2 rounded-full ${filter === 'other' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Other
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}