import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const projects = [
  {
    id: 1,
    title: "Scan&Dine",
    description: "Scan&Dine revolutionizes the dining experience by using QR codes for menu access and ordering. Built on the MERN stack, it streamlines restaurant operations and enhances customer satisfaction.",
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
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "A comprehensive e-commerce platform with product management and secure checkout.",
    images: [
      assets.ecommerce1,
      assets.ecommerce2,
      assets.ecommerce3,
    ],
    siteUrl: "https://electromart-72lq.onrender.com",
  },
  {
    id: 3,
    title: "Social Pulse",
    description: "An all-in-one dashboard for managing multiple social media accounts with analytics.",
    images: [
      assets.social1,
      assets.social2,
      assets.social3,
    ],
    siteUrl: "https://socialpulse-demo.vercel.app",
  },
];

const ProjectCard = ({ project, isActive, onClick }) => (
  <motion.div
    className={`cursor-pointer p-6 rounded-t-xl shadow-lg transition-all duration-300 ${
      isActive ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-white hover:bg-blue-50'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
    <p className={`text-sm line-clamp-2 ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
      {project.description}
    </p>
  </motion.div>
);

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden cursor-pointer aspect-video"
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedImage(index)}
        >
          <img
            src={image}
            alt={`Project demo ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={images[selectedImage]}
              alt="Fullscreen project demo"
              className="max-w-[90%] max-h-[90%] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            {selectedImage > 0 && (
              <button
                className="absolute left-4 text-white text-6xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => prev - 1);
                }}
              >
                &#8249;
              </button>
            )}
            {selectedImage < images.length - 1 && (
              <button
                className="absolute right-4 text-white text-6xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => prev + 1);
                }}
              >
                &#8250;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            Explore My Projects
          </h2>
          <p className="text-xl text-gray-600">Bringing ideas to life through code</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProject.id === project.id}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
              <ImageGallery images={activeProject.images} />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{activeProject.title}</h3>
                <p className="text-gray-600">{activeProject.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={activeProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Visit Site
                  </a>
                  {activeProject.id === 1 && (
                    <a
                      href={activeProject.adminUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold py-3 px-6 rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Admin Portal
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;