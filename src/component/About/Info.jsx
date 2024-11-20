import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBriefcase, FaHeadset } from 'react-icons/fa';

const InfoItem = ({ icon: Icon, title, subtitle }) => (
  <motion.div 
    className="bg-white p-4 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="text-3xl text-blue-600 mb-2 mx-auto" />
    <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
    <span className="text-sm text-gray-600">{subtitle}</span>
  </motion.div>
);

const Info = () => {
  const infoItems = [
    { icon: FaAward, title: "Experience", subtitle: "1 Year" },
    { icon: FaBriefcase, title: "Completed", subtitle: "5+ Projects" },
    { icon: FaHeadset, title: "Support", subtitle: "Online 24/7" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {infoItems.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Info;