import React from 'react';
import { GraduationCap } from 'lucide-react';

const Qualification = () => {
  const qualifications = [
    {
      title: "Secondary",
      institution: "Nayaput Sudhir Kr. High School",
      year: "2019 - Passout",
    },
    {
      title: "Higher Secondary",
      institution: "Nayaput Sudhir Kr. High School",
      year: "2021 - Passout",
    },
    {
      title: "Bachelor's Degree",
      institution: "Kalinga Institute Of Industrial Technology",
      year: "2025 - Passout",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Qualification</h2>
        <p className="text-xl text-gray-600 text-center mb-12">My personal journey</p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          {qualifications.map((qual, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white"><GraduationCap size={20} /></h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <h3 className="font-bold text-gray-800 text-xl">{qual.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{qual.institution}</p>
                <p className="text-xs text-gray-500">{qual.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualification;