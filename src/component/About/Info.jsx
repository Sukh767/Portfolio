import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaProjectDiagram, FaCode } from 'react-icons/fa';

const InfoItem = ({ icon: Icon, title, subtitle, darkMode }) => (
  <motion.div 
    className={`p-4 rounded-lg text-center transition-all duration-300 ${
      darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
    }`}
    whileHover={{ scale: 1.03 }}
  >
    <Icon className={`text-2xl mb-2 mx-auto ${
      darkMode ? "text-purple-400" : "text-indigo-600"
    }`} />
    <h3 className={`text-sm font-semibold ${
      darkMode ? "text-gray-200" : "text-gray-700"
    }`}>{title}</h3>
    <span className={`text-xs ${
      darkMode ? "text-gray-400" : "text-gray-600"
    }`}>{subtitle}</span>
  </motion.div>
);

const Info = ({ darkMode }) => {
  const infoItems = [
    { icon: FaGraduationCap, title: "Education", subtitle: "Degree in Progress" },
    { icon: FaProjectDiagram, title: "Projects", subtitle: "10+ Completed" },
    { icon: FaCode, title: "Focus", subtitle: "Full Stack Dev" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {infoItems.map((item, index) => (
        <InfoItem key={index} {...item} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default Info;