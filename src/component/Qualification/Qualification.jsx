import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Qualification = () => {
  const qualifications = [
    {
      title: "Secondary",
      institution: "Nayaput Sudhir Kr. High School",
      year: "2019 - Passout",
    },
    {
      title: "Higher Secondary - Science",
      institution: "Nayaput Sudhir Kr. High School",
      year: "2021 - Passout",
    },
    {
      title: "Bachelor's Degree - Information Technology",
      institution: "Kalinga Institute Of Industrial Technology",
      year: "2025 - Passout",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-indigo-400 dark:bg-purple-600"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-blue-400 dark:bg-blue-600"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:bg-zinc-900 bg-black"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-3 bg-indigo-500/10 text-indigo-600 dark:bg-purple-500/10 dark:text-purple-400">
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-purple-400 dark:to-purple-600">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-3">
            The academic journey that shaped my knowledge and skills
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full"></div>

            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 flex justify-between items-center w-full ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Content Box */}
                <div
                  className={`order-1 ${
                    index % 2 === 0 ? "w-6/12 pr-8" : "w-6/12 pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 rounded-xl"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                        <GraduationCap size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {qual.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {qual.institution}
                    </p>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">
                      {qual.year}
                    </span>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="z-20 flex items-center order-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-4 border-blue-200 dark:border-blue-700 w-12 h-12 rounded-full">
                  <div className="mx-auto p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                </div>

                <div
                  className={`order-1 ${
                    index % 2 === 0 ? "w-6/12 pl-8" : "w-6/12 pr-8"
                  }`}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <motion.div
            className="relative pl-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full"></div>

            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-8 relative"
              >
                <div className="absolute left-0 top-0 z-20 -translate-x-1/2 flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-4 border-blue-200 dark:border-blue-700 w-8 h-8 rounded-full">
                  <div className="mx-auto p-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
                    <GraduationCap size={14} className="text-white" />
                  </div>
                </div>

                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md p-4 border border-gray-100 dark:border-gray-700 rounded-lg ml-4"
                >
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-2">
                      <GraduationCap size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      {qual.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    {qual.institution}
                  </p>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">
                    {qual.year}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;