import React, { useState } from "react";
import AboutImg from "../../assets/image.webp";
import CV from "../../assets/Sukharanjan-resume-update-3.pdf";
import Info from "./Info";
import { motion } from "framer-motion";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // Simulating download time
  };

  return (
    <section name="About" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About me
        </motion.h2>
        <motion.span 
          className="block text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My introduction
        </motion.span>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-2/5 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
              <img src={AboutImg} alt="About Me" className="rounded-full shadow-xl max-w-full h-auto relative z-10" />
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Info />

            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a dedicated B.Tech student and full-stack web developer with a
              keen interest in both frontend and backend technologies. My
              passion for coding drives me to work hard and strive for
              excellence in every project, ensuring that I deliver impactful and
              user-centric web applications.
            </p>

            <motion.a 
              href={CV} 
              download 
              onClick={handleDownload}
              className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${isDownloading ? 'cursor-not-allowed opacity-75' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  Download CV
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L11 12.586V5a1 1 0 112 0v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;