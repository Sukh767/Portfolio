import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const projects = [
  {
    id: 1,
    title: "Scan&Dine",
    description: "Scan&Dine is an innovative solution that transforms the dining experience through seamless QR code technology. Developed using the MERN stack, it allows customers to access menus, place orders, and book tables effortlessly. Designed to streamline restaurant operations and enhance customer satisfaction, Scan&Dine empowers restaurants to register on the platform and offer their services to users. With integrated PayPal payment functionality, it provides a secure and convenient way for customers to settle bills, making dining more efficient and enjoyable for everyone.",
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
      assets.ecommerce4,
      assets.ecommerce5,
      assets.ecommerce6
    ],
    siteUrl: "https://electromart-72lq.onrender.com",
  },
  {
    id: 3,
    title: "E-Commerce Admin Dashboard",
    description: "An all-in-one dashboard for managing products, orders, and customers. Built with React and MongoDB. A responsive and user-friendly interface for managing an e-commerce store. Dynamically fetches data from the MongoDB database and displays it in a tabular format. Allows users to edit, and delete products, orders, and customers. Provides a seamless experience for managing an e-commerce store.",
    images: [
      assets.social1,
      assets.social2,
      assets.social3,
      assets.social4,
      assets.social5,
      assets.social6
    ],
    siteUrl: "https://nexify-admin-dashoard.onrender.com/",
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

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project demo ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImageCarousel images={activeProject.images} />
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