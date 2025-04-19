
import { useState, useEffect } from "react"
import { ExternalLink, Github, ArrowRight, ArrowLeft, Moon, Sun } from "lucide-react"
import { assets } from '../assets/assets';
import { useDarkMode } from "../context/DarkModeContext";

const projects = [
  {
    id: 1,
    title: "Scan&Dine",
    description:
      "Scan&Dine is an innovative solution that transforms the dining experience through seamless QR code technology. Developed using the MERN stack, it allows customers to access menus, place orders, and book tables effortlessly. Designed to streamline restaurant operations and enhance customer satisfaction, Scan&Dine empowers restaurants to register on the platform and offer their services to users. With integrated PayPal payment functionality, it provides a secure and convenient way for customers to settle bills, making dining more efficient and enjoyable for everyone.",
      images: [
        assets.scan1,
        assets.scan2,
        assets.scan3,
        assets.scan4,
        assets.scan6,
        assets.scan8,
      ],
    siteUrl: "https://scan-and-dine.onrender.com",
    adminUrl: "https://scan-dine-admin.onrender.com",
    tags: ["MERN Stack", "QR Technology", "PayPal Integration", "Restaurant Management"],
  },
  {
    id: 2,
    title: "E-commerce Application",
    description:
      "A comprehensive e-commerce platform with product management and secure checkout. Features include user authentication, product catalog, shopping cart, and order processing. Built with modern web technologies to deliver a seamless shopping experience.",
      images: [
        assets.ecommerce1,
        assets.ecommerce2,
        assets.ecommerce3,
        assets.ecommerce4,
        assets.ecommerce5,
        assets.ecommerce6
      ],
  
    siteUrl: "https://electromart-72lq.onrender.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe Integration"],
  },
  {
    id: 3,
    title: "E-Commerce Admin Dashboard",
    description:
      "An all-in-one dashboard for managing products, orders, and customers. Built with React and MongoDB. A responsive and user-friendly interface for managing an e-commerce store. Dynamically fetches data from the MongoDB database and displays it in a tabular format. Allows users to edit, and delete products, orders, and customers. Provides a seamless experience for managing an e-commerce store.",
      images: [
        assets.social1,
        assets.social2,
        assets.social3,
        assets.social4,
        assets.social5,
        assets.social6
      ],
    siteUrl: "https://nexify-admin-dashoard.onrender.com/",
    tags: ["React", "Admin Dashboard", "Data Visualization", "CRUD Operations"],
  },
]

const ProjectCard = ({ project, isActive, onClick, darkMode }) => (
  <div
    className={`cursor-pointer p-6 rounded-xl shadow-sm transition-all duration-300 border-2 transform hover:-translate-y-1 ${
      isActive
        ? darkMode
          ? "border-transparent bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg"
          : "border-transparent bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg"
        : darkMode
          ? "border-gray-700 bg-gray-800 hover:border-purple-500 hover:shadow-md"
          : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
    }`}
    onClick={onClick}
  >
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-lg ${
          isActive ? "bg-white/20" : darkMode ? "bg-purple-900/30 text-purple-300" : "bg-blue-100 text-blue-600"
        }`}
      >
        <span className="text-xl font-bold">{project.id}</span>
      </div>
      <div>
        <h3 className="text-xl text-slate-100 font-bold mb-2">{project.title}</h3>
        <p
          className={`text-sm line-clamp-2 ${
            isActive ? (darkMode ? "text-purple-100" : "text-blue-100") : darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full ${
                isActive
                  ? "bg-white/20 text-white/90"
                  : darkMode
                    ? "bg-purple-900/30 text-purple-300"
                    : "bg-blue-100 text-blue-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const ImageCarousel = ({ images, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={`relative w-full h-96 overflow-hidden rounded-t-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Project demo ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md transition-all ${
          darkMode ? "bg-gray-700/80 text-white hover:bg-gray-600" : "bg-white/80 text-gray-800 hover:bg-white"
        }`}
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md transition-all ${
          darkMode ? "bg-gray-700/80 text-white hover:bg-gray-600" : "bg-white/80 text-gray-800 hover:bg-white"
        }`}
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? darkMode
                  ? "bg-purple-500 w-4"
                  : "bg-blue-600 w-4"
                : darkMode
                  ? "bg-gray-600"
                  : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(projects[0])

  const {darkMode} = useDarkMode()

  return (
    <section
      className={`${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-gray-50 to-gray-100"} py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-12">
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>
              My{" "}
              <span
                className={`${
                  darkMode
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                }`}
              >
                Projects
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl`}>
              Each project is a unique journey of solving problems and creating value
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProject.id === project.id}
                onClick={() => setActiveProject(project)}
                darkMode={darkMode}
              />
            ))}
          </div>

          <div className="lg:col-span-2">
            <div
              className={`${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
              } rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300`}
            >
              <ImageCarousel images={activeProject.images} darkMode={darkMode} />

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode ? "bg-purple-900/30 text-purple-300" : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-4`}>
                  {activeProject.title}
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-800"} mb-6`}>{activeProject.description}</p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={activeProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                  {activeProject.adminUrl && (
                    <a
                      href={activeProject.adminUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                        darkMode
                          ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500"
                          : "bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600"
                      }`}
                    >
                      <Github className="w-5 h-5" /> Admin Portal
                    </a>
                  )}
                  <button
                    className={`flex items-center gap-2 font-medium py-3 px-6 rounded-lg transition-all duration-300 ${
                      darkMode
                        ? "text-gray-300 border border-gray-600 hover:bg-gray-700"
                        : "text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    Case Study <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
