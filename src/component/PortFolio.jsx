import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Crop Yield Prediction",
    description: "ML & Python project for predicting crop yields",
    technologies: ["Python", "Machine Learning"],
    type: "ml",
    sourceCode: "https://github.com/Sukh767/Crop_yield_prediction.git"
  },
  {
    id: 2,
    title: "E-commerce Site",
    description: "Full-stack e-commerce site with MERN stack and Redux",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/MERN-E-Commerce-Store.git",
    liveDemo: "https://electromart-72lq.onrender.com/"
  },
  {
    id: 3,
    title: "Spotify Clone",
    description: "UX/UI clone of Spotify",
    technologies: ["HTML", "CSS"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Spotify-Clone.git"
  },
  {
    id: 4,
    title: "YouTube Clone",
    description: "Frontend clone of YouTube",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Youtube-clone.git"
  },
  {
    id: 5,
    title: "E-Commerce Frontend",
    description: "Frontend for an e-commerce website",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/E-Commerce-sites.git"
  },
  {
    id: 6,
    title: "Plagiarism Checker",
    description: "Python-based plagiarism detection tool",
    technologies: ["Python"],
    type: "ml",
    sourceCode: "https://github.com/Sukh767/Plagiarism-Checker-in-Python.git"
  },
  {
    id: 7,
    title: "Music Player",
    description: "Python-based music player application",
    technologies: ["Python"],
    type: "other",
    sourceCode: "https://github.com/Sukh767/Music-Player-in-Python.git"
  },
  {
    id: 8,
    title: "PDF Splitter",
    description: "Java application for splitting PDF files",
    technologies: ["Java"],
    type: "other",
    sourceCode: "https://github.com/Sukh767/Sukh767.github.io.git"
  },
  {
    id: 9,
    title: "Todo Application",
    description: "React-based todo list application",
    technologies: ["React"],
    type: "webdev",
    sourceCode: "https://github.com/Sukh767/Todo_Application.git"
  }
]

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
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
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Portfolio</h2>
        <p className="text-xl text-gray-600 mb-8">Featured Projects</p>
        
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